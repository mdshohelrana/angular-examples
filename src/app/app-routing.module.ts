import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SimpleSelectComponent } from './dropdown/simple-select/simple-select.component';
import { PrerequisiteComponent } from './prerequisite/prerequisite.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'prerequisite', component: PrerequisiteComponent },
  { path: 'dropdown/simple-select', component: SimpleSelectComponent },
  { path: 'form', loadChildren: './form-validation/form-validation.module#FormValidationModule' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // , { enableTracing: true } <-- debugging purposes only
  exports: [RouterModule]
})
export class AppRoutingModule { }
