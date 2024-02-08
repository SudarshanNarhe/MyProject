import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-demo',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './form-demo.component.html',
  styleUrl: './form-demo.component.css'
})

export class FormDemoComponent {

  eid: any;
  ename: any;
  city: any;
  employees: any[] = [];

  onAddEmployee() {
    // Add the new employee to the array
    this.employees.push({
      eid: this.eid,
      ename: this.ename,
      city: this.city
    });

    // Reset form fields
    this.eid = '';
    this.ename = '';
    this.city = '';

    // Show alert message
    alert('Employee Added Successfully');
  }


}
