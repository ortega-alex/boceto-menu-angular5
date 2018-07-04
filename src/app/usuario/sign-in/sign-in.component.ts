import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-sign-in',
  	templateUrl: './sign-in.component.html',
  	styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {
 	
 	isLoginError : boolean = false;
 	private user: any;
  	
  	constructor(private router : Router) { 
  		this.user = new Object();
  	}

  	ngOnInit() {
  	
  	}

  	public login(arg: any) {
  		this.user.email = arg.email;
   		this.user.password = arg.password;
  		localStorage.setItem('userToken',JSON.stringify(this.user));
     	this.router.navigate(['/menu']); 
    }
}
