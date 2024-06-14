import {
    NumberField,
    Show,
    TextField,
} from "@refinedev/antd";
import { useOne, useShow } from "@refinedev/core";
import { Typography } from "antd";

const { Title } = Typography;

export const ScenesShow = () => {
    const { queryResult } = useShow({});
    const { data, isLoading } = queryResult;

    const record = data?.data;

    const { data: movieData, isLoading: movieIsLoading } = useOne({
        resource: "movies",
        id: record?.movie_id || "",
        queryOptions: {
            enabled: !!record,
        },
    });

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>{"ID"}</Title>
            <NumberField value={record?.id ?? ""} />
            <Title level={5}>{"Scene Number"}</Title>
            <NumberField value={record?.scene_number} />
            <Title level={5}>{"Description"}</Title>
            <TextField value={record?.description} />
            <Title level={5}>{"Duration"}</Title>
            <NumberField value={record?.duration} />
            <Title level={5}>{"Presupuesto"}</Title>
            <NumberField value={record?.presupuesto} />
            <Title level={5}>{"Movie"}</Title>
            <TextField
                value={
                    movieIsLoading ? <>Loading...</> : <>{movieData?.data?.title}</>
                }
            />
        </Show>
    );
};
