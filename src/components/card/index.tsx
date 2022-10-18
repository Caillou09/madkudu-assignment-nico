import React from 'react';
import { Card, Progress } from 'antd';

const { Meta } = Card;

type CardCompProps = {
    name: string,
    continent: string,
    weight: number,
    height: number,
    horns: string,
    picture: string
}

type DataProp = {
    data: CardCompProps
}

export const CardComp: React.FC<DataProp> = ({ data }) => {

    return (
        <Card className= {'w-64'}
            cover={
                <img
                    className={'object-contain max-h-48'}
                    alt={data.name}
                    src={data.picture}
                />
            }>
            <Meta
                title={data.name}
                className={'pb-8'}
                description={'From ' + data.continent}
            />
            <div className={'flex flex-row '}>
                <p className={'font-bold'} >Weight </p>
                <Progress percent={data.weight*100/900} showInfo={false} className={'pl-2'}/>
            </div>
            <div className={'flex flex-row'}>
                <p className={'font-bold'}>Height </p>
                <Progress percent={data.height*100/65} showInfo={false} className={'pl-2'}/>
            </div>
            <div>
                <p className={'font-bold'}>Horn <span className={'font-normal'}>{data.horns}</span></p>
            </div>
        </Card>
    );
}