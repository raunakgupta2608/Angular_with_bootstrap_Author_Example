import { Component, OnInit } from '@angular/core';
import { AuthorService } from './author.service';
import { FavouriteChangedEventArgs } from './favourite/favourite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title:"Title",
    isFavourite:true
  }

  favouriteChanged(eventArgs: FavouriteChangedEventArgs){
    console.log("Favourite changed : ", eventArgs.newValue);
  }

  tweet = {
    likesCount: 10,
    isActive : true
  }
}
