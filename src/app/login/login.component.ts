import { Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SweetAlert2Module, SwalComponent,} from '@sweetalert2/ngx-sweetalert2';
import { AuthService } from '../auth.service';
import { HttpClientModule } from '@angular/common/http';
import { SwalService } from '../swal.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, HttpClientModule,SweetAlert2Module,],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

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
    if (this.loginForm.valid) {
      // 폼 데이터 준비
      const formData = this.loginForm.value;

      // 로그인 서비스 호출
      this.authService.login(formData).subscribe({
        next: (response: any) => {
          console.log('로그인 성공', response);
          // 성공 후 다른 페이지로 이동 (예: 홈 페이지)
          this.router.navigate(['/']);
        },
        error: (error: any) => {
          console.error('로그인 실패', error);
          // 오류 처리 (필요에 따라 메시지 표시)
          this.swalService.fireError("아이디나 비밀번호가 일치하지 않습니다.");
        }
      });
    } else {
      // 유효성 검사 실패 시 SweetAlert2 팝업 띄우기
      const emailInvalid = this.loginForm.get('email')?.invalid;
      const passwordInvalid = this.loginForm.get('password')?.invalid;

      if (emailInvalid) {
        this.swalService.fireError("올바른 이메일 형식을 입력하세요.");
      } else if (passwordInvalid) {
        this.swalService.fireError("비밀번호는 최소 6자 이상이어야 합니다.");
      }
    }
  }
}
