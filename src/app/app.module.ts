import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LineChartMutiMarklineComponent } from './components/line-chart-muti-markline/line-chart-muti-markline.component';
import { LineChartMarkpointRedComponent } from './components/line-chart-markpoint-red/line-chart-markpoint-red.component';

@NgModule({
  declarations: [
    AppComponent,
    LineChartMutiMarklineComponent,
    LineChartMarkpointRedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
