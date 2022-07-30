import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InspectionApiService {
  readonly inspectionAPIUrl = "https://62c5797d134fa108c253480f.mockapi.io/fakeData";

  constructor(private http: HttpClient) { }  

  getInspectionList(): Observable<any[]> { 
    return this.http.get<any>(this.inspectionAPIUrl);
  };
  addInspection(dataAdd:any) {
    return this.http.post(this.inspectionAPIUrl, dataAdd);
  }
  updateInspection(id: number | string, editedNewData:any) {
    return this.http.put(this.inspectionAPIUrl + `/${id}`, editedNewData);
  }

  deleteInspection(id:number | string) {
    return this.http.delete(this.inspectionAPIUrl + `/${id}`)
  }

}
