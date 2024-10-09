export enum ResponseErrorType {
  UnmetCondition = "UnmetCondition",
  InvalidOperation = "InvalidOperation",
  EmptyResult = "EmptyResult",
  EntityNotFound = "EntityNotFound",
  ResourceProblem = "ResourceProblem",
  UnknownProblem = "UnknownProblem",
  ExternalServiceProblem = "ExternalServiceProblem",
}

export class myResponse<T> {
  status: boolean;
  error_type?: ResponseErrorType;
  status_code?: number;
  data?: T | undefined;
  message?: string;
  pagination?: pagination;

  constructor(
    status = false,
    status_code = 500,
    message = "Ocurrió un error inesperado",
    data: T | undefined,
    error_type = ResponseErrorType.UnknownProblem,
  ) {
    this.status = status;
    this.error_type = error_type;
    this.status_code = status_code;
    this.message = message;
    this.data = data;
    this.pagination = new pagination();
  }
}

export class pagination {
  total: number;
  page_count: number;
  current_page: number;
  per_page: number;
  from: number;
  to: number;

  constructor() {
    this.total = 0;
    this.page_count = 0;
    this.current_page = 0;
    this.per_page = 0;
    this.from = 0;
    this.to = 0;
  }
}
