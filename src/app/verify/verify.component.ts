import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VerifyService } from '../verify.service';

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

  constructor(
    private route: ActivatedRoute,
    private verifyService: VerifyService,
  ) {};

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.email = params['email'];
      this.token = params['token'];
      console.log('Email:', this.email);
      console.log('Token:', this.token);

      this.verifyService.verifyEmailToken(this.email, this.token)
        .subscribe({
          next: () => {
            console.log('verification successful');
          },
          error: (error) => {
            console.log('error verifying: ', error);
          }
      });
    });
  }
  

}
