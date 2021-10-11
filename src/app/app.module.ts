import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { FormsModule } from '@angular/forms';
import { ItemViewComponent } from './item-view/item-view.component';
import { AuthComponent } from './auth/auth.component';
import { Routes, RouterModule } from '@angular/router';
import { ItemProvider } from './services/items.provider';
import { AddItemComponent } from './add-item/add-item.component';

const routeList : Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'items', component: ItemViewComponent },
  { path: 'add',  component: AddItemComponent },
  { path: '', component: AuthComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemViewComponent,
    AuthComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot( routeList )
  ],
  providers: [
    ItemProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
