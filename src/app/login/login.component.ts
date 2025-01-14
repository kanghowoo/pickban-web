import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SweetAlert2Module, SwalComponent,} from '@sweetalert2/ngx-sweetalert2';
import { AuthService } from '../auth.service';
import { HttpClientModule } from '@angular/common/http';
import { SwalService } from '../swal.service';
import { ErrorCode, ErrorMessage } from '../error/error-codes';
import { LoginRequest } from './schema/login-request.model';
import { finalize } from 'rxjs';
import { SpinnerComponent } from "../spinner/spinner.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, HttpClientModule, SweetAlert2Module, SpinnerComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  sendComplete = false;
  trying = false;

  constructor(private fb: FormBuilder, private router: Router,
    private authService: AuthService,
    private swalService: SwalService,
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.trying) {
      return;
    }

    if (this.loginForm.valid) {
      // 폼 데이터 준비
      const formData: LoginRequest = this.loginForm.value;

      this.trying = true;

      // 로그인 서비스 호출
      this.authService.login(formData)
        .pipe(finalize(() => (this.trying = false)))
        .subscribe({
        next: (response: any) => {
          this.sendComplete = true;
          this.authService.setUser(response.body)
          // 성공 후 다른 페이지로 이동 (예: 홈 페이지)
          this.router.navigate(['/']);
        },
        error: (response: any) => {
          const errorCode = response.error.code as ErrorCode;

          if (response.error.code === ErrorCode.LOGIN_AUTHENTICATION_FAILED) {
            this.swalService.fireError("아이디나 비밀번호가 일치하지 않습니다.");
          } else {
            const errorMessage = ErrorMessage[ErrorCode.NOT_VERIFIED_USER];
            this.swalService.fireError(errorMessage);
          }
        }
      });
    } else {
      const emailInvalid = this.loginForm.get('email')?.invalid;
      const passwordInvalid = this.loginForm.get('password')?.invalid;

      if (emailInvalid) {
        this.swalService.fireError("이메일이 올바르지 않습니다.");
      } else if (passwordInvalid) {
        this.swalService.fireError("비밀번호는 최소 6자 이상이어야 합니다.");
      }
    }
  }
}
