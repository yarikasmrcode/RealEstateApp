import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { AlertifyService } from 'src/services/alertify.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-UserRegister',
  templateUrl: './UserRegister.component.html',
  styleUrls: ['./UserRegister.component.css']
})

export class UserRegisterComponent implements OnInit {

  registrationForm : FormGroup;
  user : User;
  userSubmitted : boolean;

  constructor(private alertify : AlertifyService
    ,private fb : FormBuilder,
    private userService : UserService) { }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      userName :  new FormControl(null, Validators.required),
      email :  new FormControl(null, [Validators.required, Validators.email]),
      password : new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPassword : new FormControl(null, [Validators.required]),
      mobile : new FormControl(null, [Validators.required, Validators.maxLength(10)]),
    }, this.passwordMatchingValidator);
  }

  get userName(){
    return this.registrationForm.get('userName') as FormControl;
  }

  get email(){
    return this.registrationForm.get('email') as FormControl;
  }
  get password(){
    return this.registrationForm.get('password') as FormControl;
  }
  get confirmPassword(){
    return this.registrationForm.get('confirmPassword') as FormControl;
  }
  get mobile(){
    return this.registrationForm.get('mobile') as FormControl;
  }
  passwordMatchingValidator(fc: AbstractControl): ValidationErrors | null {
    return fc.get('password')?.value === fc.get('confirmPassword')?.value ? null :
      { notmatched: true }
  };

  onSubmit(){
    console.log(this.registrationForm);
    this.userSubmitted = true;
    if(this.registrationForm.valid){
      //this.user = Object.assign(this.user, this.registrationForm.value);
      this.userService.addUser(this.userData());
      this.registrationForm.reset();
      this.userSubmitted = false;

      this.alertify.success("You've successfully registered");
    }else{
      this.alertify.error("Registration failed. Try again");
    }
  }

  userData() : User{
    return this.user = {
      userName : this.userName.value,
      email : this.email.value,
      password : this.password.value,
      mobile : this.mobile.value
    };
  }
}
