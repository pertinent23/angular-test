import { Component, OnInit, Provider } from '@angular/core';
import { Router } from '@angular/router';
import { ItemProvider } from '../services/items.provider';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit {

  constructor( private router : Router ) { }

  ngOnInit(): void {}

  move() {
    ItemProvider.setAuth( true );
    this.router.navigate( [ '/items' ] );
  }

}
