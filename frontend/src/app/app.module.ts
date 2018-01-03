import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ResultsPageComponent } from './results-page/results-page.component';
import { ResultsComponent } from './results/results.component';
import { ResultComponent } from './result/result.component';
import { ResultDetailsComponent } from './result-details/result-details.component';
import { SearchComponent } from './search/search.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SearchService } from './search.service';
import { AppRoutingModule } from './/app-routing.module';


enableProdMode()
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ResultsPageComponent,
    ResultsComponent,
    ResultComponent,
    ResultDetailsComponent,
    SearchComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
  providers: [SearchService],
})
export class AppModule { }
