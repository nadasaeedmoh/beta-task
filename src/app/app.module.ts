import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarouselViewComponent } from './carousel-view/carousel-view.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FormsModule, FormGroup, FormBuilder, ReactiveFormsModule, FormControl  }   from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RouterModule, Routes } from '@angular/router';
import { CreateOrderComponent } from './create-order/create-order.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { HeaderEditedComponent } from './header-edited/header-edited.component';
import { OrderHeaderComponent } from './create-order/order-header/order-header.component';

import { HandelItemsService } from './create-order/handel-items.service';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular5-social-login";


const routes: Routes = [
  {path:'', component: RegisterComponent},
  {path:'LogIn', component: SignInComponent},
  {path:'SignUp', component: RegisterComponent},
  {path:'ResetPassword', component: ResetPasswordComponent},
  {path: 'Shop', component: CreateOrderComponent},
  
];

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("128769651307622")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("751865979954-cg6e5umui9utr2luv79jaq4acgmsaef7")
        }
      ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselViewComponent,
    SignInComponent,
    RegisterComponent,
    CreateOrderComponent,
    ResetPasswordComponent,
    HeaderEditedComponent,
    OrderHeaderComponent,
    
    
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    NgbModule,
    FormsModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(routes, {useHash:true}),
    ReactiveFormsModule,
    SocialLoginModule
 
    
  
  ],
  providers: [HandelItemsService, {provide: AuthServiceConfig, useFactory: getAuthServiceConfigs}],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
