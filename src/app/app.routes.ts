import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MyHttpUseComponent } from './my-http-use/my-http-use.component';
import { MyFirstServiceComponent } from './my-first-service/my-first-service.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmpRoutesComponent } from './emp-routes/emp-routes.component';


export const routes: Routes = [
    {path:'Home',component:HomeComponent},
    {path:'About_Us',component:AboutUsComponent},
    {path:'Data',component:MyHttpUseComponent},
    {path:'Emp',component:MyFirstServiceComponent},
    {path:'EmpData/:id',component:EmpRoutesComponent},  //for Parametrized routes to show a particular data
    {path:'',redirectTo:'/Home',pathMatch:'full'},  //for bydefault page
    {path:'**',component:PageNotFoundComponent}    //for showing message if any miskate in path or technical issue
      
];
