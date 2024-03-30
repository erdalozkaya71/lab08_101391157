import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students.component'; // Make sure the path is correct and the component is named correc

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent, // Make sure the component is named correctly
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
