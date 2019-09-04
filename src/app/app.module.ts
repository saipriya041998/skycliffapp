import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { routing } from './app.routing';
import { TaskdisplayComponent } from './taskdisplay/taskdisplay.component';
import { TaskaddComponent } from './taskdisplay/taskadd/taskadd.component';
import { EdittaskComponent } from './taskdisplay/edittask/edittask.component';
import { SignupReactiveDemoComponent } from './userdisplay/signup-reactive-demo/signup-reactive-demo.component';
import { EdituserreactiveComponent } from './userdisplay/edituserreactive/edituserreactive.component';
import { LoginComponent } from './login/login.component';
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Interceptordemo } from './interceptordemo';
import { Product1Component } from './product1/product1.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { AppCustomPreloader } from './appcustomepreloader';
import { Taskadd2Component } from './taskdisplay/taskadd2/taskadd2.component';
import { Edittask2Component } from './taskdisplay/edittask2/edittask2.component';
import { Task1Component } from './task1/task1.component';
// import { ProductModule } from './productdisplay/product.module';
// import { UserModule } from './userdisplay/user.module';
// import { CustomerModule } from './customer/customer.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TaskdisplayComponent,
    TaskaddComponent,
    EdittaskComponent,
    SignupReactiveDemoComponent,
    EdituserreactiveComponent,
    LoginComponent,
    DemoComponent,
    Demo1Component,
    Demo2Component,
    Product1Component,
    UsersComponent,
    HomeComponent,
    Taskadd2Component,
    Edittask2Component,
    Task1Component
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    // ProductModule,
    // UserModule,
    // CustomerModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: Interceptordemo, multi: true},AppCustomPreloader
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
