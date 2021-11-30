import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Statistic } from '../model/statistic';

@Injectable({
  providedIn: 'root'
})
export class StatisticService {
  private statisticLink: string;

  constructor(private http: HttpClient) {
    this.statisticLink='http://localhost:8080/test/statistics';
   }

   public findAllStatistic(): Observable<Statistic[]>{
    return this.http.get<Statistic[]>(this.statisticLink)
  }

  public findStatisticById(id:number):Observable<Statistic[]>{
    console.log("id: "+id);
    return this.http.get<Statistic[]>(`${this.statisticLink}/${id}`);
  }
}
