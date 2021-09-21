import React from 'react';
import ReactEcharts from 'echarts-for-react';

const ProductSalesByArea = (props) => {
    return (
        <div className="card mb-4 overflow-hidden">
            <div className="card-body">
                <div className="card-header">
                    <h5 className="card-title">Product Sales by Area/Hotspot</h5>
                </div>

                <ReactEcharts 
                    option={props.data} 
                    style={{height: '350px'}} 
                    notMerge={true} 
                    lazyUpdate={true} 
                    opts={{renderer: 'svg'}}
                />
            </div>
        </div>
    )
}

ProductSalesByArea.defaultProps = {
    data: {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [
            {
                name: 'Area',
                type: 'pie',
                radius: '60%',
                center: ['50%', '50%'],
                data:[
                    {value:335, name:'Area 36'},
                    {value:800, name:'Chinsapo'},
                    {value:234, name:'Area 49 Dubai'},
                    {value:135, name:'Mtandire'},
                    {value:1548, name:'Phetekere'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    }
};

export default ProductSalesByArea