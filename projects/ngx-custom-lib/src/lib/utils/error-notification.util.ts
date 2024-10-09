import Swal, { SweetAlertOptions } from "sweetalert2";
import { ResponseErrorType, myResponse } from "../models/response";

/**
 *
 * @param resp Response with status in false.
 * @param title
 */
export function showError(resp: myResponse<any>, title?: string, isToast?: boolean) {
  const options: SweetAlertOptions = { showConfirmButton: true, confirmButtonColor: "#468cbb" };

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
  } else {
    options.text = "Ocurrió un error inesperado";
  }

  //Tittle
  if (resp.status_code == 0) {
    options.title = "Se ha perdido la conexión con el servidor";
    options.icon = "error";
    options.text =
      "Se ha producido un error de conexión, esto puede ser debido a una mala conexión o que el servidor no se encuentra disponible por el momento.";
  } else if (resp.status_code == 419) {
    options.title = "Vuelve a iniciar sesión";
    options.icon = "info";
  } else if (resp.error_type == ResponseErrorType.EmptyResult || resp.status_code == 201) {
    options.title = title ? title : "Respuesta vacía";
    options.icon = "info";
  } else {
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
        } else {
          options.title = title ? title : "Error";
          options.icon = "error";
        }
    }
  }

  if (isToast) {
    Swal.fire({ toast: true, position: "bottom-right", timer: 10000, ...options });
  } else {
    Swal.fire(options);
  }
}
