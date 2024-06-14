import React, { useEffect, useState } from "react";
import {
    DeleteButton,
    EditButton,
    List,
    ShowButton,
    useTable,
} from "@refinedev/antd";
import { BaseRecord } from "@refinedev/core";
import { Space, Table } from "antd";
import axios from "axios";

interface Movie {
    id: number;
    sceneNumber: number;
    description: string;
    duration: number;
    presupuesto: number;
    movieId: number;
}

export const MoviesList = () => {
    const { tableProps } = useTable({
        syncWithLocation: true,
    });

    const [data, setData] = useState<Movie[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        axios.get('http://localhost:8081/peliculas')
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("There was an error fetching the movies!", error);
                setLoading(false);
            });
    }, []);

    return (
        <List>
            <Table {...tableProps} dataSource={data} loading={loading} rowKey="id">
                <Table.Column dataIndex="id" title={"ID"} />
                <Table.Column dataIndex="sceneNumber" title={"Scene Number"} />
                <Table.Column dataIndex="description" title={"Description"} />
                <Table.Column dataIndex="duration" title={"Duration"} />
                <Table.Column dataIndex="presupuesto" title={"Presupuesto"} />
                <Table.Column dataIndex="movieId" title={"Movie ID"} />
                <Table.Column
                    title={"Actions"}
                    dataIndex="actions"
                    render={(_, record: BaseRecord) => (
                        <Space>
                            <EditButton hideText size="small" recordItemId={record.id} />
                            <ShowButton hideText size="small" recordItemId={record.id} />
                            <DeleteButton hideText size="small" recordItemId={record.id} />
                        </Space>
                    )}
                />
            </Table>
        </List>
    );
};
