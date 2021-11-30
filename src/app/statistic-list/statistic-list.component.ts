import { Component, OnInit } from '@angular/core';
import { Statistic } from '../model/statistic';
import { StatisticService } from '../service/statistic.service';

@Component({
  selector: 'app-statistic-list',
  templateUrl: './statistic-list.component.html',
  styleUrls: ['./statistic-list.component.css']
})
export class StatisticListComponent implements OnInit {

  statistics: Statistic[]=[];

  constructor(private statisticService: StatisticService
  ) { }

  ngOnInit(): void {
    this.statisticService.findAllStatistic().subscribe(
      data =>{
        this.statistics=data;
      }
    );
  }

}
