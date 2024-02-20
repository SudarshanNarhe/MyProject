import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MyHttpUseComponent } from './my-http-use/my-http-use.component';
import { MyFirstServiceComponent } from './my-first-service/my-first-service.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmpRoutesComponent } from './emp-routes/emp-routes.component';
import { MovieComponent } from './movie/movie.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormDemoComponent } from './reactive-form-demo/reactive-form-demo.component';
import path from 'path';
import { MaterialDemoComponent } from './material-demo/material-demo.component';


export const routes: Routes = [
    {path:'Home',component:HomeComponent},
    {path:'About_Us',component:AboutUsComponent},
    {path:'Data',component:MyHttpUseComponent},
    {path:'Emp',component:MyFirstServiceComponent},
    {path:'EmpData/:id',component:EmpRoutesComponent},  //for Parametrized routes to show a particular data
    {path:'Movie',component:MovieComponent},
    {path:'Login',component:LoginComponent},
    {path:'forms',component:ReactiveFormDemoComponent},
    {path:'materialDemo',component:MaterialDemoComponent},
    {path:'',redirectTo:'/Login',pathMatch:'full'},  //for bydefault page
    {path:'**',component:PageNotFoundComponent}    //for showing message if any miskate in path or technical issue
      
];
