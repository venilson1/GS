import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { IndexComponent } from './components/views/index/index.component';
import { BelieverComponent } from './components/views/believer/believer.component';
import { BePartOfItComponent } from './components/views/be-part-of-it/be-part-of-it.component';
import { ContactComponent } from './components/views/contact/contact.component';
import { SeparationComponent } from './components/template/separation/separation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    IndexComponent,
    BelieverComponent,
    BePartOfItComponent,
    ContactComponent,
    SeparationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
