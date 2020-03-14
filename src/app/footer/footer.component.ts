import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public counter: number;

  public constructor(
    private counterService: CounterService,
    public translate: TranslateService) {
      const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang);
     }

 public ngOnInit(): void {
    // tslint:disable-next-line: no-any
    this.counterService.getCounter().subscribe((action: any) => {
      this.counter = action.payload.val().count;
    });
  }

}
