import React from 'react';
import { useOutletContext } from 'react-router-dom';
import type { ColumnsType } from 'antd/es/table';
import { CardComp } from '../card/CardComp';

import { Skeleton, Table, Popover } from 'antd';

type DataType = {
    name: string,
    continent: string,
    weight: number,
    height: number,
    horns: string,
    picture: string
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text, record) =>
            <Popover placement="rightTop" content={<CardComp data={record} />}>
                <a>{text}</a>
            </Popover>
    },
    {
        title: 'Continent',
        dataIndex: 'continent',
        key: 'continent'
    },
    {
        title: 'Weight',
        dataIndex: 'weight',
        key: 'weight',
    },
    {
        title: 'Height',
        dataIndex: 'height',
        key: 'height',
    },
    {
        title: 'Horns',
        dataIndex: 'horns',
        key: 'horns',
    }
];

export const TableComp: React.FC = ({ }) => {

    const { data, isLoading } = useOutletContext<{ data: [DataType], isLoading: boolean }>();

    if (isLoading && !data) {
        return <Skeleton active />;
    }

    return (
        <>
            <Table
                columns={columns}
                dataSource={data || []}
                rowKey="name"
                className={'w-5/6'}
                footer={() => 'Données reçues par Madkudu'}
            />
        </>
    );

}