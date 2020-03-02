import { Component, OnInit } from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType, RadialChartOptions, RadialLinearScale} from 'chart.js';
import { Data } from '../services/data.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  public radarTickNames: string[] = [];
  public radarChartOptions: RadialChartOptions;


  public radarChartLabels: string[] = [];

  public radarChartData: ChartDataSets[];

  public radarChartType: ChartType = 'radar';

  public constructor(
    private dataService: Data,
    public translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use(navigator.language);
      // internationalization of radar chart labels
      translate.get(dataService.radarChartLabels).subscribe( (values: string[]) => {
          this.radarChartLabels = Object.keys(values).map((key: string) => values[key]);
        }
      );

    translate.get(dataService.tickNames).subscribe( (values: string[]) => {
        this.radarTickNames = Object.keys(values).map((key: string) => values[key]);
      }
    );
  }

  public ngOnInit(): void {
    this.radarChartData = this.dataService.getRadarChartData();
    this.radarChartOptions = {
      responsive: true,
      maintainAspectRatio: true,
      scale: {
        ticks: {
          beginAtZero: true,
          max: 99,
          stepSize: 25,
          // callback: function(value: string, index: number) {
          //   return this.radarTickNames[index];
          // }
        },
        gridLines: {
          color: ['red', 'green', 'grey', 'indigo']
        }
      }
    };
  }

  public chartClicked({event, active}: { event: MouseEvent, active: {}[] }): void {
    const currEvent: string = event.type;
    }

  public chartHovered({event, active}: { event: MouseEvent, active: {}[] }): void {
    const currEvent: string = event.type;
  }
}
