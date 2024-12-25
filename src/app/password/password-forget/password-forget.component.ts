import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { SwalService } from '../../swal.service';
import { UserService } from '../../user.service';
import { finalize } from 'rxjs';
import { SpinnerComponent } from "../../spinner/spinner.component";


@Component({
  selector: 'app-password-forget',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, HttpClientModule, SpinnerComponent],
  templateUrl: './password-forget.component.html',
  styleUrl: './password-forget.component.css'
})
export class PasswordForgetComponent {
  passwordForgetForm: FormGroup;
  sendComplete = false;
  trying = false;

  constructor(private fb: FormBuilder, private http: HttpClient,
     private router: Router, private swalService: SwalService,
     private userService: UserService) {
    this.passwordForgetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get email() {
    return this.passwordForgetForm.get('email')
  }  

  onSubmit() {
    if (this.trying) {
      return;
    }

    if (this.passwordForgetForm.valid) {
      // 폼 데이터 준비
      const { email } = this.passwordForgetForm.value;

      this.trying = true;

      this.userService.sendPasswordResetEmail({ email })
        .pipe(finalize(() => (this.trying = false)))
        .subscribe({
        next: () => {
          this.sendComplete = true;
        },

        error: (response) => {
          const errorCode: string = response.error.code;
          const alertMessage: string = response.error.alert?.text;

          if (errorCode == 'C002') {
            this.swalService.fireError("회원가입 되지 않은 이메일 주소 입니다.");
          } else {
            this.swalService.fireError('이메일 전송에 실패했습니다.', alertMessage);          
          }
        }
          
      });

    } 
    else {
      const emailInvalid = this.passwordForgetForm.get('email')?.invalid;
      
      if (emailInvalid) {
        this.swalService.fireError("이메일이 올바르지 않습니다.");
      }
    }
  }

  sendEmail() {
    if (this.trying) {
      return;
    }    

    this.trying = true;

    const { email } = this.passwordForgetForm.value;
    this.userService.sendPasswordResetEmail({ email })
      .pipe(finalize(() => (this.trying = false)))
      .subscribe({
        next: () => {
          this.swalService.fireSuccess(`${email}로 메일이 전송되었습니다.<br/>인증을 완료해주세요.`);
        },
        error: (response) => {
          const alertMessage: string = response.error.alert?.text;
          this.swalService.fireError('이메일 전송에 실패했습니다.', alertMessage);
        }
      })
  }  
}
