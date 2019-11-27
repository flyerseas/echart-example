export const lineOption = {
    color: ['#00b3e5', '#00e9c5', '#ffc000', '#FFFFB7', '#1AEB39', '#8F97FF'],
    dataset: {},
    series: [
        {
            type: 'line',
            encode: {},
            symbol: 'none'
        }
    ],
    title: {
        show: false,
        textStyle: {
            color: '#d9d9d9',
            fontSize: 14
        },
        left: 'center'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#efefef'
            }
        },
        nameTextStyle: {
            color: '#d9d9d9'
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#d9d9d9'
        }
    },
    yAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#efefef'
            }
        },
        nameTextStyle: {
            color: '#d9d9d9'
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#d9d9d9'
        },
        splitLine: {
            show: false,
            lineStyle: {
                width: 1,
                type: 'dash'
            }
        }
    },
    grid: {
        show: false,
        top: 42,
        bottom: 40,
        left: 45,
        right: 24
    }
};