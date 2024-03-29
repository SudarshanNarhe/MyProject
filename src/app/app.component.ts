import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { AttributeDemoComponent } from './attribute-demo/attribute-demo.component';
import { CompopipeComponent } from './compopipe/compopipe.component';
import { FormDemoComponent } from './form-demo/form-demo.component';
import { ParentComponent } from './parent/parent.component';
import { MyFirstServiceComponent } from './my-first-service/my-first-service.component';
import { MyHttpUseComponent } from './my-http-use/my-http-use.component';
import { PostDataUserComponent } from './post-data-user/post-data-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmpRoutesComponent } from './emp-routes/emp-routes.component';
import { MovieComponent } from './movie/movie.component';
import { JsoncrudeUseComponent } from './jsoncrude-use/jsoncrude-use.component';
import { EmployeejsonUseComponent } from './employeejson-use/employeejson-use.component';
import { LoginComponent } from './login/login.component';
import { TemplateDriven17Component } from './template-driven17/template-driven17.component';
import { ReactiveFormDemoComponent } from './reactive-form-demo/reactive-form-demo.component';
import { MaterialDemoComponent } from './material-demo/material-demo.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    HomeComponent,
    DirectiveDemoComponent,
    AttributeDemoComponent,
    CompopipeComponent,
    FormDemoComponent,
    ParentComponent,
    MyFirstServiceComponent,
    MyHttpUseComponent,
    PostDataUserComponent,
    PageNotFoundComponent,
    EmpRoutesComponent,
    MovieComponent,
    JsoncrudeUseComponent,
    EmployeejsonUseComponent,
    LoginComponent,
    TemplateDriven17Component,
    ReactiveFormDemoComponent,
    MaterialDemoComponent,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'MyProject';
}
