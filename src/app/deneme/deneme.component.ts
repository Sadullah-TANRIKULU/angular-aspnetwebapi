import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deneme',
  templateUrl: './deneme.component.html',
  styleUrls: ['./deneme.component.scss']
})
export class DenemeComponent {

  
  msg:string = '';
  msg1:string = '';
  
  constructor() { }
  
   clickEvent(){
    this.msg1=this.msg
  }

  // clickEvent(){
  //   this.msg='Button is Clicked';
  //   return this.msg;
  // }

}
