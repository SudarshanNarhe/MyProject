import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven17',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './template-driven17.component.html',
  styleUrl: './template-driven17.component.css'
})
export class TemplateDriven17Component {

    form={
      fullname:'',
      username:'',
      email:'',
      password:'',
      acceptTerms:false
    };

    OnSubmit(){
      console.log(this.form)
      this.form={fullname:'',
      username:'',
      email:'',
      password:'',
      acceptTerms:false};
    }

    OnReset(form : NgForm){
      form.reset();
    }

}
