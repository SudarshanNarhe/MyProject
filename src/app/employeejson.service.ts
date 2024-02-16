import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeejsonService {

  url="http://localhost:3000/Employeedata";

  constructor(public myclient : HttpClient) {

   }
   getData():Observable<any>{
    return this.myclient.get<any>(this.url);
   }
   

}
