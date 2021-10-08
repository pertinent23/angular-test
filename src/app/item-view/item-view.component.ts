import { Component, OnInit } from '@angular/core';
import { ItemProvider, Items } from '../services/items.provider';

@Component( {
    selector: 'app-item-view',
    templateUrl: './item-view.component.html',
    styleUrls: ['./item-view.component.scss']
} )

export class ItemViewComponent implements OnInit {
    isAuth : boolean = false;
    items : Items[] = [];

    constructor( private provider : ItemProvider ) {
        setTimeout(
            () => {
              this.isAuth = true;
            }, 4000
        );
    }

    allActived() : void {
        this.provider.activeAll();
    }

    allDesactived() : void {
        this.provider.desactiveAll();
    }

    ngOnInit(): void {
        this.items = this.provider.getItems();
    }

    isAllActived() : boolean {
        return this.provider.isAllActived();
    }

    isAllDesactived() : boolean {
        return this.provider.isAllDesactived();
    }
}
