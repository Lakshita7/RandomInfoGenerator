import { Component } from '@angular/core';
import Character from './Character';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularChromeExtension';
  private apiUrl = 'https://uinames.com/api/?ext';
  data: any = {};

  constructor(private http: HttpClient){
    console.log('Random name generator');
    this.generateName();
    this.getData();
  }

  getData(){
    return this.http.get(this.apiUrl)
    .pipe(map((res: HttpResponse<any>) => res.body.json() ))


    }

    generateName(){
      this.getData().subscribe(data =>{
        console.log(data);
        debugger;
        this.data = data;
      })

    }







  }
  

