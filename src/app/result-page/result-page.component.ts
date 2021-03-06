import { CounterService } from '../services/counter.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Data } from '../services/data.service';
import { PersonOutputData } from '../entities/personOutputData';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BirthDate } from '../entities/birthDate';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit, OnDestroy {

  public personOutputData: PersonOutputData[];
  public counter: number;

  public constructor(
    private counterService: CounterService,
    private route: ActivatedRoute,
    private dataService: Data,
    public translate: TranslateService) {
    const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang);
  }


  public async ngOnInit(): Promise<void> {
    let localOpearationCounter: number = 0;
    this.dataService.getPersonOutputData().subscribe((data: PersonOutputData[]) => {
      this.personOutputData = data;
      // tslint:disable-next-line: no-any
      this.counterService.getCounter().subscribe((action: any) => {
        this.counter = action.payload.val().count;
      });
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
        localOpearationCounter++;
      });
    });

    // tslint:disable-next-line: typedef
    await new Promise(r => setTimeout(r, 2000)); // fixme dump code
    await this.counterService.increaseCounter(this.counter + localOpearationCounter);
  }
  public ngOnDestroy(): void {
    this.dataService.clearPersonalOutputData(); // if go back to Data Page -> old DataPucckerId's no any matter
  }
}
