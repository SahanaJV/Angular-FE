import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-broker-page',
  templateUrl: './broker-page.component.html',
  styleUrls: ['./broker-page.component.css']
})
export class BrokerPageComponent {

  constructor(private router: Router){

  }
  logout(){
    this.router.navigate(['/login']);
  }

}
