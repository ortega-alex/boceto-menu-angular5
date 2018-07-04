import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  	$('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
  }

  private logout(){
  	localStorage.removeItem('userToken');
  	this.router.navigate(['/login']);
  }
}
