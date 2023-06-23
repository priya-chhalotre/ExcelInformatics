import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const httpOptions = {
  headers:new HttpHeaders({
    'Content-Type': 'x-www-form-urlencoded'
  })
}

@Injectable({
  providedIn: 'root'
})

export class FromsdataService {

  

  reset() {
    throw new Error('Method not implemented.');
  }


  // url = "http://localhost:3000/users";
  // url="https://docs.google.com/forms/d/e/1FAIpQLScBOLxG9QkQq6nPNGvTmM_NJnIrhABnQ_g4hZW2KU0mGf2cbQ/viewform";
  constructor(private http: HttpClient) { }

  submitForm(url:string,payload:any){
    // const pramas=new HttpParams().set('entry.92369453',name).set('entry.1256401393',email).set('entry.1217940549',message);
    return this.http.post(url,payload,httpOptions);
  }

}
