import { Injectable } from '@angular/core';
import { Url } from '../model/url';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  private urlsLink: string;
  private urlRemove:string;
  private urlsByName:string;

  constructor(private http: HttpClient) { 
    this.urlsLink='http://localhost:8080/test/';
    this.urlRemove='http://localhost:8080/test/urls/remove';
    this.urlsByName='http://localhost:8080/test/urls'
  }

  public findAllUrls(): Observable<Url[]>{
    return this.http.get<Url[]>(this.urlsLink+"urls")
  }

  public save(url:Url){
    return this.http.post<Url>(this.urlsLink+"generate",url);
  }

  public delete(id:number):Observable<any> {
    return this.http.delete(`${this.urlRemove}/${id}`,{responseType:'text'});
  }

  public findByName(name:string):Observable<Url[]>{
    return this.http.get<Url[]>(`${this.urlsByName}/${name}`);
  }
    
}
