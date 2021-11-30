import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Statistic } from '../model/statistic';
import { Url } from '../model/url';
import { StatisticService } from '../service/statistic.service';
import { UrlService } from '../service/url.service';

@Component({
  selector: 'app-short-ulr-list',
  templateUrl: './short-ulr-list.component.html',
  styleUrls: ['./short-ulr-list.component.css']
})
export class ShortUlrListComponent implements OnInit {

  urls: Url[]=[];
  statistics:Statistic[]=[];

  constructor(private urlService : UrlService,
              private router: Router) { }

  ngOnInit(): void {
    this.urlService.findAllUrls().subscribe(
      data =>{
        this.urls=data;
      }
    );
  }

  removeItem(id:number){

    this.urlService.delete(id).subscribe(data =>{
      this.urlService.findAllUrls().subscribe(
        data =>{
          this.urls=data;
        }
      );
    });

  }

  getStatisticById(id:number){
    this.router.navigate(['/statistics/',id]);
      
  }
   

}
