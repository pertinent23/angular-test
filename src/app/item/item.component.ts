import { Component, OnInit, Input } from '@angular/core';

@Component( {
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
} )

export class ItemComponent implements OnInit {
    @Input() itemName : string = 'appareil';
    @Input() itemDescription : string = '... a short description.';
    @Input() color : string = '#000000';
    now : Promise<Date> = new Promise( ( resolve, reject ) => {
        const date = new Date();
        setTimeout(
            () => {
                resolve( date );
            }, 2000
        );
    } );
    visible : boolean = true;

    constructor() { }

    ngOnInit(): void {}

    getName() : string {
        return this.itemName;
    }

    getDescription() : string {
        return this.itemDescription;
    }

    getColor() : string {
        return this.color;
    }

    delete() : void {
        this.visible = false;
    }
}
