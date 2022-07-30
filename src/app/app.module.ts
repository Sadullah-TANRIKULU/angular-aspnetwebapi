import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DenemeComponent } from './deneme/deneme.component';
import { InspectionApiService } from "./inspection-api.service";


@NgModule({
  declarations: [
    AppComponent,
    DenemeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [InspectionApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
