import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { map } from "rxjs/operators"; 



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  latestArticles = [];
  techArticles = [];
  autoArticles = [];
  featuredArticles = [];
  myFeedArticles = [];
  searchText="";
  
  categories = [];
 constructor(private http: Http) { }
   ngOnInit() {
	  this.http.get("http://localhost:8080/user/getCategories").subscribe((res)=>{
	  console.log(this.categories = res.json()	)});
      
	  this.http.get("http://localhost:8080/news/getLatest").subscribe((res)=>{
	  console.log(this.latestArticles = res.json()	)
	  for(var i=0;i<this.latestArticles.length;i++){
		  console.log(i);
			this.featuredArticles.push(this.latestArticles[i]);
			if(i==2){
				break;
			}
	  }
	  });
	   
	  this.http.get("http://localhost:8080/news/myFeed").subscribe((res)=>{
	  console.log(this.myFeedArticles = res.json()	)
	  });
	 
   }
   
     changeFeed(category){
		 console.log("Changing feed to "+category);
	  this.http.get("http://localhost:8080/news/category/"+category).subscribe((res)=>{
	  console.log(this.latestArticles = res.json()	)});
}
   searchFeed(){
	console.log("Searching for "+this.searchText);
	  this.http.get("http://localhost:8080/news/category/"+this.searchText).subscribe((res)=>{
	  console.log(this.latestArticles = res.json()	)});
   }

}
