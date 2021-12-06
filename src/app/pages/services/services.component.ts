import {ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ServiceElementsService} from '../../services/services/service-elements.service';
import {Subject, takeUntil} from 'rxjs';
import {ServiceElement, ServiceModalMode} from '../../models/service';
import {ServiceModalService} from '../../services/services/service-modal.service';
import {MatTable} from '@angular/material/table';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  providers: [DatePipe],
})
export class ServicesComponent implements OnInit, OnDestroy {

  private destroy$: Subject<boolean> = new Subject();
  public serviceElements: ServiceElement[];
  public displayedColumns: string[] = ['id', 'name', 'startDate', 'actions'];

  @ViewChild(MatTable) table: MatTable<ServiceElement[]>;

  constructor(
    private serviceElementsService: ServiceElementsService,
    private serviceModalService: ServiceModalService,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.serviceElementsService.getServiceElements().pipe(takeUntil(this.destroy$)).subscribe((serviceElements) => {
      this.cdr.reattach();
      this.serviceElements = serviceElements;
      this.table?.renderRows();
    })
    this.serviceElementsService.loadServiceElements();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  public addNewService() {
    this.serviceModalService.openModalInMode(ServiceModalMode.CREATE);
  }

  public viewService(service: ServiceElement) {
    this.serviceModalService.openModalInMode(ServiceModalMode.VIEW, service);
  }

  public editService(service: ServiceElement) {
    // detaching, data binding issues
    this.cdr.detach();
    this.serviceModalService.openModalInMode(ServiceModalMode.EDIT, service);
  }
}
