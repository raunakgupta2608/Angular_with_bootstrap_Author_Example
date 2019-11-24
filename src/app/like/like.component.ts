import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'heart-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input ('likesCount') likesCount:number;
  @Input ('isActive') isActive:boolean;

  onClick(){
    this.likesCount += (this.isActive) ? -1 : 1;
    this.isActive = !this.isActive; 
  }
  
  color:string = "#ccc";
  isAct:boolean;
  likes:number =0 ;

  onClicked(){
    this.isAct = !this.isAct;

    if(this.isAct == false){
      this.color = "#ccc";
      this.likes = 0;
    }
    else if(this.isAct == true){
      this.color = "deeppink";
      this.likes = 1;
    } 
  }

}
