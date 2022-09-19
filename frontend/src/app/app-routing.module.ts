import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameAddingComponent } from './components/game-adding/game-adding.component';
import { GamesListComponent } from './components/games-list/games-list.component';
import { LeadersStatsComponent } from './components/leaders-stats/leaders-stats.component';
import { PlayersListComponent } from './components/players-list/players-list.component';
import { WondersStatsComponent } from './components/wonders-stats/wonders-stats.component';

const routes: Routes = [
  {
    path: '',
    component: GamesListComponent
  },
  {
    path: 'games',
    component: GamesListComponent
  },
  {
    path: 'players',
    component: PlayersListComponent
  },
  {
    path: 'leaders',
    component: LeadersStatsComponent
  },
  {
    path: 'wonders',
    component: WondersStatsComponent
  },
  {
    path: 'game',
    component: GameAddingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
