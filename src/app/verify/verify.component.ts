import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VerifyService } from '../verify.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-verify',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './verify.component.html',
  styleUrl: './verify.component.css'
})
export class VerifyComponent implements OnInit {
  email: string = '';
  token: string = '';
  success: boolean = false;
  countdown: number = 3;
  private destroy$ = new Subject<void>();


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private verifyService: VerifyService,
  ) {};

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.email = params['email'];
      this.token = params['token'];
      console.log('Email:', this.email);
      console.log('Token:', this.token);

      this.verifyEmail();
    });
  }
  
  verifyEmail(): void {
    this.verifyService.verifyEmailToken(this.email, this.token)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          this.success = true;
          this.startCountdown();
        },
        error: (error) => {
          this.success = false;
          console.error('Error verifying: ', error);
        }
      });
  }  

  private redirectToLogin(): void {
    this.router.navigate(['/auth/login']);
  }

  private startCountdown(): void {
    const countdownInterval = setInterval(() => {
      if (this.countdown === 0) {
        clearInterval(countdownInterval); // 카운트다운 종료
        this.redirectToLogin();
      } else {
        this.countdown--;
      }
    }, 1000); // 1초마다 카운트다운 감소
  }  
  
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
