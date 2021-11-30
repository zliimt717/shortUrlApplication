import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UrlService } from './service/url.service';
import { ShortUlrListComponent } from './short-ulr-list/short-ulr-list.component';
import { UrlFormComponent } from './url-form/url-form.component';
import { StatisticListComponent } from './statistic-list/statistic-list.component';
import { StatisticService } from './service/statistic.service';
import { StatisticIdComponent } from './statistic-id/statistic-id.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './service/login.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ShortUlrListComponent,
    UrlFormComponent,
    StatisticListComponent,
    StatisticIdComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UrlService,
    StatisticService,
    LoginService,
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
