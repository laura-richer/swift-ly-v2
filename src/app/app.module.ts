import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent }            from './app.component';

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
    HttpClientModule
  ],
  providers: [ApiConnections],
  bootstrap: [AppComponent]
})
export class AppModule { }
