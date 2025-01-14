import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { SwalService } from '../swal.service';
import { AuthService } from '../auth.service';
import { ValidatorsService } from '../validators.service';
import { UserService } from '../user.service';
import { finalize } from 'rxjs';
import { SpinnerComponent } from "../spinner/spinner.component";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule, HttpClientModule, SpinnerComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupForm: FormGroup;
  signupComplete: boolean = false;
  trying = false;

  constructor(private fb: FormBuilder, private http: HttpClient,
     private router: Router, private swalService: SwalService,
     private validators: ValidatorsService, private authService: AuthService,
     private userService: UserService
    ) {

    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.validators.passwordValidator() ]],
      nickname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      agreement: [false, Validators.requiredTrue],
    });
  }

  get email() {
    return this.signupForm.get('email')
  }

  get password() {
    return this.signupForm.get('password')
  }

  get nickname() {
    return this.signupForm.get('nickname')
  }  

  onSubmit() {
    if (this.trying) {
      return;
    }

    if (this.signupForm.valid) {
      // 폼 데이터 준비
      // const formData = this.signupForm.value;
      const formData = {
        ...this.signupForm.value,
        rawPassword: this.signupForm.value.password
      };

      delete formData.password;

      this.trying = true;

      // 서버에 POST 요청 보내기
      this.authService.signup(formData)
        .pipe(finalize(() => (this.trying = false)))
        .subscribe({
          next: (response: any) => {
            console.log('회원가입 요청 완료');
            this.swalService.fireSuccess(`${formData.email}로 메일이 전송되었습니다.<br />인증을 완료해주세요.`);
            // 성공 후 다른 페이지로 이동 (예: 로그인 페이지)
            this.signupComplete = true;
          },
          error: (response) => {
            const errorCode: string = response.error.code;
            const alertMessage: string = response.error.alert?.text;

            if (errorCode == 'U002') {
              this.swalService.fireError("이미 가입이 된 이메일 입니다.");
            } else if (errorCode == 'U003') {
              this.swalService.fireError("이미 존재하는 닉네임 입니다.");
            } else {
              this.swalService.fireError("회원가입 실패. 관리자에게 문의하세요.", alertMessage);
            }
   
          }
        });
    } 
    else {
      const emailInvalid = this.signupForm.get('email')?.invalid;
      const passwordInvalid = this.signupForm.get('password')?.invalid;
      const nicknameInvalid = this.signupForm.get('nickname')?.invalid;
      const agreementInvalid = this.signupForm.get('agreement')?.invalid;

      if (emailInvalid) {
        this.swalService.fireError("이메일이 올바르지 않습니다.");
      } else if (passwordInvalid) {
        this.swalService.fireError("비밀번호는 최소 6자 이상이어야 합니다.");
      } else if (nicknameInvalid) {
        this.swalService.fireError("닉네임은 최소 2자 이상, 10자 이하이어야 합니다.");
      } else if (agreementInvalid) {
        this.swalService.fireError("이용약관에 동의가 필요합니다.");
      }
    }
  }
  
  sendEmail() {
    if (this.trying) {
      return;
    }    

    this.trying = true;

    const { email } = this.signupForm.value;
    this.userService.sendVerifyEmail({ email })
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
