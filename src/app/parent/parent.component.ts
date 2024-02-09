import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

      parentmsg='Hi This is Parent msg';

      childmsg:any;

      getChildData(data:any){
        this.childmsg=data;
      }

}
