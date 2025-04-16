import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponent } from './Components/headers/headers.component';
import { RemainderListComponent } from './Components/remainder-list/remainder-list.component';
import { AddRemainderComponent } from './Components/add-remainder/add-remainder.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    RemainderListComponent,
    AddRemainderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
