import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent }            from './app.component';
import { FooterComponent }         from './global/footer/footer.component';
import { HeaderComponent }         from './global/header/header.component';
import { FormComponent }           from './modules/form/form.component';
import { TrackDisplayComponent }   from './modules/track-display/track-display.component';
import { TrackGeneratorComponent } from './modules/track-generator/track-generator.component';
import { HomeComponent }           from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FormComponent,
    TrackGeneratorComponent,
    TrackDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
