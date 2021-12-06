export interface ServiceElement {
  id: number,
  name: string,
  startDate: Date,
}

export interface ServiceElementModal extends ServiceElement {
  startTime: Date,
}

export enum ServiceModalMode {
  'VIEW',
  'EDIT',
  'CREATE'
}
