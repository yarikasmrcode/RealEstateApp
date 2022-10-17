import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { HousingService } from 'src/services/Housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';

import{Routes, RouterModule} from '@angular/router';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRegisterComponent } from './user/user-register/UserRegister/UserRegister.component';
import { UserLoginComponent } from './user/user-login/UserLogin/UserLogin.component';
import { UserService } from 'src/services/user.service';
import { AlertifyService } from 'src/services/alertify.service';
import { AuthService } from 'src/services/auth.service';

import{BrowserAnimationsModule} from '@angular/platform-browser/animations'
import{BsDropdownModule} from 'ngx-bootstrap/dropdown'

import{TabsModule} from 'ngx-bootstrap/tabs'
import{ButtonsModule} from'ngx-bootstrap/buttons'

import{BsDatepickerModule} from 'ngx-bootstrap/datepicker'

const appRoutes : Routes = [
  {path: 'user/register', component : UserRegisterComponent},
  {path: 'user/login', component : UserLoginComponent},
  {path: 'add-property', component : AddPropertyComponent},
  {path: '', component : PropertyListComponent},
  {path: 'rent-property', component : PropertyListComponent},
  {path: 'property-detail/:id', component : PropertyDetailComponent},
  {path: '**', component : PropertyListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PropertyCardComponent,
    PropertyListComponent,
    AddPropertyComponent,
    PropertyDetailComponent,
    UserRegisterComponent,
    UserLoginComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  providers: [
    HousingService,
    UserService,
    AlertifyService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
