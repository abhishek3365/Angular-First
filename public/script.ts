// This is where we will add our code :)
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

class Player{
    name : string;
    club : string;
    hide : boolean;

    constructor( name : string , club : string ) {
        this.name = name;
        this.club = club;
        this.hide = true;   
    }

    toggle() {
        this.hide = !this.hide;
    }
}

@Component({
    selector : 'player-list',
    template : `
        <div class="card card-block" *ngFor="let player of players">
            <h4 class="card-title">{{player.name}}</h4>
            <p class="card-text" [hidden]="player.hide">{{player.club}}</p>
            <a class="btn btn-primary" (click)="player.toggle()">Show Club</a>
        </div>
    `
})
class PlayerListComponent{
    players : Object[];

    constructor(){
        this.players = [
            new Player("Lionel Messi","FC Barcelona"),
            new Player("Cristiano Ronaldo","Real Madrid"),
            new Player("Kevin De Bruyne","Manchester City")
        ];
    }
    
}


@NgModule({
    imports : [BrowserModule],
    declarations : [PlayerListComponent],
    bootstrap : [PlayerListComponent]
})
export class AppModule{

}


platformBrowserDynamic().bootstrapModule(AppModule);  