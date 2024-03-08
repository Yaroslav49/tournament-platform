import { TuiRootModule, TuiDialogModule, TuiAlertModule, TuiButtonModule, TuiLabelModule, TuiErrorModule} from "@taiga-ui/core";
import {TuiInputModule, TuiInputDateTimeModule, TuiInputNumberModule, TuiFieldErrorPipeModule} from '@taiga-ui/kit';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [ AppComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
      BrowserAnimationsModule,
      TuiRootModule,
      TuiDialogModule,
      TuiAlertModule,
      TuiButtonModule,
      TuiInputModule,
      TuiLabelModule,
      TuiInputDateTimeModule,
      TuiInputNumberModule,
      TuiErrorModule,
      TuiFieldErrorPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
