import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Statistic } from '../model/statistic';
import { StatisticService } from '../service/statistic.service';

@Component({
  selector: 'app-statistic-id',
  templateUrl: './statistic-id.component.html',
  styleUrls: ['./statistic-id.component.css']
})
export class StatisticIdComponent implements OnInit {
  statistics: Statistic[]=[];
  statistic: Statistic = new Statistic;
  id!: number;

  constructor(private statisticService: StatisticService,
              private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    let idString=this.activeRoute.snapshot.paramMap.get("id");
    this.id=JSON.parse(idString ||"");
    this.statisticService.findStatisticById(this.id).subscribe(
      data =>{
        this.statistics=data;
      }
    );
  }

  

}
