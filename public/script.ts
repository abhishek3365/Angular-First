// This is where we will add our code :)
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import {
    Component,NgModule,Input,Output,EventEmitter,ViewEncapsulation,SimpleChanges,
    OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,
    OnDestroy, ViewChild , ViewChildren, QueryList, ContentChild, ContentChildren, ElementRef
} from '@angular/core';

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
    templateUrl: './player-form-component.html',
    styles: [
        `
        .card {
          background-color: gray;
        }
        `
      ] 
})
class PlayerFormComponent {
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

    // constructor() {
    //     console.log(`new - data is ${this.data}`);
    //   }
    
    //   ngOnChanges(changes: SimpleChanges) {
    //     console.log(`ngOnChanges - data is ${this.data}`);
    //     for (let key in changes) {
    //         console.log(`${key} changed.
    //         Current: ${changes[key].currentValue}.
    //         Previous: ${changes[key].previousValue}`);
    //       }
    //   }
    
    //   ngOnInit() {
    //     console.log(`ngOnInit  - data is ${this.data}`);
    //   }
    
    //   ngDoCheck() {
    //     console.log("ngDoCheck")
    //   }
    
    //   ngAfterContentInit() {
    //     console.log("ngAfterContentInit");
    //   }
    
    //   ngAfterContentChecked() {
    //     console.log("ngAfterContentChecked");
    //   }
    
    //   ngAfterViewInit() {
    //     console.log("ngAfterViewInit");
    //   }
    
    //   ngAfterViewChecked() {
    //     console.log("ngAfterViewChecked");
    //   }
    
    //   ngOnDestroy() {
    //     console.log("ngOnDestroy");
    //   }

}

@Component({
    selector : 'player-list',
    templateUrl: './player-list-component.html' 
})
class PlayerListComponent{
    
    players : Player[] = [ new Player("Lionel Messi 1","FC Barcelona") , new Player("Lionel Messi 2","FC Barcelona")];

    @ViewChild(PlayerComponent) playerViewChild : PlayerComponent;
    @ViewChildren(PlayerComponent) playerViewChildren: QueryList<PlayerComponent>;
    @ViewChild("header") headerEl: ElementRef;
    @ContentChild(PlayerComponent) playerContentChild: PlayerComponent;

    constructor()
    {
        console.log(`new - playerViewChild is ${JSON.stringify(this.playerViewChild)}`);
    }

    ngAfterContentInit() {
        console.log(`ngAfterContentInit - jokeContentChild is ${this.playerContentChild}`);
    }

    ngAfterViewInit() {
        console.log(`ngAfterViewInit - playerViewChild is ${JSON.stringify(this.playerViewChild)}`);
        
        let jokes: PlayerComponent[] = this.playerViewChildren.toArray(); 
        console.log(jokes);

        console.log(`ngAfterViewInit - headerEl is ${this.headerEl}`);
        this.headerEl.nativeElement.textContent = "Best Joke Machine";
    }
    
}


@Component({
    selector: 'app',
    templateUrl: './app-component.html' 
})
class AppComponent {

    player : Player = new Player("Lionel Messi 3","FC Barcelona");

}

@NgModule({
    imports : [BrowserModule],
    declarations : [AppComponent,PlayerListComponent,PlayerComponent,PlayerFormComponent],
    bootstrap : [AppComponent]
})
export class AppModule{

}


platformBrowserDynamic().bootstrapModule(AppModule);  