import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {
  title = 'authors';
  isActive:boolean =false;
  authors;

  constructor(private service: AuthorService){

  }
  ngOnInit(){
    this.authors = this.service.getAuthors();  
  }
  onClick(){
      this.isActive = !this.isActive;
  }
}
