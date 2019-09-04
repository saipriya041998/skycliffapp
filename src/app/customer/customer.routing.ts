import { Routes,RouterModule } from "@angular/router";

import { CustomerComponent } from './customer.component';

const arr : Routes=[
  {path:'',children:[
    {path:'',component:CustomerComponent}
  ]}
];
export const customerrouting=RouterModule.forChild(arr);
