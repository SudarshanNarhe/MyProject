import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,catchError,throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class JsoncrudService {

  url="http://localhost:3000/data";

  constructor(public myhttpclient : HttpClient) { 

  }

  getData():Observable<any>{
    return this.myhttpclient.get<any>(this.url);
  }

  addEmployee(emp:any):Observable<any>{
      let empdata={
        id:(emp.id),
        name:emp.name,
        salary:parseInt(emp.salary)
      }
      return this.myhttpclient.post<any>(this.url,empdata).pipe(
        catchError(this.errorHandler)
      )
  }

  // deleteEmployee(id:any):Observable<any>{
  //   return this.myhttpclient.delete<any>(this.url+"/"+id).pipe(
  //     catchError(this.errorHandler)
  //   )
  // }

  deleteData(id:any):Observable<any>{
    // console.log("hii")
    return this.myhttpclient.delete<any>(this.url+"/"+id).pipe(
      catchError(this.errorHandler)
    )
  }

  public UpdateEmployee(id:any,emp:any):Observable<any>{
      return this.myhttpclient.put<any>
        (`${this.url}/${id}`, emp).pipe(
          catchError(this.errorHandler)  
      )
  }

  errorHandler(error:any){
      let errormsg=""
      if(error.error instanceof ErrorEvent){
        errormsg=error.errormsg
      }
      else{
        errormsg=`Error code : ${error.status} \n Message : ${error.Message}`
      }
      console.log(errormsg)
      return throwError(()=> new Error(errormsg))
  }
  
}
