import { Component } from '@angular/core';
import { PostDataService } from '../post-data.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-post-data-user',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  providers:[PostDataService],
  templateUrl: './post-data-user.component.html',
  styleUrl: './post-data-user.component.css'
})
export class PostDataUserComponent {

      constructor(private dataservice: PostDataService){
        
      }
      sendDemoUserData() {
        const userData = {
          name: 'John Doe',
          email: 'john@example.com',
          age: 30
        };

        this.sendDataToServer(userData) 
      }

      // Method to send data to the server
  sendDataToServer(data: any) {
    this.dataservice.postData(data)
      .subscribe(
        response => {
          console.log('Data sent successfully!', response);
          // Handle success
        },
        error => {
          console.error('Error while sending data:', error);
          // Handle error
        }
      );
  }

}
