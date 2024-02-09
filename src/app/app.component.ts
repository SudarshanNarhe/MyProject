import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { AttributeDemoComponent } from './attribute-demo/attribute-demo.component';
import { CompopipeComponent } from './compopipe/compopipe.component';
import { FormDemoComponent } from './form-demo/form-demo.component';
import { ParentComponent } from './parent/parent.component';
import { MyFirstServiceComponent } from './my-first-service/my-first-service.component';
import { MyHttpUseComponent } from './my-http-use/my-http-use.component';
import { PostDataUserComponent } from './post-data-user/post-data-user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,DirectiveDemoComponent,AttributeDemoComponent,CompopipeComponent,FormDemoComponent,ParentComponent,MyFirstServiceComponent,MyHttpUseComponent,PostDataUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'MyProject';
}
