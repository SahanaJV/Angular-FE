import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

import { Response } from '../response';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent 
{ 
  loginForm!: FormGroup;
  response: Response = new Response();

  constructor(private authService: AuthService,private formBuilder: FormBuilder,private router: Router){

  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  
  login():void{
    console.log(this.loginForm);
    this.authService.login(this.loginForm.value).subscribe(
      data => {
        this.response = data;
        console.log(this.response);
        if(this.response.isException)
        {
            this.router.navigate(['/exception'], { state : {response : this.response}});
        }
        else if(this.response.status === false)
        {
          alert(this.response.message);
        }
        else if(this.response.status)
        {
          alert(this.response.message);
          setTimeout(() => {
           this.router.navigate(['/admin']);
          },3);
        }
      }
    )
}
}
