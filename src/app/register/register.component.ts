import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Response } from '../response';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent 
{
  register!: FormGroup;
  response:Response=new Response();

  constructor(private authService: AuthService,private router: Router,private formBuilder: FormBuilder){
    this.register = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required], 
      reEnterPassword: ['', Validators.required] 
    });
  }

  // Method to handle the registration logic
  onSubmit() 
  {
    // Call the save method from AuthService and pass the form data
    this.authService.save(this.register.value).subscribe(
      data => {
        this.response = data; // Store the response in the response object
        console.log(this.response); // Log the response data to the console
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

