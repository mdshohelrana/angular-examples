import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SimpleSelectComponent } from './dropdown/simple-select/simple-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrerequisiteComponent } from './prerequisite/prerequisite.component';
import { MultipleSelectComponent } from './dropdown/multiple-select/multiple-select.component';
import { SimpleAutocompleteComponent } from './autocomplete/simple-autocomplete/simple-autocomplete.component';
import { SearchFilterPipe } from './pipes/filter.pipes';
import { ClickOutsideDirective } from './directives/click.outside.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    SimpleSelectComponent,
    PrerequisiteComponent,
    MultipleSelectComponent,
    SimpleAutocompleteComponent,
    SearchFilterPipe,
    ClickOutsideDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
