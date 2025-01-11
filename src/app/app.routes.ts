import { Routes } from '@angular/router';
import { PickBanComponent } from './pick-ban/pick-ban.component';
import { HomeComponent } from './home/home.component';
import { VerifyComponent } from './verify/verify.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PasswordForgetComponent } from './password/password-forget/password-forget.component';
import { PasswordResetComponent } from './password/password-reset/password-reset.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: { 
            showNavbar: true,
            showFooter: true,
        },
        title: 'My BanPick 마이밴픽 | 롤 모의 밴픽'
    },
    {
        path: 'simulation/custom',
        component: PickBanComponent,
        data: { 
            showNavbar: true,
            showFooter: true,
        },
        title: '모의 밴픽',
    },
    {
        path: 'simulation/matches/:matchId',
        component: PickBanComponent,
        data: { 
            showNavbar: true,
            showFooter: true,
        },
        title: '밴픽 예측하기'
    },
    {
        path: 'auth/verify',
        component: VerifyComponent,
        data: { 
            showNavbar: true,
            showFooter: false,
        },
        title: '메일인증'
    },
    {
        path: 'auth/login',
        component: LoginComponent,
        data: { 
            showNavbar: true,
            showFooter: false,
        },
        title: '로그인'
    },
    {
        path: 'auth/signup',
        component: SignupComponent,
        data: { 
            showNavbar: true,
            showFooter: false,
        },
        title: '회원가입'
    },
    {
        path: 'auth/password/forget',
        component: PasswordForgetComponent,
        data: { 
            showNavbar: true,
            showFooter: false,
        },
        title: '비밀번호 찾기'
    },
    {
        path: 'auth/password/reset',
        component: PasswordResetComponent,
        data: { 
            showNavbar: true,
            showFooter: false,
        },
        title: '비밀번호 재설정'
    },

];
