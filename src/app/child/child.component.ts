import { Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

      @Input()myInputData:string='';

      @Output()myOutputData: EventEmitter<string> = new EventEmitter()

      outputmsg='This is msg from the child';

      sendChildData(){
        this.myOutputData.emit(this.outputmsg)
      }
}
