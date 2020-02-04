import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { Data } from '../services/data.service';
import { BirthDate } from '../entities/BirthDate';
import { Code } from '../entities/Code';
import { ContourResult } from '../entities/ContourResult';
import { ContoursProcessor } from '../utilites/ContoursProcessor';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  public birthDate: BirthDate;
  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = ['Muladhara', 'Svadhishthana', 'Manipura', 'Anahata', 'Vishuddha', 'Ajna',];

  public radarChartData: ChartDataSets[];
  /*[ {data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A'},
     { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
  ];*/
  public radarChartType: ChartType = 'radar';

  public constructor(private dataService: Data) {
  }

  public ngOnInit(): void {
    this.dataService.getBirthDate().subscribe((date: BirthDate) => {
      this.birthDate = date;
    });
    const code: Code = new Code(this.birthDate);
    const allContours: ContourResult[] = new ContoursProcessor(this.dataService).getContours(this.birthDate);

    console.log(code.getNegativeCode);
    console.log(code.getMiddleDigit);
    console.log(code.getPositiveCode);
    console.log(allContours[0].contourName + ': ' + allContours[0].valueI + ' ' + allContours[0].valueI);
    console.log(allContours[1].contourName + ': ' + allContours[1].valueI + ' ' + allContours[1].valueII);
    console.log(allContours[2].contourName + ': ' + allContours[2].valueII + ' ' + allContours[2].valueII);

    this.radarChartData = [
      {
        data: [
          allContours[0].valueI,
          allContours[0].valueII,
          allContours[1].valueI,
          allContours[1].valueII,
          allContours[2].valueI,
          allContours[2].valueII
        ],
        label: 'User 1'// todo needs getting real user lable
      },
    ];
  }

  public chartClicked({event, active}: { event: MouseEvent, active: {}[] }): void {
    const currEvent: string = event.type;
    console.log(currEvent);
  }

  public chartHovered({event, active}: { event: MouseEvent, active: {}[] }): void {
    let currEvent = event.type;
    console.log(currEvent);
  }
}
