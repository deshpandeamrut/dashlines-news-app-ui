import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import { map } from "rxjs/operators"; 
import * as myGlobals from '../globalConstants';

@Component({
  selector: 'app-source-cmp',
  templateUrl: './source-cmp.component.html',
  styleUrls: ['./source-cmp.component.css']
})
export class SourceCmpComponent implements OnInit {

 constructor(private route: ActivatedRoute,private http: Http) { }
	latestArticles = [];
	param = "";
  ngOnInit() {
	  console.log("hello from source");
	  console.log(this.route.snapshot.params.sourceName);
	  
	  //this.changeFeed(this.route.snapshot.params.categoryName);
	    this.route.params.subscribe(params => {
    this.param = params['sourceName'];
    this.changeFeed(this.param); // reset and set based on new parameter this time
});
  }

	changeFeed(sourceName){
		 console.log("Changing feed to "+sourceName);
	  this.http.get(myGlobals.baseurl+"/news/source/"+sourceName).subscribe((res)=>{
	  console.log(this.latestArticles = res.json()	)
	  });
}

}

