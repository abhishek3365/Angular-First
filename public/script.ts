// This is where we will add our code :)
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Input } from '@angular/core';

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
    selector : 'player',
    template : `
        <div class="card card-block">
            <h4 class="card-title">{{data.name}}</h4>
            <p class="card-text" [hidden]="data.hide">{{data.club}}</p>
            <a class="btn btn-primary" (click)="data.toggle()">Show Club</a>
        </div>
    `
})
class PlayerComponent
{
    @Input() data: Player;
}

@Component({
    selector : 'player-list',
    template : `
        <player *ngFor="let player of players" [data]="player"></player>
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


@Component({
    selector: 'app',
    template: `
    <player-list></player-list>
    `
})
class AppComponent {
}

@NgModule({
    imports : [BrowserModule],
    declarations : [AppComponent,PlayerListComponent,PlayerComponent],
    bootstrap : [AppComponent]
})
export class AppModule{

}


platformBrowserDynamic().bootstrapModule(AppModule);  