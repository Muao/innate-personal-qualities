import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Data } from '../services/data.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
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
  }

  public ngOnInit(): void {
    this.radarChartData = this.dataService.getRadarChartData();
  }

  public chartClicked({event, active}: { event: MouseEvent, active: {}[] }): void {
    const currEvent: string = event.type;
    }

  public chartHovered({event, active}: { event: MouseEvent, active: {}[] }): void {
    const currEvent: string = event.type;
  }
}
