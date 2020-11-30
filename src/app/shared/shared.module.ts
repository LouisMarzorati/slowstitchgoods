import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { KnitComponent } from './knit/knit.component';
import { SubscribeComponent } from './subscribe/subscribe.component';


const components = [HeaderComponent, FooterComponent, SubscribeComponent, KnitComponent]
const modules = [
  CommonModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  ReactiveFormsModule,
  BrowserAnimationsModule,
  BrowserModule,
  FormsModule,
  RouterModule
]
@NgModule({
  declarations: [...components, KnitComponent ],
  imports: [...modules],
  exports: [
    ...components,
    ...modules
  ]
})
export class SharedModule { }