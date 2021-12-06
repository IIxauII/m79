import { Injectable } from '@angular/core';
import {first, Observable, ReplaySubject, Subject} from 'rxjs';
import {ServiceElement, ServiceElementModal} from '../../models/service';
import {DatePipe} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ServiceElementsService {

  private serviceElements: ReplaySubject<ServiceElement[]> = new ReplaySubject<ServiceElement[]>();

  constructor(
    private date: DatePipe,
  ) { }

  public getServiceElements(): Observable<ServiceElement[]> {
    return this.serviceElements.asObservable();
  }

  public loadServiceElements(): void {
    const mockedServiceElements: ServiceElement[] = [];
    for (let x = 1; x <= 10; x++) {
      const date = new Date().setDate(new Date().getDate() - x);
      const mockedServiceElement: ServiceElement = {
        id: x,
        name: 'Service ' + x,
        startDate: new Date(date),
      }
      mockedServiceElements.push(mockedServiceElement);
    }
    this.setServiceElements(mockedServiceElements);
  }

  public setServiceElements(newServiceElements: ServiceElement[]): void {
    this.serviceElements.next(newServiceElements);
  }

  private convertToServiceElement(serviceElementModal: ServiceElementModal): ServiceElement {
    const convertedDate = new Date(serviceElementModal.startDate.toString());
    convertedDate.setHours(serviceElementModal.startTime.getHours());
    convertedDate.setMinutes(serviceElementModal.startTime.getMinutes());
    return {
      id: serviceElementModal.id,
      name: serviceElementModal.name,
      startDate: convertedDate,
    };
  }

  public saveServiceElement(newServiceElementModal: ServiceElementModal): void {
    this.getServiceElements().pipe(first()).subscribe((elements: ServiceElement[]) => {
      const newServiceElement = this.convertToServiceElement(newServiceElementModal);
      const existsIndex = elements.findIndex((element) => element.id === newServiceElement.id);
      if (existsIndex !== -1) {
        // editing existing service
        elements[existsIndex] = newServiceElement;
      } else {
        // creating new service
        elements.push(newServiceElement);
      }
      this.setServiceElements(elements);
    })
  }
}
