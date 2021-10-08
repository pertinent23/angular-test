import { range } from "rxjs";

export declare type Items = { 
    name: string; 
    description: string, 
    active: boolean 
};

export class ItemProvider {
    items : Items[ ] = [
        { 
            name: 'bread', 
            description: 'bakery', 
            active: true 
        },
        { 
            name: 'cake', 
            description: 'pastry cook', 
            active: false 
        },
        { 
            name: 'meat', 
            description: 'bucher', 
            active: true
        }
    ];

    activeAll() : void {
        const 
            context = this;
        range( 0, context.getItems().length ).subscribe( i =>  (
            context.items[ i ].active = true
        ) );
    }

    desactiveAll() : void {
        const 
            context = this;
        range( 0, context.getItems().length ).subscribe( i =>  (
            context.items[ i ].active = false
        ) );
    }

    isAllActived() : boolean {
        for( const item of this.getItems() ) {
            if ( item.active === false )
                return false;
        }
        return true;
    }

    isAllDesactived() : boolean {
        for( const item of this.getItems() ) {
            if ( item.active === true )
                return false;
        }
        return true;
    }

    activeItem( id : number ) : number {
        if ( id < this.items.length ) {
                this.items[ id ] .active =  true;
            return 1;
        } 
        return 0;
    }

    desactiveItem( id : number ) : number {
        if ( id < this.items.length ) {
                this.items[ id ] .active =  false;
            return 1;
        } 
        return 0;
    }

    getItems() : Items [] {
        return this.items;
    }
}