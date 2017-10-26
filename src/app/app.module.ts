import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SuiModule } from 'ng2-semantic-ui';

import { AppComponent } from './app.component';
import { HeaderComponent } from './_components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    SuiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
