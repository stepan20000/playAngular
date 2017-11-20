import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { LocalStorageModule } from 'angular-2-local-storage';


import { AppComponent } from './app.component';
import { BreadCrumpsComponent } from './core/components/bread-crumps/bread-crumps.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HeaderComponent } from './core/components/header/header.component';
import { PagesComponent } from './pages/pages.component';


import { HomePageComponent } from './pages/home-page/home-page.component';
import { ControlsComponent } from './pages/home-page/components/controls/controls.component';
import { CoursesListComponent } from './pages/home-page/components/courses-list/courses-list.component';
import { CourseItemComponent } from './pages/home-page/components/courses-list/components/course-item/course-item.component';
import { ModalComponent } from './core/components/modal/modal.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

import { CourseService } from './core/services/course-service.service';
import { LoginService } from './core/services/login.service';

import { DateDirective } from './core/directives/date.directive';
import { GetDurationPipe } from './core/pipes/get-duration.pipe';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    LocalStorageModule.withConfig({prefix: 'playAngular', storageType: 'localStorage'})
  ],
  declarations: [
    AppComponent,
    BreadCrumpsComponent,
    FooterComponent,
    HeaderComponent,
    PagesComponent,
    HomePageComponent,
    ControlsComponent,
    CoursesListComponent,
    CourseItemComponent,
    ModalComponent,
    LoginPageComponent,
    DateDirective,
    GetDurationPipe
  ],
  providers: [CourseService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
