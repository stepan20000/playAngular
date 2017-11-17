import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { BreadCrumpsComponent } from './core/components/bread-crumps/bread-crumps.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HeaderComponent } from './core/components/header/header.component';
import { PagesComponent } from './pages/pages.component';


import { HomePageComponent } from './pages/home-page/home-page.component';
import { ControlsComponent } from './pages/home-page/components/controls/controls.component';
import { CoursesListComponent } from './pages/home-page/components/courses-list/courses-list.component';
import { CourseItemComponent } from './pages/home-page/components/courses-list/components/course-item/course-item.component';
import { ModalComponent } from './core/components/modal/modal.component'

import { CourseService } from './core/services/course-service.service';


@NgModule({
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
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
