import {Component, Injectable} from '@angular/core';
import {BehaviorSubject, first, Observable, ReplaySubject, take} from 'rxjs';
import {ServiceElement, ServiceElementModal, ServiceModalMode} from '../../models/service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ServiceModalComponent} from '../../pages/services/service-modal/service-modal.component';
import {ServiceElementsService} from './service-elements.service';

@Injectable({
  providedIn: 'root'
})

export class ServiceModalService {

  private serviceModalMode: ReplaySubject<ServiceModalMode> = new ReplaySubject<ServiceModalMode>();

  constructor(
    private matDialogService: MatDialog,
    private serviceElementsService: ServiceElementsService,
  ) { }

  public getServiceModalMode(): Observable<ServiceModalMode> {
    return this.serviceModalMode.asObservable();
  }

  private setServiceModalMode(newMode: ServiceModalMode): void {
    this.serviceModalMode.next(newMode);
  }

  public openModalInMode(modeToOpenWith: ServiceModalMode, serviceElement?: ServiceElement): void {
    this.setServiceModalMode(modeToOpenWith);
    this.serviceElementsService.getServiceElements().pipe(first()).subscribe((elements) => {
      let modalData: ServiceElementModal;
      if (serviceElement) {
        const startTime = new Date(Date.now());
        startTime.setTime(serviceElement.startDate.getTime());
        startTime.setSeconds(0);
        startTime.setMilliseconds(0);
        modalData = {
          ...serviceElement,
          startTime,
        };
      } else {
        let timestamp = new Date(Date.now());
        timestamp.setSeconds(0);
        timestamp.setMilliseconds(0);
        modalData = {
          id: elements.length + 1,
          name: '',
          startDate: timestamp,
          startTime: timestamp,
        };
      }
      const modalRef = this.matDialogService.open(ServiceModalComponent, {
        width: '70%',
        data: modalData,
      })
      modalRef.afterClosed().pipe(first()).subscribe((result: ServiceElementModal) => {
        if (result && result.name !== '') {
          this.serviceElementsService.saveServiceElement(result);
        }
      })
    })
  }
}
