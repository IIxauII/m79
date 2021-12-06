import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {ServiceElementModal, ServiceModalMode} from '../../../models/service';
import {Subject, takeUntil} from 'rxjs';
import {ServiceModalService} from '../../../services/services/service-modal.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ServiceElementsService} from '../../../services/services/service-elements.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-service-modal',
  templateUrl: './service-modal.component.html',
  styleUrls: ['./service-modal.component.scss'],
})
export class ServiceModalComponent implements OnInit, OnDestroy {

  private destroy$: Subject<boolean> = new Subject<boolean>();
  public mode: ServiceModalMode;
  public ServiceModalModeEnum: typeof ServiceModalMode = ServiceModalMode;
  public modalHeader: string;
  public isViewMode: boolean = false;
  public serviceForm: FormGroup = new FormGroup({
    nameFormControl: new FormControl({value: '', disabled: this.isViewMode}, [Validators.required]),
    startDateFormControl: new FormControl({value: '', disabled: this.isViewMode}),
    startTimeFormControl: new FormControl({value: '', disabled: this.isViewMode}),
})

  constructor(
    private serviceElementsService: ServiceElementsService,
    private serviceModalService: ServiceModalService,
    public dialogRef: MatDialogRef<ServiceModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ServiceElementModal,
    private date: DatePipe,
  ) { }

  ngOnInit(): void {
    this.initServiceForm();
    this.serviceModalService.getServiceModalMode().pipe(takeUntil(this.destroy$)).subscribe((mode) => {
      this.mode = mode;
      switch(this.mode) {
        case ServiceModalMode.VIEW:
          this.modalHeader = 'Service';
          this.isViewMode = true;
          this.disableServiceForm();
          break;
        case ServiceModalMode.EDIT:
          this.modalHeader = 'Edit Service';
          this.enableServiceForm();
          break;
        case ServiceModalMode.CREATE:
          this.modalHeader = 'Create Service';
          this.enableServiceForm();
          break;
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  public initServiceForm(): void {
    this.serviceForm.setValue({
      nameFormControl: this.data.name,
      startDateFormControl: this.data.startDate,
      startTimeFormControl: this.date.transform(this.data.startTime, 'HH:mm', 'UTC'),
    });
    this.serviceForm.get('nameFormControl')?.markAsTouched();
  }

  public disableServiceForm(): void {
    this.serviceForm.disable({
      onlySelf: false,
      emitEvent: true,
    });
  }

  public enableServiceForm(): void {
    this.serviceForm.enable({
      onlySelf: false,
      emitEvent: true,
    });
  }

  public close() {
    this.dialogRef.close();
  }

  public save() {
    if (this.isDirty()) {
      this.forceCheck();
    } else {
      const startTimeString = this.serviceForm.value.startTimeFormControl.split(':');
      const startTimeDate = new Date(this.serviceForm.value.startDateFormControl.getTime());
      startTimeDate.setHours(parseInt(startTimeString[0]) + 1);
      startTimeDate.setMinutes(startTimeString[1]);
      const dataToSave: ServiceElementModal = {
        id: this.data.id,
        name: this.serviceForm.value.nameFormControl,
        startDate: this.serviceForm.value.startDateFormControl,
        startTime: startTimeDate,
      }
      this.dialogRef.close(dataToSave);
    }
  }

  public isDirty(): boolean {
    const status = this.serviceForm.get(['nameFormControl'])?.status;
    return (status === 'PENDING' || status === 'INVALID');
  }

  public forceCheck() {
    this.serviceForm.get(['nameFormControl'])?.updateValueAndValidity({
      onlySelf: false,
      emitEvent: true,
    });
  }
}
