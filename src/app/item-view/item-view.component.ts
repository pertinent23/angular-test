import { Component, OnInit } from '@angular/core';

@Component( {
    selector: 'app-item-view',
    templateUrl: './item-view.component.html',
    styleUrls: ['./item-view.component.scss']
} )

export class ItemViewComponent implements OnInit {
    isAuth = false;
    items : { name: string; description: string, color?: boolean }[ ] = [
        { name: 'bread', description: 'bakery', color: true },
        { name: 'cake', description: 'pastry cook', color: false },
        { name: 'meat', description: 'bucher', color: true }
    ];

    constructor() {
        setTimeout(
            () => {
              this.isAuth = true;
            }, 4000
        );
    }

    allDelete() {
        console.log( 'all-delete' );
    }

    ngOnInit(): void {}
}
