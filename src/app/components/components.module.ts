import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchTextFieldComponent } from './search-text-field/search-text-field.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    SearchTextFieldComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    MatInputModule, 
    MatButtonModule, 
    MatIconModule
  ],
  exports: [
    SearchTextFieldComponent
  ]
})
export class ComponentsModule { }
