import { Routes,RouterModule, PreloadAllModules } from "@angular/router";
import { TaskdisplayComponent } from './taskdisplay/taskdisplay.component';
import { TaskaddComponent } from './taskdisplay/taskadd/taskadd.component';
import { EdittaskComponent } from './taskdisplay/edittask/edittask.component';
import { SignupReactiveDemoComponent } from './userdisplay/signup-reactive-demo/signup-reactive-demo.component';
import { EdituserreactiveComponent } from './userdisplay/edituserreactive/edituserreactive.component';
import { LoginComponent } from './login/login.component';
import { UserGuardService } from './user-guard.service';
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Product1Component } from './product1/product1.component';
import { ProductResolverService } from './product-resolver.service';
import { UsersComponent } from './users/users.component';
import { UserResolverService } from './user-resolver.service';
import { HomeComponent } from './home/home.component';
import { AppCustomPreloader } from './appcustomepreloader';
import { Taskadd2Component } from './taskdisplay/taskadd2/taskadd2.component';
import { Edittask2Component } from './taskdisplay/edittask2/edittask2.component';
import { Task1Component } from './task1/task1.component';
import { TaskResolverService } from './task-resolver.service';
import { TaskGuardService } from './task-guard.service';



const arr: Routes = [
  {path:'',component:HomeComponent},
  // {path:'product',component:ProductdisplayComponent},
  // {path:'addproduct',canActivate:[UserGuardService],component:ProductaddComponent},
  // {path:'users',canActivate:[UserGuardService],component:UserdisplayComponent},
  // {path:'signup',component:SignupComponent},
  // {path:'customer',component:CustomerComponent},
  {path:'product',canLoad:[UserGuardService],loadChildren:'./productdisplay/product.module#ProductModule'},
  {path:'customer',data:{preload:true},loadChildren:'./customer/customer.module#CustomerModule'},
  {path:'users',loadChildren:'./userdisplay/user.module#UserModule'},
  {path:'edit/:user_email',component:EdituserreactiveComponent},
  {path:'signin',component:SignupReactiveDemoComponent},
  {path:'login',component:LoginComponent},
  // {path:'edituser/:user_email',component:EdituserComponent},
  // {path:'editproduct/:pro_id',component:EditproductComponent},
  {path:'tasks',canActivate:[TaskGuardService],component:TaskdisplayComponent},
  {path:'addtask',component:TaskaddComponent},
  {path:'edittask/:Id',component:EdittaskComponent},
  {path:'demo',component:DemoComponent},
  {path:'demo1/:id',component:Demo1Component},
  {path:'demo2',component:Demo2Component},
  {path:'product1',resolve:{pdata:ProductResolverService},component:Product1Component},
  {path:'user1',resolve:{udata:UserResolverService},component:UsersComponent},
  {path:'addtask2',component:Taskadd2Component},
  {path:'edittask2/:id',component:Edittask2Component},
  {path:'task1',resolve:{tdata:TaskResolverService},component:Task1Component}
];



export const routing =RouterModule.forRoot(arr,{preloadingStrategy:AppCustomPreloader});
