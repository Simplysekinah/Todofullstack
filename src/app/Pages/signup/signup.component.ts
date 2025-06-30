import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AngularToastifyModule, ToastService } from 'angular-toastify';


@Component({
  selector: 'app-signup',
  imports: [CommonModule, ReactiveFormsModule, FormsModule,AngularToastifyModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  providers:[ToastService]
})
export class SignupComponent {
  fullName = '';
  email = '';
  password = '';
  showLogin = false;
  showForgotPassword = false;
  showOTP = false;
  showResetPassword = false;


  SignupForm!: FormGroup;
  LoginForm!: FormGroup;
  ForgetPasswordForm!: FormGroup;
  OTPForm!: FormGroup;
  ResetPasswordForm!: FormGroup;

  constructor(private FB: FormBuilder,private router:Router, private toast:ToastService) { }

  ngOnInit() {

    this.showLogin = false;
    this.showForgotPassword = false;
    this.showOTP = false;
    this.showResetPassword = false;

    this.SignupForm = this.FB.group({
      // fullname: ['', [Validators.required, Validators.minLength(5)]],
      username: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.LoginForm = this.FB.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.ForgetPasswordForm = this.FB.group({
      email: ['', [Validators.required, Validators.email]]
    });

    this.OTPForm = this.FB.group({
      otp1: ['', [Validators.required, Validators.minLength(1)]],
      otp2: ['', [Validators.required, Validators.minLength(1)]],
      otp3: ['', [Validators.required, Validators.minLength(1)]],
      otp4: ['', [Validators.required, Validators.minLength(1)]]
    });

    this.ResetPasswordForm = this.FB.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      reset: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
  onSubmit() {
    if (this.SignupForm.invalid) {
      return;
    }
    console.log('User signed up:', this.SignupForm.value);
    alert(`Welcome, ${this.fullName}!`);
  }
  signUpWith(provider: string) {
    console.log(`Signing up with ${provider}`);
    alert(`Redirecting to ${provider} sign-up...`);
  }

  onLogin() {
    // console.log('first')
    // console.log(this.LoginForm.value);
    // this.submitted = true;
    // console.log(this.service.Signup(this.SignupForm.value));

    if (this.LoginForm.invalid) {
      return;
    }
    // this.service.Signin(this.LoginForm.value).subscribe((response)=>{
    //   console.log(response)
    //   console.log(response.user._id)
    //   localStorage.setItem('_id',response.user._id)
    //   this.success = 'Signin successful';
    //   this.router.navigate(['/dashboard'])
    // },
    // (error) => {
    //   console.error('Signup failed:', error)});
  }

  onForgotPassword() {
    console.log('first')
    console.log(this.ForgetPasswordForm.value);
    // this.submitted = true;

    if (this.ForgetPasswordForm.invalid) {
      return;
    }
    // this.service.ForgetPassword(this.ForgetPasswordForm.value).subscribe((response)=>{
    //   console.log(response)
    //   this.success = 'Email Received';
    //   localStorage.setItem('email', this.ForgetPasswordForm.value.email);
    //   this.showOTPForm();
    // },
    // (error) => {
    //   console.error('Email failed:', error)});
  }

  onOTPVerification() {
    console.log('first')
    console.log(this.OTPForm.value);
    // this.submitted = true;

    if (this.OTPForm.invalid) {
      return;
    }
    // const otp = this.OTPForm.value.otp1 + this.OTPForm.value.otp2 + this.OTPForm.value.otp3 + this.OTPForm.value.otp4;
    // this.OTPForm.value.otp = otp;
    // console.log(otp)
    // console.log(this.OTPForm.value.otp)
    // // this.OTPForm.value.email = this.ForgetPasswordForm.value.email;
    // let email =localStorage.getItem('email');
    // let e = {email: email, otp: otp};
    // console.log(e)
    // this.service.ResetPassword(e).subscribe((response)=>{
    //   console.log(response)
    //   this.success = 'Email Received';
    //   localStorage.setItem('otp', e.otp);
    //   this.showResetPasswordForm();
    // },
    // (error) => {
    //   console.error('Email failed:', error)});
  }

  onResetPassword() {
    console.log('first')
    console.log(this.OTPForm.value);
    // this.submitted = true;

    // let email =localStorage.getItem('email');
    // let otp =localStorage.getItem('otp');
    // if (this.ResetPasswordForm.invalid) {
    //   return;
    // }else if(this.ResetPasswordForm.value.password != this.ResetPasswordForm.value.reset){
    //   this.success = 'Password does not match';
    //   return;
    // }
    // let e = {email: email, otp: otp, password: this.ResetPasswordForm.value.password};
    // console.log(e)
    // this.service.VerifyPassword(e).subscribe((response)=>{
    //   console.log(response)
    //   this.success = 'Password Reset Successful';
    //   this.backToLogin();
    // },
    // (error) => {
    //   console.error('Password Reset Failed:', error)});
  }

  toggleForm() {
    this.showLogin = !this.showLogin;
    this.showForgotPassword = false;
    this.showOTP = false;
    this.showResetPassword = false;
  }

  showForgotPasswordForm() {
    this.showForgotPassword = true;
    this.showLogin = false;
    this.showOTP = false;
    this.showResetPassword = false;
  }

  showOTPForm() {
    this.showOTP = true;
    this.showForgotPassword = false;
    this.showLogin = false;
    this.showResetPassword = false;
  }

  showResetPasswordForm() {
    this.showResetPassword = true;
    this.showOTP = false;
    this.showForgotPassword = false;
    this.showLogin = false;
  }

  backToLogin() {
    this.showLogin = true;
    this.showForgotPassword = false;
    this.showOTP = false;
    this.showResetPassword = false;
  }

  onDashboard() {
    let token = localStorage.getItem('token');
    // if(token){
    //   this.service.getUserData().subscribe((response)=>{
    //     console.log(response);
    //     this.router.navigate(['/dashboard'])
    //   },
    //   (error) => {
    //     console.error('Failed:', error)
    //     this.success = 'Session Expired';
    //     this.router.navigate(['/signup'])
    //   });
    // }else{
    //   this.router.navigate(['/signup'])
    // }
  }
}
