import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { BrokerPageComponent } from './broker-page/broker-page.component';

const routes: Routes = [
  {
    path:'',component:AdminComponent,
    children:[
      {
        path:'',component:BrokerPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
