import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionsComponent } from './pages/actions/actions.component';
import { DataComponent } from './pages/data/data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppService } from './services/app-service.service';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [AppComponent, ActionsComponent, DataComponent, NavComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    // FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
