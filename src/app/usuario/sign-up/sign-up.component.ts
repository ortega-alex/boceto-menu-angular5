import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

	private user:any;
  constructor(private router : Router) { 
  	this.user = new Object();
  }

  ngOnInit() {
  }

  	public registro(arg : any){
	    this.user.name = arg.name;
	    this.user.email = arg.email;
	    this.user.password = arg.password;
	    
	    console.log(JSON.stringify(this.user));

	    this.router.navigate(['/login']); 

 	}
}
