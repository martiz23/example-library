import Swal from 'sweetalert2';

var ResponseErrorType;
(function (ResponseErrorType) {
    ResponseErrorType["UnmetCondition"] = "UnmetCondition";
    ResponseErrorType["InvalidOperation"] = "InvalidOperation";
    ResponseErrorType["EmptyResult"] = "EmptyResult";
    ResponseErrorType["EntityNotFound"] = "EntityNotFound";
    ResponseErrorType["ResourceProblem"] = "ResourceProblem";
    ResponseErrorType["UnknownProblem"] = "UnknownProblem";
    ResponseErrorType["ExternalServiceProblem"] = "ExternalServiceProblem";
})(ResponseErrorType || (ResponseErrorType = {}));
class myResponse {
    constructor(status = false, status_code = 500, message = "Ocurrió un error inesperado", data, error_type = ResponseErrorType.UnknownProblem) {
        this.status = status;
        this.error_type = error_type;
        this.status_code = status_code;
        this.message = message;
        this.data = data;
        this.pagination = new pagination();
    }
}
class pagination {
    constructor() {
        this.total = 0;
        this.page_count = 0;
        this.current_page = 0;
        this.per_page = 0;
        this.from = 0;
        this.to = 0;
    }
}

/**
 *
 * @param resp Response with status in false.
 * @param title
 */
function showError(resp, title, isToast) {
    const options = { showConfirmButton: true, confirmButtonColor: "#468cbb" };
    if (typeof resp.status != "boolean") {
        resp = {
            message: "",
            status: false,
            status_code: 0,
        };
    }
    // Message
    if (resp.message && resp.message?.length > 0) {
        options.text = Array.isArray(resp.message) ? resp.message.join(". ") : resp.message;
    }
    else {
        options.text = "Ocurrió un error inesperado";
    }
    //Tittle
    if (resp.status_code == 0) {
        options.title = "Se ha perdido la conexión con el servidor";
        options.icon = "error";
        options.text =
            "Se ha producido un error de conexión, esto puede ser debido a una mala conexión o que el servidor no se encuentra disponible por el momento.";
    }
    else if (resp.status_code == 419) {
        options.title = "Vuelve a iniciar sesión";
        options.icon = "info";
    }
    else if (resp.error_type == ResponseErrorType.EmptyResult || resp.status_code == 201) {
        options.title = title ? title : "Respuesta vacía";
        options.icon = "info";
    }
    else {
        if (!title && Array.isArray(resp.data)) {
            title = "Hubo un problema al cargar registros";
        }
        switch (resp.error_type) {
            case "UnmetCondition":
                options.title = title ? title : "Problema en la validación";
                options.icon = "warning";
                break;
            case "InvalidOperation":
                options.title = title ? title : "No se puede realizar la acción";
                options.icon = "warning";
                break;
            case "EntityNotFound":
                options.title = title ? title : "Registro no encontrado";
                options.icon = "warning";
                break;
            default:
                if (resp.status_code && resp.status_code < 500) {
                    options.title = title ? title : "No se pudo completar la acción";
                    options.icon = "warning";
                }
                else {
                    options.title = title ? title : "Error";
                    options.icon = "error";
                }
        }
    }
    if (isToast) {
        Swal.fire({ toast: true, position: "bottom-right", timer: 10000, ...options });
    }
    else {
        Swal.fire(options);
    }
}

/**
 * Returns a key in a enum given a value.
 * @param value
 * @param enum
 * @returns key
 */
function getKeyInEnum(value, enu) {
    return Object.keys(enu).find((k) => enu[k] === value);
}

/*
 * Public API Surface of ngx-custom-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { getKeyInEnum, showError };
//# sourceMappingURL=ngx-custom-lib.mjs.map
