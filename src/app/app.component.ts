import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { InspectionApiService } from './inspection-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  inspectionList$!: Observable<any[]>;
  data: any;
  dataAdd:any;
  userId: any;
  dataEdit: any;
  name: string = '';
  mobile: number | string = 0;
  email: string = '';
  password: string | number = '';
  isUpdate: boolean = false;
  formObj: any;
  editedNewData: any;

  // readonly inspectionAPIUrl = "https://62c5797d134fa108c253480f.mockapi.io/fakeData";
  constructor(
    // private http: HttpClient,
    private service: InspectionApiService,
  ) {
    this.service.getInspectionList().subscribe(response => {
      this.data = response;
      console.log(this.data);
      // console.log(this.isUpdate);
    });


  }
  

  addUser(formObj: NgForm) {
    // console.log(formObj);
    this.service.addInspection(formObj).subscribe(response => {
      this.formObj = response;
      // console.log(this.formObj);
      // this.isUpdate = false;
      this.service.getInspectionList().subscribe(res => {
        this.data = res;
      });
    });
    
  }

  editUser(userId: any, editedNewData: any) {

    this.service.updateInspection(userId, editedNewData).subscribe(response => {
      this.editedNewData = response;
      this.service.getInspectionList().subscribe(res => {
        this.data = res;
      });
      

    });
    console.log(this.isUpdate);

  }



  deleteUser(userId: any) {
    // console.log(userId);
    this.service.deleteInspection(userId).subscribe(response => {
      this.userId = response;
      // console.log(this.userId);
      this.service.getInspectionList().subscribe(res => {
        this.data = res;
      });

    });

    
  }


  updateUser(userId: any, dataEdit: any) {
    // console.log(userId);
    console.log(dataEdit);
    this.userId = userId;
    this.name = dataEdit.name;
    this.mobile = dataEdit.mobile;
    this.email = dataEdit.email;
    this.password = dataEdit.password;
    this.isUpdate = true;
    // console.log(userId);

  }




}
