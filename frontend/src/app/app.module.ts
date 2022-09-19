import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PlayersListComponent } from './components/players-list/players-list.component';
import { GamesListComponent } from './components/games-list/games-list.component';
import { WondersStatsComponent } from './components/wonders-stats/wonders-stats.component';
import { LeadersStatsComponent } from './components/leaders-stats/leaders-stats.component';
import { GameAddingComponent } from './components/game-adding/game-adding.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersListComponent,
    GamesListComponent,
    WondersStatsComponent,
    LeadersStatsComponent,
    GameAddingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
