import { Injectable, Input } from '@angular/core';
import { Headers, Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TeamOneService{
    private newsURL = 'http://localhost:3320/poc/testjson/newsv1.json';
    private url2 = 'https://jsonplaceholder.typicode.com/posts';
    private url3 = 'https://jsonplaceholder.typicode.com/comments';
    private url4 = 'https://jsonplaceholder.typicode.com/albums';
    private url5 = 'https://jsonplaceholder.typicode.com/users';

    constructor(private http: Http) { }


    getdatas(){
        return  this.http.get(this.newsURL)
         .map((res:Response)=>res.json())
         .catch(this.httpError);
     }
     getdatas2(){
        return  this.http.get(this.url2)
         .map((res:Response)=>res.json())
         .catch(this.httpError);
     }
     getdatas3(){
        return  this.http.get(this.url3)
         .map((res:Response)=>res.json())
         .catch(this.httpError);
     }
     getdatas4(){
        return  this.http.get(this.url4)
         .map((res:Response)=>res.json())
         .catch(this.httpError);
     }
     getdatas5(){
        return  this.http.get(this.url5)
         .map((res:Response)=>res.json())
         .catch(this.httpError);
     }
    private httpError(error:any){
        let errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);

    }
}