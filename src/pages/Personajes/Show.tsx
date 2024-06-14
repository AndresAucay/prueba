import {
    NumberField,
    Show,
    TextField,
} from "@refinedev/antd";
import { useOne, useShow } from "@refinedev/core";
import { Typography } from "antd";

const { Title } = Typography;

export const CharactersShow = () => {
    const { queryResult } = useShow({});
    const { data, isLoading } = queryResult;

    const record = data?.data;

    const { data: sceneData, isLoading: sceneIsLoading } = useOne({
        resource: "scenes",
        id: record?.scene_id || "",
        queryOptions: {
            enabled: !!record,
        },
    });

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>{"ID"}</Title>
            <NumberField value={record?.id ?? ""} />
            <Title level={5}>{"Character Name"}</Title>
            <TextField value={record?.name_character} />
            <Title level={5}>{"Age"}</Title>
            <NumberField value={record?.age} />
            <Title level={5}>{"Actor"}</Title>
            <TextField value={record?.actor} />
            <Title level={5}>{"Cost"}</Title>
            <NumberField value={record?.cost} />
            <Title level={5}>{"Scene"}</Title>
            <TextField
                value={
                    sceneIsLoading ? <>Loading...</> : <>{sceneData?.data?.description}</>
                }
            />
        </Show>
    );
};
