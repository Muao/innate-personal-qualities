import {Component, Input, OnInit} from '@angular/core';
import { Data } from '../services/data.service';
import { PersonOutputData } from '../entities/PersonOutputData';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {

  @Input()
  private personOutputData: PersonOutputData[];

  public constructor(private dataService: Data) {}

  public ngOnInit(): void {
    this.dataService.getPersonOutputData().subscribe((data: PersonOutputData[]) => {
      this.personOutputData = data;
    });
  }

}
