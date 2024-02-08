import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { AttributeDemoComponent } from './attribute-demo/attribute-demo.component';
import { CompopipeComponent } from './compopipe/compopipe.component';
import { FormDemoComponent } from './form-demo/form-demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,DirectiveDemoComponent,AttributeDemoComponent,CompopipeComponent,FormDemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyProject';
}
