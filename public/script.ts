// This is where we will add our code :)
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import {
    Component,NgModule,Input,Output,EventEmitter,ViewEncapsulation,SimpleChanges,
    OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,
    OnDestroy, ViewChild , ViewChildren, QueryList, ContentChild, ContentChildren, ElementRef,
    Directive, Renderer , HostListener, HostBinding
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

// @Component({
//     selector: 'player-form',
//     templateUrl: './player-form-component.html',
//     styles: [
//         `
//         .card {
//           background-color: gray;
//         }
//         `
//       ] 
// })
// class PlayerFormComponent {
//     @Output() playerCreated = new EventEmitter<Player>();

//     createPlayer( name : string , club : string ){
//         this.playerCreated.emit( new Player(name,club) );
//     }

// }

@Directive({
    selector : "[ccCardHover]"
})
class CardHoverDirective {

    @HostBinding('class.card-outline-primary')private ishovering: boolean;

    constructor( private el : ElementRef , private renderer : Renderer ){
        // el.nativeElement.style.backgroundColor = 'grey';
        // renderer.setElementStyle( el.nativeElement , 'backgroundColor' , 'gray');
    }

    @HostListener('mouseover') onMouseOver() { 
        let part = this.el.nativeElement.querySelector('.card-text') 
        this.renderer.setElementStyle(part, 'display', 'block'); 
        this.ishovering = true;
    }

    @HostListener('mouseout') onMouseOut() {
        let part = this.el.nativeElement.querySelector('.card-text');
        this.renderer.setElementStyle(part, 'display', 'none');
        this.ishovering = false;
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
    
    players : Player[] = [ new Player("Lionel Messi 1","FC Barcelona") , new Player("Lionel Messi 2","FC Barcelona")];

    @ViewChild(PlayerComponent) playerViewChild : PlayerComponent;
    @ViewChildren(PlayerComponent) playerViewChildren: QueryList<PlayerComponent>;
    @ViewChild("header") headerEl: ElementRef;
    @ContentChild(PlayerComponent) playerContentChild: PlayerComponent;
    
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
    declarations : [AppComponent,PlayerListComponent,PlayerComponent,CardHoverDirective],
    bootstrap : [AppComponent]
})
export class AppModule{

}


platformBrowserDynamic().bootstrapModule(AppModule);  