import { Component, OnInit } from '@angular/core';
import { ChartData, ChartDataSets, ChartTooltipItem, ChartType, RadialChartOptions } from 'chart.js';
import { Data } from '../services/data.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  public radarChartOptions: RadialChartOptions;

  public radarChartLabels: string[] = [];

  public radarChartData: ChartDataSets[];

  public radarChartType: ChartType = 'radar';

  private radarTickNames: string[] = [];

  public constructor(
    private dataService: Data,
    public translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use(navigator.language);
  }

  public ngOnInit(): void {

    // internationalization of radar chart labels
    this.translate.get(this.dataService.radarChartLabels).subscribe( (values: string[]) => {
        this.radarChartLabels = Object.keys(values).map((key: string) => values[key]);
      }
    );

    this.translate.get(this.dataService.tickNames).subscribe( (values: string[]) => {
        this.radarTickNames = Object.keys(values).map((key: string) => values[key]);
      }
    );

    this.radarChartData = this.dataService.getRadarChartData();

    const self: ChartComponent = this;

    this.radarChartOptions = {

      responsive: true,
      // maintainAspectRatio: true,
      scale: {
        ticks: {
          beginAtZero: true,
          labelOffset: 3,
          max: 99,
          stepSize: 25,
          callback(value: string, index: number): string {
            return value + ' ' + self.radarTickNames[index];
          }
        },
        gridLines: {
          color: ['rgb(255,0,0, 0.5)', 'rgb(0,128,0, 0.5)', 'rgb(128,128,128, 0.5)', 'rgb(128,0,128, 0.5)']
        },
        pointLabels: {
          fontSize: 14,
          fontColor: [null, 'rgb(64,40,152, 0.9)', 'rgb(254, 222, 7, 0.9)', 'rgb(236,80,102, 0.9)', 'rgb(239,155,108, 0.9)', 'rgb(136,169,88, 0.9)', 'rgb(115,202,229, 0.9)']
        }
      },
      tooltips: {
        enabled: true,
        mode: 'index',
        callbacks: {
          title(item: ChartTooltipItem[], data: ChartData): string {
            return '';
          },
          // label(tooltipItems: ChartTooltipItem, data: ChartData): string {
          //   return tooltipItems.x + "";
          // }
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
