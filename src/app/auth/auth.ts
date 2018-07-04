import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class Auth implements CanActivate {

  constructor(private router : Router){}
  
  	canActivate( next: ActivatedRouteSnapshot , state: RouterStateSnapshot ): boolean {
	    if (localStorage.getItem('userToken') != null) { 
	 		return true;
	    } else {
	     	this.router.navigate(['/login']);
		    return false;
	    }     
	}
}
