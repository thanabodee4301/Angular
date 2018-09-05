import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {RouterModule} from '@angular/router';
import {DataService} from './data.service';
import { ScorerComponent } from './scorer/scorer.component';
import { TestComponent } from './crud/test/test.component';
import { MongoComponent } from './db/mongo/mongo.component';
import { SqlComponent } from './sql/sql.component';
import { LeaguedetailComponent } from './leaguedetail/leaguedetail.component';
import { RoundComponent } from './round/round.component';

 @NgModule({
     declarations: [
         AppComponent,
         HomeComponent,
         AboutComponent,
         ContactComponent,
         ScorerComponent,
         TestComponent,
         MongoComponent,
         SqlComponent,
         LeaguedetailComponent,
         RoundComponent
     ],
     imports: [
         BrowserModule,
         FormsModule,
         HttpModule,
         RouterModule.forRoot([
             {path: 'home', component: HomeComponent},
             {path: 'about', component: AboutComponent},
             {path: 'home/:league_slug', component: ContactComponent},
             {path: 'contact', component: ContactComponent},
             {path: 'home/:league_slug/scorer' , component: ScorerComponent},
             {path: 'test', component: TestComponent },
             {path: 'sql', component : SqlComponent},
             {path: 'home/:league_slug/:team', component : RoundComponent},
             {path: '', component: HomeComponent},
             {path: '**', redirectTo: 'home', pathMatch: 'full'}
         ])
     ],
     providers: [DataService],
     bootstrap: [AppComponent]
 })
 export class AppModule {}


