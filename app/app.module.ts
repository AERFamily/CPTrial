import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeServiceService } from './employee-service.service';
import { EmployeeComponent } from './employee/employee.component';
import { AgmCoreModule } from '@agm/core';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { OwlModule } from 'ngx-owl-carousel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; 

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,OwlModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCtfZfJy2rlYQbGO_YsYOqRhpYjbZIzi14'
    }),
    FontAwesomeModule
  ],
  providers: [EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
