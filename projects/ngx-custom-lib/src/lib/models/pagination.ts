export class pagination {
  page: number;
  pageSize: number;
  collectionSize: number;
  date?: Date;
  view?: string;
  calendar?: boolean;

  constructor() {
    this.page = 1;
    this.pageSize = 15;
    this.collectionSize = 0;
    this.date = new Date();
    this.view = viewOptions.Semana;
  }
}

export enum viewOptions {
  Día = "1",
  Semana = "2",
  Mes = "3",
}
