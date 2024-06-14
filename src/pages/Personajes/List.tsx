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

interface Character {
    id: number;
    nameCharacter: string;
    age: number;
    actor: string;
    cost: number;
}

export const CharactersList = () => {
    const { tableProps } = useTable({
        syncWithLocation: true,
    });

    const [data, setData] = useState<Character[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        axios.get('http://localhost:8081/personajes')
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("There was an error fetching the characters!", error);
                setLoading(false);
            });
    }, []);

    return (
        <List>
            <Table {...tableProps} dataSource={data} loading={loading} rowKey="id">
                <Table.Column dataIndex="id" title={"ID"} />
                <Table.Column dataIndex="nameCharacter" title={"Name"} />
                <Table.Column dataIndex="age" title={"Age"} />
                <Table.Column dataIndex="actor" title={"Actor"} />
                <Table.Column dataIndex="cost" title={"Cost"} />
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
