
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import { map } from "rxjs/operators"; 
import * as myGlobals from '../globalConstants';

@Component({
  selector: 'app-search-cmp',
  templateUrl: './search-cmp.component.html',
  styleUrls: ['./search-cmp.component.css']
})
export class SearchCmpComponent implements OnInit {

   constructor(private route: ActivatedRoute,private http: Http) { }
	resultArticles = [];
	param = "";
  ngOnInit() {
		console.log("hello from search");
		console.log(this.route.snapshot.params.searchKey);
	    this.route.params.subscribe(params => {
		this.param = params['searchKey'];
		this.changeFeed(this.param); // reset and set based on new parameter this time
});
  }

	changeFeed(searchKey){
		console.log("Changing feed to "+searchKey);
		this.http.get(myGlobals.baseurl+"/news/search/"+searchKey).subscribe((res)=>{
		console.log(this.resultArticles = res.json()	)
	  });
}
}

