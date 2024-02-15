import { Component, OnInit } from '@angular/core';
import { JsoncrudService } from '../jsoncrud.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-jsoncrude-use',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule,ReactiveFormsModule],
  providers:[JsoncrudService],
  templateUrl: './jsoncrude-use.component.html',
  styleUrl: './jsoncrude-use.component.css'
})

export class JsoncrudeUseComponent implements OnInit{
   
    employee:any
    empform!:FormGroup
    isUpdate!:boolean;
    constructor(public Myser:JsoncrudService, public fb:FormBuilder){

    }

  ngOnInit(): void {
    
    // this.Myser.getData().subscribe((em:any)=>{
    //   this.employee = em;
    //   // console.log(this.employee); 
    // });
    
    this.getAllemployees();

    this.empform=this.fb.group({
      id:[,Validators.required],
      name:[,Validators.required],
      salary:[,Validators.required]
    })
    
    this.isUpdate=false;

  }
 
  getAllemployees(){

    this.Myser.getData().subscribe((em:any)=>{
      this.employee = em;
      // console.log(this.employee); 
    });      
  }
  get id()
  {
   return this.empform.get('id')
  }
  get fname()
  {
   return this.empform.get('fname')
  }
  get salary()
  {
    return this.empform.get('salary')
  }
  
  EditEmp(emp:any){
      this.isUpdate=true;
      this.empform.setValue(
        {id:emp.id,
        name:emp.name,
      salary:emp.salary}
      )
  }

  deleteEmp(id:any){
      let res=confirm("Do you want to delete "+id+" ?");
      if(res==true){
        this.Myser.deleteEmployee(id).subscribe(result=>{
          this.getAllemployees()
        })
      }
  }

  SaveData(){
    let emp=this.empform.value
    if(!this.isUpdate){
      this.Myser.addEmployee(emp).subscribe(result=>{})
    }
    else{
        let id=parseInt(this.empform.value.id)
        this.Myser.UpdateEmployee(id,emp).subscribe(result=>{})
    }
    this.getAllemployees();
    this.isUpdate=false;
    this.empform.reset();
  }

  clearform(){
    this.empform.reset();
  }
}
