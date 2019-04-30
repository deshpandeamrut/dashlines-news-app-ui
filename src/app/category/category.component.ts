import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { map } from "rxjs/operators"; 
import * as myGlobals from '../globalConstants';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private route: ActivatedRoute,private http: Http) {  console.log("hello from constructor");}
	latestArticles = [];
	param = "technology";
  ngOnInit() {
	  console.log("hello from category");
	  console.log(this.route.snapshot.params.categoryName);
	  
	  //this.changeFeed(this.route.snapshot.params.categoryName);
	    this.route.params.subscribe(params => {
    this.param = params['categoryName'];
    this.changeFeed(this.param); // reset and set based on new parameter this time
});
  }

	changeFeed(category){
		 console.log("Changing feed to "+category);
	  this.http.get(myGlobals.baseurl+"/news/category/"+category).subscribe((res)=>{
	  console.log(this.latestArticles = res.json()	)
	  });
}
}
