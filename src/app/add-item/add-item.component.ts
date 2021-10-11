import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})

export class AddItemComponent implements OnInit {
  defaultStatus : string = 'actived';
  constructor() { }

  ngOnInit(): void {}

  onSubmit( form: NgForm ) : void  {
    console.log( form )
  }

}
