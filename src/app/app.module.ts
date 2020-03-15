import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutModule } from './layout/layout.module';
import { StarlordComponent } from './pages/starlord/starlord.component';
import { FormComponent } from './pages/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    StarlordComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

    LayoutModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
