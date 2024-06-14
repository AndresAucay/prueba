import { Edit, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, InputNumber, Select } from "antd";

export const CharactersEdit = () => {
    const { formProps, saveButtonProps, queryResult, formLoading } = useForm({});

    const characterData = queryResult?.data?.data;

    const { selectProps: sceneSelectProps } = useSelect({
        resource: "scenes",
        defaultValue: characterData?.scene_id,
        queryOptions: {
            enabled: !!characterData?.scene_id,
        },
    });

    return (
        <Edit saveButtonProps={saveButtonProps} isLoading={formLoading}>
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label={"Character Name"}
                    name="nameCharacter"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                    initialValue={characterData?.name_character}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={"Age"}
                    name="age"
                    initialValue={characterData?.age}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item
                    label={"Actor"}
                    name="actor"
                    initialValue={characterData?.actor}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={"Cost"}
                    name="cost"
                    initialValue={characterData?.cost}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item
                    label={"Scene"}
                    name="sceneId"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                    initialValue={characterData?.scene_id}
                >
                    <Select {...sceneSelectProps} />
                </Form.Item>
            </Form>
        </Edit>
    );
};
