import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Data } from '../services/data.service';
import { PersonOutputData } from '../entities/personOutputData';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BirthDate } from '../entities/birthDate';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit, OnDestroy {

  public personOutputData: PersonOutputData[];

  public constructor(
    private route: ActivatedRoute,
    private dataService: Data
  ) {}

  public ngOnInit(): void {
    this.dataService.getPersonOutputData().subscribe((data: PersonOutputData[]) => {
      this.personOutputData = data;
    });

    this.route.queryParamMap.subscribe((data: ParamMap) => {
      const usersDate: BirthDate[] = [];
      for (const dataKey in data) {
        const obj: Object = data[dataKey];
        for (const key of Object.keys(obj)) {
          const date: string[] = (obj[key]).split('.');
          usersDate.push(new BirthDate(
            Number.parseInt(date[0]),
            Number.parseInt(date[1]),
            Number.parseInt(date[2]),
            key));
        }
      }
      usersDate.forEach((i: BirthDate) => {
        this.dataService.createResultUsersData(i);
      });
    });

  }
  public ngOnDestroy(): void {
    this.dataService.clearPersonalOutputData(); // if go back to Data Page -> old DataPucckerId's no any matter
  }

}
