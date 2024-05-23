import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

import { Response } from '../response';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent 
{
  ForgotPassword!: FormGroup;
  response: Response = new Response();


  constructor(private authService: AuthService, private router: Router,private formBuilder: FormBuilder) {
    this.ForgotPassword = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required], 
      reEnterPassword: ['', Validators.required] 
    });
   }

  //Recieves the data from service and alerts the message
  // Method to handle password reset logic
  resetPassword() 
  {
    // Call updatePassword method from AuthService and pass the form data
    this.authService.updatePassword(this.ForgotPassword.value).subscribe(
      data => {
        console.log(data);
        this.response = data;
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
           this.router.navigate(['/login']);
          },3);
        }
      })
  }
}
 

