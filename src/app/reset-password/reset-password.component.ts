import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})


export class ResetPasswordComponent implements OnInit {
 emailValue;
 jsonData;
  constructor() { }

  ngOnInit() {
  }
reset(event:string){
  console.log(event);
this.emailValue = event;
this.jsonData = JSON.stringify(this.emailValue);

}
}
