import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Core modules
import { AppRoutingModule } from './app-routing.module';
//import { SpotifyService }   from '../../node-modules/angular2-spotify/';
import { AppComponent }     from './app.component';

// Services
import { ApiConnections }          from './services/api-connections.service';

import { FooterComponent }         from './global/footer/footer.component';
import { HeaderComponent }         from './global/header/header.component';
import { QuestionsComponent }      from './modules/questions/questions.component';
import { TrackDisplayComponent }   from './modules/track-display/track-display.component';
import { TrackGeneratorComponent } from './modules/track-generator/track-generator.component';
import { HomeComponent }           from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    QuestionsComponent,
    TrackGeneratorComponent,
    TrackDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //SpotifyService
  ],
  providers: [ApiConnections],
  bootstrap: [AppComponent]
})
export class AppModule { }
