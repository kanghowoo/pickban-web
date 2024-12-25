import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { SwalService } from '../../swal.service';

@Component({
  selector: 'app-password-reset',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, RouterLink],
  templateUrl: './password-reset.component.html',
  styleUrl: './password-reset.component.css'
})
export class PasswordResetComponent {
  passwordResetForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient,
     private router: Router, private swalService: SwalService) {
    this.passwordResetForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }


  onSubmit() {
    if (this.passwordResetForm.valid) {
      // 폼 데이터 준비
      const formData = this.passwordResetForm.value;

      // 서버에 POST 요청 보내기
      this.http.post('https://api.example.com/auth/signup', formData)
        .subscribe({
          next: (response) => {
            console.log('비밀번호 재설정 성공', response);
          },
          error: (error) => {
            
          }
        });
    } 
    else {
      const passwordInvalid = this.passwordResetForm.get('password')?.invalid;

      if (passwordInvalid) {
        this.swalService.fireError("비밀번호는 최소 6자 이상 이어야 합니다.");
      }
    }
  }
}
