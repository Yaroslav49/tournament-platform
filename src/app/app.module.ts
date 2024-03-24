import { TuiRootModule, TuiDialogModule, TuiAlertModule, TuiButtonModule, TuiLabelModule, TuiErrorModule, TuiLinkModule} from "@taiga-ui/core";
import {TuiInputModule, TuiInputDateTimeModule, TuiInputNumberModule, TuiFieldErrorPipeModule, TuiAccordionModule} from '@taiga-ui/kit';
import {TuiTableModule} from '@taiga-ui/addon-table';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterOutlet } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { HttpService } from "./http.service";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page.component';
import { CreatingTournamentComponent } from './creating-tournament.component';
import { ViewTournamentComponent } from "./view-tournament.component";

@NgModule({
  declarations: [ AppComponent, StartPageComponent, CreatingTournamentComponent, ViewTournamentComponent ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    BrowserAnimationsModule,
    HttpClientModule,

    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiButtonModule,
    TuiInputModule,
    TuiLabelModule,
    TuiInputDateTimeModule,
    TuiInputNumberModule,
    TuiErrorModule,
    TuiFieldErrorPipeModule,
    TuiTableModule,
    TuiLinkModule,
    TuiAccordionModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
