import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { Data } from '../services/data.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = ['Muladhara', 'Svadhishthana', 'Manipura', 'Anahata', 'Vishuddha', 'Ajna',];

  public radarChartData: ChartDataSets[];

  public radarChartType: ChartType = 'radar';

  public constructor(
    private dataService: Data) {
  }

  public ngOnInit(): void {
    this.radarChartData = this.dataService.getRadarChartData();
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
