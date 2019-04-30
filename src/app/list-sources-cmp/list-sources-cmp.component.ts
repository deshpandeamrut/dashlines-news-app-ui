import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import * as myGlobals from '../globalConstants';
import { map } from "rxjs/operators"; 

@Component({
  selector: 'app-list-sources-cmp',
  templateUrl: './list-sources-cmp.component.html',
  styleUrls: ['./list-sources-cmp.component.scss']
})
export class ListSourcesCmpComponent implements OnInit {

  constructor(private http: Http) { }
	sources = [];
	ngOnInit() {
	  console.log("hello from listSources");
		this.getSources(); // reset and set based on new parameter this time
	}
	getSources(){
		this.http.get(myGlobals.baseurl+"/news/sources/").subscribe((res)=>{
		console.log(this.sources = res.json()	)
	  });

	}
}

