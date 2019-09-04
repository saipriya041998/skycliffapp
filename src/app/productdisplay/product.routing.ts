import { Routes,RouterModule } from '@angular/router';
import { EditproductComponent } from "./editproduct/editproduct.component";
import { ProductaddComponent } from './productadd/productadd.component';
import { ProductdisplayComponent } from './productdisplay.component';

const arr: Routes=[
{path:'',children:[
  {path:'',component:ProductdisplayComponent},
  {path:'addproduct',component:ProductaddComponent},
  {path:'editproduct/:pro_id',component:EditproductComponent}
]},

];
export const productrouting=RouterModule.forChild(arr);
