import { FileUploadComponent } from './file-upload/file-upload.component';
import { OnOffCheckboxComponent } from './on-off-checkbox/on-off-checkbox.component';
import { WeatherComponent } from './weather/weather.component';
import { SimpleModalComponent } from './modal/simple-modal/simple-modal.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SimpleSelectComponent } from './dropdown/simple-select/simple-select.component';
import { PrerequisiteComponent } from './prerequisite/prerequisite.component';
import { MultipleSelectComponent } from './dropdown/multiple-select/multiple-select.component';
import { SimpleAutocompleteComponent } from './autocomplete/simple-autocomplete/simple-autocomplete.component';
import { AccordionComponent } from './accordion/accordion.component';
import { DdlSelectedTextComponent } from './ddl-selected-text/ddl-selected-text.component';
import { SelectAllTextComponent } from './select-all-text/select-all-text.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'prerequisite', component: PrerequisiteComponent },
  { path: 'dropdown/simple-select', component: SimpleSelectComponent },
  { path: 'dropdown/multiple-select', component: MultipleSelectComponent },
  { path: 'autocomplete/simple-autocomplete', component: SimpleAutocompleteComponent },
  { path: 'modal/simple-modal', component: SimpleModalComponent },
  { path: 'accordion', component: AccordionComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'switch-button', component: OnOffCheckboxComponent },
  { path: 'file-upload', component: FileUploadComponent },
  { path: 'ddl-selected-text', component: DdlSelectedTextComponent },
  { path: 'select-all-text', component: SelectAllTextComponent },
  { path: 'form', loadChildren: './form-validation/form-validation.module#FormValidationModule' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // , { enableTracing: true } <-- debugging purposes only  
  exports: [RouterModule]
})
export class AppRoutingModule { }
