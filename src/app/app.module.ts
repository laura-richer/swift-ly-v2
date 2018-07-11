import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent }            from './app.component';
import { HeaderComponent }         from './global/header/header.component';
import { FooterComponent }         from './global/footer/footer.component';
import { HomeComponent }           from './pages/home/home.component';
import { FormComponent }           from './modules/form/form.component';
import { TrackGeneratorComponent } from './modules/track-generator/track-generator.component';
import { TrackDisplayComponent }   from './modules/track-display/track-display.component';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
