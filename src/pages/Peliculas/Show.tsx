import {
    DateField,
    NumberField,
    Show,
    TextField,
} from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Typography } from "antd";

const { Title } = Typography;

export const MoviesShow = () => {
    const { queryResult } = useShow({});
    const { data, isLoading } = queryResult;

    const record = data?.data;

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>{"ID"}</Title>
            <NumberField value={record?.id ?? ""} />
            <Title level={5}>{"Title"}</Title>
            <TextField value={record?.title} />
            <Title level={5}>{"Genre"}</Title>
            <TextField value={record?.genre} />
            <Title level={5}>{"Duration"}</Title>
            <NumberField value={record?.duration} />
            <Title level={5}>{"Director"}</Title>
            <TextField value={record?.director} />
        </Show>
    );
};
