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
    console.log(labels);

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

    return (
        <div className={'w-5/6'} >
            <Chart type='bar' data={chartData} options={options} />
        </div >
    );
}
