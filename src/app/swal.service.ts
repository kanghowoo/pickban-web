import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SwalService {

  private swalWithGlobalStyles = Swal.mixin({
    confirmButtonText: "확인",
    customClass: {
      popup: "w-460px",
      icon: "text-sm",
      title: "text-2xl",
      htmlContainer: 'swal2-custom-htmlContainer',
      confirmButton: "card-button",
    }
  });

  constructor() { }


  public fireSuccess(inputText: string) {
    this.swalWithGlobalStyles.fire( {
      html: inputText,
      icon: "success",
    })
  }

  public fireError(errorMessage: string, alertText?: string) {
    errorMessage = alertText == null ? errorMessage : alertText;
    this.swalWithGlobalStyles.fire({
      html: errorMessage,
      icon: "error",
    })
  }

}
