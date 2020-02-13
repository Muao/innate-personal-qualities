import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { Data } from '../services/data.service';
import { BirthDate } from '../entities/BirthDate';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, OnDestroy {

  public birthDate: BirthDate;
  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = ['Muladhara', 'Svadhishthana', 'Manipura', 'Anahata', 'Vishuddha', 'Ajna',];

  public radarChartData: ChartDataSets[];
 /* =
    [{outputData: [65, 59, 90, 81, 56, 55, 40], label: 'Series A'},
      {outputData: [28, 48, 40, 19, 96, 27, 100], label: 'Series B'}
    ];*/
  public radarChartType: ChartType = 'radar';
  private usersDate: BirthDate[] = [];


  public constructor(
    private dataService: Data,
    private route: ActivatedRoute) {
  }

  public ngOnInit(): void {
    this.route.queryParamMap.subscribe((data: ParamMap) => {
      this.usersDate = [];

      for (const dataKey in data) {
        const obj: Object = data[dataKey];
        for (const key of Object.keys(obj)) {
          const date: string[] = (obj[key]).split('.');
          this.usersDate.push(new BirthDate(
            Number.parseInt(date[0]),
            Number.parseInt(date[1]),
            Number.parseInt(date[2]),
            key));
        }
      }
      this.usersDate.forEach((i: BirthDate) => {
        this.dataService.pushNewBirthDay(i);
      });
    });
    this.radarChartData = this.dataService.getRadarChartData();
  }

  public ngOnDestroy(): void {
    this.dataService.clearPersonalOutputData(); // if go back to Data Page -> old DataPucckerId's no any matter
  }

  public chartClicked({event, active}: { event: MouseEvent, active: {}[] }): void {
    const currEvent: string = event.type;
    console.log(currEvent);
  }

  public chartHovered({event, active}: { event: MouseEvent, active: {}[] }): void {
    const currEvent: string = event.type;
    console.log(currEvent);
  }
}
