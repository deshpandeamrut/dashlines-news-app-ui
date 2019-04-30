import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { map } from "rxjs/operators"; 
import * as myGlobals from '../globalConstants';
@Component({
  selector: 'app-menu-cmp',
  templateUrl: './menu-cmp.component.html',
  styleUrls: ['./menu-cmp.component.css']
})
export class MenuCmpComponent implements OnInit {
	categories = [];
  constructor(private http: Http,private router: Router) { }
	searchText = "";
  ngOnInit() {
	  this.http.get(myGlobals.baseurl+"/user/getCategories").subscribe((res)=>{
	  console.log(this.categories = res.json()	)});
  }
  searchFeed(){
	  if(this.searchText.trim().length==0){
		return;
	  }
	  console.log("Searching for "+this.searchText);
	  this.router.navigate(['/search/',this.searchText]);
  }

}
