import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerComponent } from './customer.component';
import { customerrouting } from './customer.routing';

@NgModule({
  declarations:[CustomerComponent],
  imports:[CommonModule,ReactiveFormsModule,customerrouting]
})
export class CustomerModule{}
