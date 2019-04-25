import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { map } from "rxjs/operators"; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  obj = [];
  categories = [];
 constructor(private http: Http) { }
   ngOnInit() {
	  this.http.get("http://localhost:8080/user/getCategories").subscribe((res)=>{
	  console.log(this.categories = res.json()	)});
      
	  this.http.get("http://localhost:8080/news/getLatest").subscribe((res)=>{
	  console.log(this.obj = res.json()	)});
	 
   }
   
     changeFeed(category){
		 console.log("Changing feed to "+category);
	  this.http.get("http://localhost:8080/news/category/"+category).subscribe((res)=>{
	  console.log(this.obj = res.json()	)});
}
   

}
