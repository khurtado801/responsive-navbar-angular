// NOTE: Module .ts is where you tell Angular which pieces belong to our app

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// NOTE: directive needed for ngModel to use two-way data binding
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// NOTE: All new components like server.component.ts must be imported into the module so that TypeScript knows where to find it,
// NOTE: Omit the '.ts' at the end
import { ServerComponent } from './components/server/server.component';
import { ServersComponent } from './components/servers/servers.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// NOTE: Loading spinner
import { NgxSpinnerModule } from 'node_modules/ngx-spinner/';

// NOTE: Must import jquery after installing @types
import * as $ from 'jquery';

// NOTE: Pages components
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EducationComponent } from './pages/education/education.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { IntroComponent } from './pages/intro/intro.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';

console.log(`jQuery version: ${$.fn.jquery}`);

// NOTE: As a component we transform it into something else by adding the @NgModule decorator
@NgModule({
    // NOTE: Four properties have been setup on the object we passed to NgModule: declarations, imports, providers, bootstrap
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    EducationComponent,
    ExperienceComponent,
    IntroComponent,
    SkillsComponent,
    PortfolioComponent,
    HomeComponent,
    FooterComponent,
  ],
// NOTE: Imports allows us to add other modules to this module
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
