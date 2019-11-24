import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'title-case',
  templateUrl: './title-case.component.html',
  styleUrls: ['./title-case.component.css']
})
export class TitleCaseComponent{

title:string;

pressed($event){
  console.log($event);
}

onKeyUp(email){
  console.log(email);
}

}
