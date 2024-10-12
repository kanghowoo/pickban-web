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


  public fire(options: any) {
    return this.swalWithGlobalStyles.fire(options);
  }

  public fireError(inputText: string) {
    this.swalWithGlobalStyles.fire( {
      text: inputText,
      icon: "error",
    })
  }

  // <swal #passwordValidationSwal text="비밀번호는 최소 6자 이상이어야 합니다." icon="error" confirmButtonText="확인"></swal>

}
