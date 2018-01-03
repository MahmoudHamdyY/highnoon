import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component'
import { ResultsPageComponent } from './results-page/results-page.component'

const routes: Routes = [
  { path: 'search', component: ResultsPageComponent },
  { path: '', component: MainPageComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
