import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router'
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { NewsCmpComponent } from './news-cmp/news-cmp.component';
import {MatCardModule} from '@angular/material/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {LimitDescriptionPipe,TruncateDescriptionPipe} from './app.pipe';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatRippleModule,
  MatMenuModule
} from '@angular/material';
import { CategoryComponent } from './category/category.component';
import { MenuCmpComponent } from './menu-cmp/menu-cmp.component';
import { SourceCmpComponent } from './source-cmp/source-cmp.component';
import { SearchCmpComponent } from './search-cmp/search-cmp.component';
import { ListSourcesCmpComponent } from './list-sources-cmp/list-sources-cmp.component';


@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    NewsCmpComponent,
LimitDescriptionPipe,
TruncateDescriptionPipe,
CategoryComponent,
MenuCmpComponent,
SourceCmpComponent,
SearchCmpComponent,
ListSourcesCmpComponent,
  ],
  imports: [
    BrowserModule,
	HttpModule,
	  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatRippleModule,
  MatToolbarModule,
	MatMenuModule,
	FormsModule,
	MatCardModule,
	MatDividerModule,
	BrowserAnimationsModule,
	RouterModule.forRoot([
         {
            path: 'news',
            component: NewsCmpComponent
         },
		 {
            path: '',
            component: NewsCmpComponent
         },
		 {
            path: 'category/:categoryName',
            component: CategoryComponent
         },
		 {
            path: 'source/:sourceName',
            component: SourceCmpComponent
         },
		 {
            path: 'search/:searchKey',
            component: SearchCmpComponent
         },
		 {
            path: 'sources',
            component: ListSourcesCmpComponent
         }
      ], { 
	  //enableTracing: true 
	  } )
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
