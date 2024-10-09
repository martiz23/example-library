export class baseModel {
  id?: number;
  // active?: boolean;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date | null;

  constructor() {
    this.id = 0;
    // this.active = true;
    this.created_at = new Date();
    this.updated_at = new Date();
    this.deleted_at = null;
  }
}

export class baseCatalog extends baseModel {
  name: string;

  constructor() {
    super();
    this.name = "";
  }
}
