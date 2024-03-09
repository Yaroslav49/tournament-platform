import { TuiRootModule, TuiDialogModule, TuiAlertModule, TuiButtonModule, TuiLabelModule, TuiErrorModule} from "@taiga-ui/core";
import {TuiInputModule, TuiInputDateTimeModule, TuiInputNumberModule, TuiFieldErrorPipeModule} from '@taiga-ui/kit';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterOutlet } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page.component';
import { CreatingTournamentComponent } from './creating-tournament.component';

@NgModule({
  declarations: [ AppComponent, StartPageComponent, CreatingTournamentComponent ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
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
