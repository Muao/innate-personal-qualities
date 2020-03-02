import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType, RadialChartOptions, RadialLinearScale } from 'chart.js';
import { Data } from '../services/data.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  private static _radarTickNames: string[] = [];

  public radarChartOptions: RadialChartOptions;

  public radarChartLabels: string[] = [];

  public radarChartData: ChartDataSets[];

  public radarChartType: ChartType = 'radar';

  public static get radarTickNames(): string[] {

    return this._radarTickNames;
  }

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
        ChartComponent._radarTickNames = Object.keys(values).map((key: string) => values[key]);
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
          callback(value: string, index: number): string {
            return value + ' ' + ChartComponent._radarTickNames[index];
          }
        },
        gridLines: {
          color: ['rgb(255,0,0, 0.5)', 'rgb(0,128,0, 0.5)', 'rgb(128,128,128, 0.5)', 'rgb(128,0,128, 0.5)']
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
