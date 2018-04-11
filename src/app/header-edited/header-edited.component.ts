import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-edited',
  templateUrl: './header-edited.component.html',
  styleUrls: ['./header-edited.component.css']
})
export class HeaderEditedComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  goSignIn(){
    this.router.navigateByUrl('LogIn');
  }

  goSignuP(){
    this.router.navigateByUrl('SignUp');
  }
}
