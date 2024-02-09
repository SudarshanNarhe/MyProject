import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostDataService {

  constructor(private http:HttpClient) { 

  }

  postData(data:any):Observable<any>{
    return this.http.post<any>('https://jsonplaceholder.typicode.com/users',data)
  }

}
