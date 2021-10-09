import { Component, OnInit, Input } from '@angular/core';
import { ItemProvider } from '../services/items.provider';

@Component( {
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
} )

export class ItemComponent implements OnInit {
    @Input() itemName : string = 'appareil';
    @Input() itemDescription : string = '... a short description.';
    @Input() active : boolean = false;
    @Input() index : number = 0;
    now : Promise<Date> = new Promise( ( resolve, reject ) => {
        const date = new Date();
        setTimeout(
            () => {
                resolve( date );
            }, 2000
        );
    } )
    visible : boolean = true;
    isLoaded : boolean = true;

    constructor( private provider: ItemProvider ) {
        /** 
            *
            * Body of the 
            * object  
        */
    }

    ngOnInit(): void {}

    getName() : string {
        return this.itemName;
    }

    getDescription() : string {
        return this.itemDescription;
    }

    getStatus() : boolean {
        return this.active;
    }

    getColor() : string {
        return this.getStatus() ? '#55FF88' : '#FF1122';
    }

    activeItem() {
        this.provider.activeItem( this.index );
    }

    desactiveItem() {
        this.provider.desactiveItem( this.index );
    }
}
