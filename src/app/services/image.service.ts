import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http:HttpClient) { }


  SearchImage(query :any,api:any): Observable<any>{
  
    let link = api||`https://api.pexels.com/v1/search?query=${query}&per_page=5`

  console.log(link);
    let headers = new HttpHeaders().set("Authorization", "563492ad6f9170000100000110a35c5b62f84f618a5459d14227b4d3")
   return this.http.get(link,{headers})
  }
}
