// This is where we will add our code :)
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

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
    selector: 'player-form',
    templateUrl: './player-form-component.html' 
})
class JokeFormComponent {
    @Output() playerCreated = new EventEmitter<Player>();

    createPlayer( name : string , club : string ){
        console.log ( "here 1" , name , club  );
        this.playerCreated.emit( new Player(name,club) );
    }

}

@Component({
    selector : 'player',
    templateUrl: './player-component.html'  
})
class PlayerComponent
{
    @Input() data: Player;
}

@Component({
    selector : 'player-list',
    templateUrl: './player-list-component.html' 
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

    addPlayer( player ) {
        console.log('here2' , player);
        this.players.unshift(player);
    }
    
}


@Component({
    selector: 'app',
    templateUrl: './app-component.html' 
})
class AppComponent {
}

@NgModule({
    imports : [BrowserModule],
    declarations : [AppComponent,PlayerListComponent,PlayerComponent,JokeFormComponent],
    bootstrap : [AppComponent]
})
export class AppModule{

}


platformBrowserDynamic().bootstrapModule(AppModule);  