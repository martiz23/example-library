export declare enum ResponseErrorType {
    UnmetCondition = "UnmetCondition",
    InvalidOperation = "InvalidOperation",
    EmptyResult = "EmptyResult",
    EntityNotFound = "EntityNotFound",
    ResourceProblem = "ResourceProblem",
    UnknownProblem = "UnknownProblem",
    ExternalServiceProblem = "ExternalServiceProblem"
}
export declare class myResponse<T> {
    status: boolean;
    error_type?: ResponseErrorType;
    status_code?: number;
    data?: T | undefined;
    message?: string;
    pagination?: pagination;
    constructor(status: boolean | undefined, status_code: number | undefined, message: string | undefined, data: T | undefined, error_type?: ResponseErrorType);
}
export declare class pagination {
    total: number;
    page_count: number;
    current_page: number;
    per_page: number;
    from: number;
    to: number;
    constructor();
}
