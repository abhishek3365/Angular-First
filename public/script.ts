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
class Player
{
    name : string;
    club : string;

    constructor( ) {
        this.name = "Lionel Messi";
        this.club = "FC Barcelona";
    }

}

@NgModule({
    imports : [BrowserModule],
    declarations : [Player],
    bootstrap : [Player]
})
export class AppModule{

}


platformBrowserDynamic().bootstrapModule(AppModule);  