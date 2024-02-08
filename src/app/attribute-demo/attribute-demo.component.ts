import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { timeStamp } from 'console';

@Component({
  selector: 'app-attribute-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './attribute-demo.component.html',
  styleUrl: './attribute-demo.component.css'
})

export class AttributeDemoComponent {


  //for ngclass

      isbold:boolean=true
      isitalic:boolean=true;

      iscolor:boolean=true;
      

      applyclass(){

        let classes={
            boldclass:this.isbold,
            italicclass:this.isitalic
        }
        return classes;
      }

      applycolor(){
          let classes={
            colorclass:this.iscolor
          }
          return classes;
      }

      // for ngStyle
      color:string="Red"
      fontsize:number=40;

      applyStyle(){

        let style={
          'color':this.color,
          'fontsize.px':this.fontsize,
          'font-weight':this.isbold?'bold':'normal',
          'font-style':'italic'
        }
        return style;
      }
}
