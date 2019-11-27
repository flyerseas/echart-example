import { Component, OnInit, ViewChild } from '@angular/core';
import * as echarts from 'echarts';
import { cloneDeep } from 'lodash';
import { lineOption } from 'src/app/common/chartOption';

@Component({
  selector: 'app-line-chart-markpoint-red',
  templateUrl: './line-chart-markpoint-red.component.html',
  styleUrls: ['./line-chart-markpoint-red.component.scss']
})
export class LineChartMarkpointRedComponent implements OnInit {

  @ViewChild('chart') chartEl;
  chart: any;

  constructor() { }

  ngOnInit() {
    this.chart = echarts.init(this.chartEl.nativeElement);
    let option = cloneDeep(lineOption);
    option.xAxis = {
      type: 'category',
      data: ['one', 'two', 'three', 'four', 'five']
    };
    option.series = [{
      name: '最大值',
      data: [1000, 932, 300, 934, 1290],
      type: 'line',
      lineStyle: {
        type: 'dash',
        color: 'red'
      },
      itemStyle: {
        color: 'red'
      },
      showSymbol: false,
      symbolSize: 0,
    }, {
      name: '数据',
      data: [700, 632, 30, 634, 990],
      type: 'line',
      symbol: function (value, pointObj) {
        const max = option.series[0].data[pointObj.dataIndex];
        const min = option.series[2].data[pointObj.dataIndex];
        if (value > max || value < min) {
          return 'circle';
        }
        return 'emptyCircle';
      },
      symbolSize: function (value, pointObj) {
        const max = option.series[0].data[pointObj.dataIndex];
        const min = option.series[2].data[pointObj.dataIndex];
        if (value > max || value < min) {
          return 20;
        }
        return 4;
      },
      itemStyle: {
        color: function (pointObj) {
          const max = option.series[0].data[pointObj.dataIndex];
          const min = option.series[2].data[pointObj.dataIndex];
          if (pointObj.value > max || pointObj.value < min) {
            return 'red';
          }
          return '#00e9c5';
        }
      },
      lineStyle: {
        color: '#00e9c5'
      }
      // markPoint: {
      //   symbol: 'rect',
      //   symbolSize: 100,
      //   silent: true
      // }
    }, {
      name: '最小值',
      data: [500, 632, 100, 534, 790],
      type: 'line',
      lineStyle: {
        type: 'dash',
        color: 'red'
      },
      itemStyle: {
        color: 'red'
      },
      showSymbol: false,
      symbolSize: 0
    }];
    this.chart.setOption(option);
  }

}
