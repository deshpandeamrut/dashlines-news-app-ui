import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { map } from "rxjs/operators"; 
import * as myGlobals from '../globalConstants';

@Component({
  selector: 'app-news-cmp',
  templateUrl: './news-cmp.component.html',
  styleUrls: ['./news-cmp.component.css']
})
export class NewsCmpComponent implements OnInit {
	latestArticles = [];
  techArticles = [];
  autoArticles = [];
  featuredArticles = [];
  myFeedArticles = [];
  searchText="";
  
  categories = [];
 constructor(private http: Http) { }
   ngOnInit() {
	//  this.http.get("http://localhost:8080/user/getCategories").subscribe((res)=>{
	 // console.log(this.categories = res.json()	)});
      
	  this.http.get(myGlobals.baseurl + "/news/getLatest").subscribe((res)=>{
	  console.log(this.latestArticles = res.json()	)
	  for(var i=0;i<this.latestArticles.length;i++){
		  console.log(i);
			this.featuredArticles.push(this.latestArticles[i]);
			if(i==2){
				break;
			}
	  }
	  });
	   
	  this.http.get(myGlobals.baseurl + "/news/myFeed").subscribe((res)=>{
	  console.log(this.myFeedArticles = res.json()	)
	  });
	 
   }
   
     changeFeed(category){
		 console.log("Changing feed to "+category);
	  this.http.get(myGlobals.baseurl+"/news/category/"+category).subscribe((res)=>{
	  console.log(this.latestArticles = res.json()	)});
}
   searchFeed(){
	console.log("Searching for "+this.searchText);
	  this.http.get(myGlobals.baseurl+"/news/category/"+this.searchText).subscribe((res)=>{
	  console.log(this.latestArticles = res.json()	)});
   }
}
