import { Data } from './services/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatNativeDateModule } from '@angular/material';
import { ChartComponent } from './chart/chart.component';
import { ChartsModule } from 'ng2-charts';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MainPageComponent } from './main-page/main-page.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { ResultPageComponent } from './result-page/result-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    NotFoundComponent,
    MainPageComponent,
    ResultPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    ChartsModule,
    MatCheckboxModule,
    HttpClientModule,
    MatCardModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '', component: MainPageComponent
      },
      {
        path: 'result', component: ResultPageComponent
      },
      {
        path: '**', component: NotFoundComponent
      }
    ])

  ],
  entryComponents: [
  ],
  exports: [
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule
  ],
  providers: [Data],
  bootstrap: [AppComponent]
})
export class AppModule { }
