import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutUsComponent } from './shared/components/about-us/about-us.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { InfoComponent } from './shared/components/info/info.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { materialModule } from './material/material.module';
import { EducationComponent } from './shared/components/education/education.component';
import { DataComponent } from './shared/components/data/data.component';
import { SocialIconsComponent } from './shared/components/social-icons/social-icons.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './shared/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    NavbarComponent,
    InfoComponent,
    DashboardComponent,
    EducationComponent,
    DataComponent,
    SocialIconsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    materialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
