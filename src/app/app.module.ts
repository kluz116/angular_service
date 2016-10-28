import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FeedsComponent } from './feeds/feeds.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecoundComponentComponent } from './secound-component/secound-component.component';
import { ThirdComponentComponent } from './third-component/third-component.component';
import {AppRoutingModuleModule,RoutingComponent} from './app-routing-module/app-routing-module.module';


@NgModule({
  declarations: [
    AppComponent,
    FeedsComponent,
    FirstComponentComponent,
    SecoundComponentComponent,
    ThirdComponentComponent,
    RoutingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
