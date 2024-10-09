


import { baseModel } from "../models/base";
import { myResponse, pagination } from "../models/response";

export interface IBaseService<T extends baseModel> {

  getAll(filters?: Record<string, number | string | number[] | string[]>): Promise<myResponse<Array<T>>> 

  get(pagination: pagination, filters: Record<string, number | string | number[] | string[]>): Promise<myResponse<Array<T>>> 

  getById(id: number): Promise<myResponse<T>> 

  save(item: T): Promise<myResponse<T | boolean | void>> 

  update(item: Partial<T>): Promise<myResponse<T | boolean | void>>

  delete(id: number): Promise<myResponse<any>> 

  exportCSV(filters: any, fileName: string): void

}
