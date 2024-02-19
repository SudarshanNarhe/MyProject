import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-demo',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './reactive-form-demo.component.html',
  styleUrl: './reactive-form-demo.component.css'
})
export class ReactiveFormDemoComponent implements OnInit {
    
    form:FormGroup=new FormGroup({
          fullname:new FormControl(''),
          username:new FormControl(''),
          email:new FormControl(''),
          password:new FormControl(''),
          acceptTerms:new FormControl(false)
      })

      submitted=false;
      constructor(public fb:FormBuilder){

      }
      ngOnInit(): void {
          this.form=this.fb.group({
            fullname:[,Validators.required],
            username:[,[Validators.required,Validators.minLength(8),Validators.maxLength(20)],],
            email:[,[Validators.required,Validators.email],],
            password:[,[Validators.required,Validators.minLength(8)],],
            acceptTerms:[false,Validators.required]
          })
      }

      onSubmit(){
        this.submitted=true;
        if(this.form.invalid){
          return
        }
        console.log(this.form.value)
      }

      onReset(){
        this.form.reset();
        this.submitted=false;
      }

      get f():{[key:string]:AbstractControl}{
        return this.form.controls;
      }
}
