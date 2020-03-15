import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Pages
import { StarlordComponent } from './starlord/starlord.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    StarlordComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    StarlordComponent,
    FormComponent
  ]
})
export class PagesModule { }
