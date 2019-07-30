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
 
  

}
