import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SinglepostComponent } from './singlepost/singlepost.component';
import { ListpostsComponent } from './listposts/listposts.component';

@NgModule({
  declarations: [
    AppComponent,
    SinglepostComponent,
    ListpostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
