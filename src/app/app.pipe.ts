import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'truncateWords' })
export class LimitDescriptionPipe implements PipeTransform {
  transform(content:string,count:number):string {
	var words = [];
	words = content.split(" ");
	var wordString = words.slice(0,count);
	wordString.push("...");
	return wordString.join(" ");
	
  }
}

@Pipe({ name: 'truncateEnd' })
export class TruncateDescriptionPipe implements PipeTransform {
  transform(content:string):string {
	  if(content == null){
		  return "";
	  }
	if(content.trim().length==0)
			return "";
	var words = "";
	words = content.split("[+")[0];
	return words;
	
  }
}