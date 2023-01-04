import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//DATABASE ADD-ONS//
import { environment } from '../environments/environment';
import { AngularFireModule} from '@angular/fire/compat';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AngularFireModule.initializeApp(environment.firebase),
    NoopAnimationsModule,
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
