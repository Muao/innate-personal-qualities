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

@NgModule({
  declarations: [
    AppComponent,
    DataPickerComponent,
    ChartComponent,
    NotFoundComponent
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
    RouterModule.forRoot([
      {
        path: '', component: DataPickerComponent
      },
      {
        path: 'result', component: ChartComponent
      },
      {
        path: '**', component: NotFoundComponent
      }
    ])

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
