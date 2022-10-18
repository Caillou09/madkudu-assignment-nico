import React from 'react';
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { useOutletContext } from 'react-router';
import { Skeleton } from 'antd';

ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController
);

type DataType = {
    name: string,
    continent: string,
    weight: number,
    height: number,
    horns: string,
    picture: string
}

export const ChartComp: React.FC = () => {

    const { data, isLoading } = useOutletContext<{ data: [DataType], isLoading: boolean }>();

    const labels = [...data];
    
    //Small function to calculate COMPLETLY approximativly the speed capacity of antelope
    function getSpeed(height:number, weight:number):number {
        let speed = (height*100/65) - (weight*65/900);
        if (speed < 0) speed = 0;
        return speed;
    }

    const chartData = {
        labels: labels.map((el) => el.name),
        datasets: [
            {
                type: 'line' as const,
                label: 'Height',
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 2,
                fill: false,
                yAxisID: 'y',
                data: labels.map((el) => el.height),
            },
            {
                type: 'bar' as const,
                label: 'Weight',
                backgroundColor: '#4b9fefff',
                data: labels.map((el) => el.weight),
                borderColor: 'white',
                yAxisID: 'y1',
                borderWidth: 2,
            },
            {
                type: 'line' as const,
                label: 'Speed Capacity',
                borderColor: '#efc932',
                data: labels.map((el) => getSpeed(el.height, el.weight)),
                fill: true,
                borderWidth: 2,
            }
        ]
    };

    const options:Object = {
        scales: {
            y: {
                type: 'linear',
                display: true,
                position: 'left',
                title: {
                    display: true,
                    text: 'Height (cm)'
                }
            },
            y1: {
                type: 'linear',
                display: true,
                position: 'right',
                grid: {
                    drawOnChartArea: false,
                },
                title: {
                    display: true,
                    text: 'Weight (kg)'
                }
            }
        }
    }

    if (isLoading && !data) {
        return <Skeleton active />;
    }

    return (
        <div className={'w-4/6'} >
            <Chart type='bar' data={chartData} options={options} />
        </div >
    );
}
