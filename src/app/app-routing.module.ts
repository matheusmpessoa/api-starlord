import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarlordComponent } from './pages/starlord/starlord.component';
import { FormComponent } from './pages/form/form.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'starlord', component: StarlordComponent },
  { path: 'form', component: FormComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
