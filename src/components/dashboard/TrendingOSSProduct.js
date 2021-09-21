import React, {useState} from 'react';
import Chart from 'react-apexcharts';

const data = {
        options: {
            chart: {
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            title: {
                text: '',
                align: 'left'
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
            xaxis: {
                categories: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec','Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', ],
            }
        },
        series: [{
            name: "SVIP Latrine",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 160, 150, 160]
        }],
    }

const TrendingOSSProduct = () => {
    const [chartState, setChartState] = useState(data);
    
    return (
        <div className="card mb-4">
                <div className="card-body">
                    <div className="card-header">
                        <h5 className="card-title">Trending OSS Product </h5>
                    </div>
                    <div id="chart" className="apexcharts-content">
                        <Chart options={chartState.options} series={chartState.series} type="line" height={335} />
                    </div>
                </div>
            </div>
    )
}

export default TrendingOSSProduct
