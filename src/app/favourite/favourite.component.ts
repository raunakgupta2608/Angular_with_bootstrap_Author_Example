import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: ' favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class FavouriteComponent {
  @Input('is-favourite') isFavourite:boolean;
  @Output('change') change = new EventEmitter();

  constructor(){
  }

  ngOnInit(){
  }

  onClick(){
    this.isFavourite = !this.isFavourite;
    this.change.emit({ newValue : this.isFavourite});
  } 
}
export interface FavouriteChangedEventArgs{
  newValue:boolean;
}
