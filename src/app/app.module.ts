import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router'
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { NewsCmpComponent } from './news-cmp/news-cmp.component';
import {MatCardModule} from '@angular/material/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    NewsCmpComponent	
  ],
  imports: [
    BrowserModule,
	HttpModule,
	MatCardModule,
	MatDividerModule,
	BrowserAnimationsModule,
	RouterModule.forRoot([
         {
            path: 'new-cmp',
            component: NewCmpComponent
         }
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
