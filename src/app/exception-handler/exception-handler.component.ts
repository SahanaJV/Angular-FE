import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-exception-handler',
  templateUrl: './exception-handler.component.html',
  styleUrls: ['./exception-handler.component.css']
})
export class ExceptionHandlerComponent implements OnInit
{
  exceptionMessage!: string;

  constructor(private route:ActivatedRoute,private router:Router) {}
  // ngOnInit lifecycle hook is called once the component is initialized
  ngOnInit(): void {
    // Subscribes to route parameter changes
    this.route.paramMap.subscribe((params: ParamMap) => {
      // Retrieves the response from the window history state
      const response = window.history.state.response;
      if(response){
        // If a response is found, sets the exception message
        this.exceptionMessage = response.message;
      }
    });
  }
  
  // Method to navigate to the login page
  home() {
    this.router.navigate(['/login']);
  }
}
