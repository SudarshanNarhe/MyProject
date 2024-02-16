import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm,} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit{

  Mycontact!:Contact;
  
  ngOnInit(): void {
      this.Mycontact={
        username:"",
        email:"",
        password:"",
        confirmPass:"",
        gender:false,
        subjects:[] = [
          { name: 'Java', selected: false },
          { name: 'Python', selected: false },
          { name: 'C#', selected: false },
          { name: 'SQL', selected: false },
          { name: 'Angular', selected: false },
          { name: 'Html-Css', selected: false }
        ],
        states: [
          'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat',
          'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala',
          'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha',
          'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh',
          'Uttarakhand', 'West Bengal'
        ],
        selectedState: ''
      }
  }

  areSubjectsSelected(): boolean {
    return this.Mycontact.subjects.some((subject => subject.selected));
  }

  onSubmit(){
    console.log(this.Mycontact)
    
  }

}

export class Contact{
  username!:string;
  email!:string;
  password!:string;
  confirmPass!:string;
  gender!:boolean;
  subjects!:{name:string, selected:boolean}[];
  states!:{}[];
  selectedState!:string
}
