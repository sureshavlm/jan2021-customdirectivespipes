import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyHiddenDirective } from '../directives/myhidden.directive';
import { MyUpperCasePipe } from '../pipes/myuppercase.pipe';
import { GradefilterPipe } from './gradefilter.pipe';

@NgModule({
  declarations: [
    AppComponent, MyHiddenDirective, MyUpperCasePipe, GradefilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
