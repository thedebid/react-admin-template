import React, { Component } from 'react';
import ReactApexChart from "react-apexcharts";

class SparkLineBoxChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    type: 'bar',
                    width: 47,
                    height: 53,
                    sparkline: {
                        enabled: true
                    }
                },
                colors: ["#FFFFFF"],
                plotOptions: {
                    bar: {
                        columnWidth: '40%'
                    }
                },
                labels: [6, 3, 2, 5, 8, 9, 5, 4, 2, 3],
                tooltip: {
                    fixed: {
                        enabled: false
                    },
                    x: {
                        show: false
                    },
                    marker: {
                        show: false
                    }
                }
            },
            series: [{
                data: this.props.data
            }]
        };
    }
    render() {
        return (
            <ReactApexChart
                options={this.state.options}
                series={this.state.series}
                type="bar"
                height={65}
                width='100%'
            />
        );
    }
}

export default SparkLineBoxChart;
