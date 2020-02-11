import {PersonOutputData} from './../entities/PersonOutputData';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {ChartDataSets, ChartType, RadialChartOptions} from 'chart.js';
import {Label} from 'ng2-charts';
import {Data} from '../services/data.service';
import {BirthDate} from '../entities/BirthDate';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {log} from 'util';

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

  public radarChartData: ChartDataSets[] =
    [{data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A'},
      {data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B'}
    ];
  public radarChartType: ChartType = 'radar';
  public personOutputData: PersonOutputData[];
  private usersDate: BirthDate[] = [];

  public constructor(
    private dataService: Data,
    private route: ActivatedRoute) {
  }

  public ngOnInit(): void {
    this.personOutputData = this.dataService.personalOutputData;

    this.route.queryParamMap.subscribe((data: ParamMap) => {
      this.usersDate = [];

      for (const dataKey in data) {
        const obj: Object = data[dataKey];
        for (const key of Object.keys(obj)) {
          const date: string[] = (obj[key]).split('.');
          this.usersDate.push(new BirthDate(Number.parseInt(date[0]), Number.parseInt(date[1]), Number.parseInt(date[2]), key));
        }
      }

      this.usersDate.forEach((i: BirthDate) => {
        console.log(i.toString());
      });
    });

    /* for (var key of this.orderObj) {
       if (this.orderObj.hasOwnProperty(key)) {
         console.log(key + " -> " + this.orderObj[key]);
       }
       console.log('chart');
       console.log(this.orderObj);*/
  }


  /*this.activatedRoute.queryParamMap.subscribe((data: ParamMap) => {
      const pageOpt = {
        _limit: Number(data.get('_limit')) || this.pageOptions._limit,
        _page: Number(data.get('_page')) || this.pageOptions._page,
      };
      this.getHotels(pageOpt);
    });*/

  // this.dataService.getResults().subscribe((personOutputData: PersonOutputData[]) => {
  //   this.personOutputData = personOutputData;
  // }


  // console.log(this.personOutputData.length);
  // console.log(code.getMiddleDigit);
  // console.log(code.getPositiveCode);
  // console.log(allContours[0].contourName + ': ' + allContours[0].valueI + ' ' + allContours[0].valueI);
  // console.log(allContours[1].contourName + ': ' + allContours[1].valueI + ' ' + allContours[1].valueII);
  // console.log(allContours[2].contourName + ': ' + allContours[2].valueII + ' ' + allContours[2].valueII);

  //   this.radarChartData = [
  //     // {
  //     //   data: [
  //     //     allContours[0].valueI,
  //     //     allContours[0].valueII,
  //     //     allContours[1].valueI,
  //     //     allContours[1].valueII,
  //     //     allContours[2].valueI,
  //     //     allContours[2].valueII
  //     //   ],
  //     //   label: 'User 1'// todo needs getting real user lable
  //     // },
  //   ];
  // }

  public ngOnDestroy(): void {
    this.dataService.clearPersonalOutputData(); // if go back to Data Page -> old DataPucckerId's no any matter
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
