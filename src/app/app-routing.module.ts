import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ExceptionHandlerComponent } from './exception-handler/exception-handler.component';
//import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path:'',loadChildren:()=>import('./public/public.module').then((m)=>m.PublicModule),
  },
  {
    path:'admin',loadChildren:()=>import('./admin/admin.module').then((m)=>m.AdminModule),
    //canActivate:[AuthGuard],
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'Register', component:RegisterComponent
  },
  {
    path:'forgotpassword', component:ForgotPasswordComponent
  },
  {
    path:'exception', component:ExceptionHandlerComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
