import { Component, OnInit } from '@angular/core';
import { EmployeejsonService } from '../employeejson.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-employeejson-use',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule,ReactiveFormsModule],
  providers:[EmployeejsonService],
  templateUrl: './employeejson-use.component.html',
  styleUrl: './employeejson-use.component.css'
})
export class EmployeejsonUseComponent implements OnInit{

      employeeData:any

      isEdit!:boolean;
      isUpdate!:boolean;
      empForm!:FormGroup;

      constructor(public Myser : EmployeejsonService, public fb:FormBuilder){

      }

    ngOnInit(): void {

      this.getAllEmployees();

      this.empForm=this.fb.group({
        id:[,Validators.required],
        name:[,Validators.required],
        Position:[,Validators.required]
      })

      this.isUpdate=false;
    }

    getAllEmployees(){
      this.Myser.getData().subscribe(result=>(this.employeeData=result))
    }

    editData(emp:any){
      this.isUpdate=true;
      this.empForm.setValue(
        {
        id:emp.id,
        name:emp.name,
        Position:emp.Position
       }
      )
    }

    deleteData(){

    }

    SaveData(){

    }

    clearform(){
        this.empForm.reset();
    }

    toggleForm(){
      this.isEdit=!this.isEdit;
      this.clearform();
    }

}
