import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';
import { FormGroup, FormBuilder, Validators,  FormControl, ValidationErrors   } from '@angular/forms';
import {matchingPasswords} from '../validators';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular5-social-login';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  user:User;
  jsonData;


  constructor(private router: Router, private formReg: FormBuilder,private socialAuthService: AuthService ) {
    this.createForm();
   }
  
  createForm(){
    this.registerForm = this.formReg.group({
      email:['', Validators.compose([Validators.required, Validators.pattern('[^ @]*@[^ @]*')])],
      name:['', Validators.required],
      pass:['', Validators.required],
      confpass:['', Validators.required],
      MobileNo:['', Validators.required]},
      { validator: matchingPasswords('pass', 'confpass')} 

    );
  }

  ngOnInit() {
  }
  
  onSubmit(){
    console.log('form submmited');
  }
  newUser() {
    if(this.registerForm.valid){
      this.user = new User(
        this.registerForm.get('email').value,
        this.registerForm.get('name').value,
        this.registerForm.get('pass').value,
        this.registerForm.get('confpass').value,
        this.registerForm.get('MobileNo').value
      );
      console.log(this.registerForm);
      this.registerForm.reset();
    }
    this.jsonData = JSON.stringify(this.user);
    this.router.navigateByUrl('Shop');

  }

  onSignIn(googleUser){
      var profile = googleUser.getBasicProfile();
      console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
      console.log('Name: ' + profile.getName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    }
  
  

  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        // Now sign-in with userData
      
            
      }
    );
  }
  

}
