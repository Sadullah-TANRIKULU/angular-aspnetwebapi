import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { InspectionApiService } from './inspection-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-aspnetwebapi';

  inspectionList$!: Observable<any[]>;
  data: any;
  dataAdd: any;
  formObj:any;
  userId:any;
  dataEdit:any;
  name:string = '';
  mobile: number | string = 0;

  constructor(private service: InspectionApiService) {

    
    this.service.getInspectionList().subscribe(response => {
      this.data = response;
      console.log(this.data);
  
  
    });


  }
    addUser(formObj: NgForm) {
      // console.log(formObj);
      this.service.addInspection(formObj).subscribe(response => {
        this.formObj = response;
        console.log(this.formObj);

      });


    }


    deleteUser(userId: any) {
      // console.log(userId);
      this.service.deleteInspection(userId).subscribe(response => {
        this.userId = response;
        console.log(this.userId);
        
      });
      

    }

    updateUser(userId:any, dataEdit:any) {
      console.log(userId);
      console.log(dataEdit);
      this.name = dataEdit;
      this.mobile = dataEdit;
      // this.service.updateInspection(userId, dataEdit).subscribe(response => {
      //   this.dataEdit = response;
        
      // });

      


    }

  





  // this.inspectionList$ = this.service.getInspectionList();



}
