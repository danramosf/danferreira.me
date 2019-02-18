import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAKTqj2sK9OT-mdGCoRjQ-DGrdzKBg3m8Y'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
