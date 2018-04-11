import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators,  FormControl  } from '@angular/forms';
import { User } from '../user';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signInForm:FormGroup;
  user:User;
  jsonData;
  
  constructor(private router:Router,private formSignIn: FormBuilder) {
    this.createForm();
   }
   createForm(){
     this.signInForm = this.formSignIn.group({
       email:
       ['', Validators.compose([Validators.required, Validators.pattern('[^ @]*@[^ @]*')])],
       pass:['', Validators.required]
     });
   }
  ngOnInit() {
  }

  signIn(){
   
    if(this.signInForm.valid){
      this.user = new User(
        this.signInForm.get('email').value,
        this.signInForm.get('pass').value
      );
      console.log(this.signInForm);
      this.signInForm.reset();
    }
    this.jsonData = JSON.stringify(this.user);
    this.router.navigateByUrl('Shop');
  }
}
