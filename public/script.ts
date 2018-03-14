// This is where we will add our code :)
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
    selector : 'player',
    template : `
        <h1>{{name}}</h1>
        <h5>{{club}}</h5>
    `
})
class PlayerComponent
{
    name : string;
    club : string;

    constructor( ) {
        this.name = "Lionel Messi";
        this.club = "FC Barcelona";
    }

}

@Component({
    selector : 'player-list',
    template : `
        <div class="card card-block" *ngFor="let player of players">
            <h4 class="card-title">{{player.name}}</h4>
            <p class="card-text" [hidden]="player.hide">{{player.club}}</p>
            <a class="btn btn-primary" (click)="toggle(player)">Show Club</a>
        </div>
    `
})
class PlayerListComponent{
    players : Object[];

    constructor(){
        this.players = [
            {
                name : "Lionel Messi",
                club : "FC Barcelona",
                hide : true
            },
            {
                name : "Cristiano Ronaldo",
                club : "Real Madrid",
                hide : true
            },
            {
                name : "Kevin De Bruyne",
                club : "Manchester City",
                hide : true
            }
        ];
    }

    toggle(player) {
        player.hide = !player.hide;
    }
}


@NgModule({
    imports : [BrowserModule],
    declarations : [PlayerComponent,PlayerListComponent],
    bootstrap : [PlayerListComponent]
})
export class AppModule{

}


platformBrowserDynamic().bootstrapModule(AppModule);  