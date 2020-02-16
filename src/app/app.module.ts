import { DinamicComponentLoaderService } from './services/dinamic-component-loader.service';
import { Data } from './services/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { DataPickerComponent } from './data-picker/data-picker.component';
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
import { InputDateFormComponent } from './input-date-form/input-date-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DataPickerComponent,
    ChartComponent,
    NotFoundComponent,
    MainPageComponent,
    ResultPageComponent,
    InputDateFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    InputDateFormComponent
  ],
  exports: [
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule
  ],
  providers: [Data, DinamicComponentLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
