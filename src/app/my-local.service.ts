import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyLocalService {

    employee:any[]=[];
    
  constructor() { 
    this.employee=[
      {eid:101,ename:'Sudarshan',salary:98000},
      {eid:102,ename:'Suraj',salary:78000},
      {eid:103,ename:'Yogesh',salary:80000},
      {eid:104,ename:'Abhi',salary:46000},
      {eid:105,ename:'Pritam',salary:34000},
      {eid:106,ename:'Aadarsh',salary:70000},
    ]
  }

  getEmployee(){
    return this.employee;
  }
  
}
