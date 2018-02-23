import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent },
  { path: '', loadChildren: './form-validation/form-validation.module#FormValidationModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // , { enableTracing: true } <-- debugging purposes only
  exports: [RouterModule]
})
export class AppRoutingModule { }
