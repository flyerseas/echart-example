import { Component, OnInit, ViewChild } from '@angular/core';
import * as echarts from 'echarts';
import { cloneDeep } from 'lodash'; 
import { lineOption } from 'src/app/common/chartOption';

@Component({
  selector: 'app-line-chart-muti-markline',
  templateUrl: './line-chart-muti-markline.component.html',
  styleUrls: ['./line-chart-muti-markline.component.scss']
})
export class LineChartMutiMarklineComponent implements OnInit {

  @ViewChild("chart") chartEl;
  chart: any;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.chart = echarts.init(this.chartEl.nativeElement);
    let option = cloneDeep(lineOption);
    option.xAxis = {
      type: 'category',
      data: ['one', 'two', 'three', 'four', 'five']
    };
    option.yAxis = {
      type: 'value',
      min: 0,
      max: 1500,
      splitLine: {
        show: false
      }
    };
    option.visualMap = {
      type: 'continuous',
      show: false,
      dimension: 1,
      pieces: [],  //pieces的值由动态数据决定
      outOfRange: {
        color: 'red'
      }
    };
    option.series = [
      // {
      //   data: [800, 700, 600, 500, 600, 800, 300],
      //   type: 'line',
      //   // itemStyle: {
      //   //   normal: {
      //   //     lineStyle: {
      //   //       color: function (params) {
      //   //         console.log(params);
      //   //         return "black";
      //   //       }
      //   //     },
      //   //     color: function (params) {
      //   //       if (params.value > 0 && params.value < 1000) {
      //   //         return "red";
      //   //       } else if (params.value >= 1000 && params.value <= 3000) {
      //   //         return "green";
      //   //       }
      //   //     }
      //   //   }
      //   // }
      // },
      {
        data: [1000, 932, 300, 934, 1290],
        type: 'line',
        // markLine: {
        //   symbol: 'none',
        //   lineStyle: {
        //     normal: {
        //       type: 'solid'
        //     }
        //   }
        // }
        markLine: {
          silent: true,
          outOfRange: {
            color: 'red'
          },
          lineStyle: {
            normal: {
              type: 'dashed'
            }
          },
          label: {
            show: false
          },
          data: [
            [
              {
                name: '两个坐标之间的标线',
                yAxis: 900,
                xAxis: 'one'
              },
              {
                yAxis: 400,
                xAxis: 'two'
              }
            ], [
              {
                name: '两个坐标之间的标线',
                yAxis: 1200,
                xAxis: 'one'
              },
              {
                yAxis: 800,
                xAxis: 'two'
              }
            ], [
              {
                yAxis: 400,
                xAxis: 'two'
              },
              {
                yAxis: 800,
                xAxis: 'three'
              }
            ], [
              {
                yAxis: 800,
                xAxis: 'two'
              },
              {
                yAxis: 1200,
                xAxis: 'three'
              }
            ], [
              {
                yAxis: 800,
                xAxis: 'three'
              },
              {
                yAxis: 600,
                xAxis: 'four'
              }
            ], [
              {
                yAxis: 1200,
                xAxis: 'three'
              },
              {
                yAxis: 1000,
                xAxis: 'four'
              }
            ], [
              {
                yAxis: 600,
                xAxis: 'four'
              },
              {
                yAxis: 800,
                xAxis: 'five'
              }
            ], [
              {
                yAxis: 1000,
                xAxis: 'four'
              },
              {
                yAxis: 1200,
                xAxis: 'five'
              }
            ]
          ]
        }
      }
    ];
    // option.visualMap.pieces[0] = { gte: 900, lte: 1200, color: 'red' };
    // option.visualMap.pieces[1] = { gte: 800, lte: 400, color: 'red' };
    // option.visualMap.pieces[2] = { gte: 800, lte: 600, color: 'red' };
    // option.visualMap.pieces[3] = { gte: 800, lte: 600, color: 'red' };
    option.visualMap.range = [
      900, 1200
      // {min: 400, color: 'green'}, // 不指定 max，表示 max 为无限大（Infinity）。
      // {min: 900, max: 1200, color: 'green'},
      // {min: 400, max: 800, color: 'green'},
      // {min: 600, max: 800, color: 'green'},
      // {min: 600, max: 800, color: 'green'},
      // // {min: 10, max: 200, label: '10 到 200（自定义label）'},
      // // {value: 123, label: '123（自定义特殊颜色）', color: 'grey'}, // 表示 value 等于 123 的情况。
      // {max: 1200, color: 'green'}     // 不指定 min，表示 min 为无限大（-Infinity）。
    ];
    // option.visualMap.pieces = [
    //   {
    //     // gt: this.conditions.down_control_limit,
    //     lte: 400,
    //     color: '#e01f54'
    //   },
    //   {
    //     gt: 400,
    //     lte: 800,
    //     color: '#30ce89fa'
    //   }, {
    //     gt: 400,
    //     lte: 900,
    //     color: '#30ce89fa'
    //   },
    //   {
    //     gt: 600,
    //     lte: 800,
    //     color: '#30ce89fa'
    //   }
    // ];
    // outOfRange: {
    //   color: '#e01f54'
    // }
    this.chart.setOption(option);

  }

}
