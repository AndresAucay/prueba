import { Edit, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, InputNumber, Select } from "antd";

export const ScenesEdit = () => {
    const { formProps, saveButtonProps, queryResult, formLoading } = useForm({});

    const sceneData = queryResult?.data?.data;

    const { selectProps: movieSelectProps } = useSelect({
        resource: "movies",
        defaultValue: sceneData?.movie_id,
        queryOptions: {
            enabled: !!sceneData?.movie_id,
        },
    });

    return (
        <Edit saveButtonProps={saveButtonProps} isLoading={formLoading}>
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label={"Scene Number"}
                    name="sceneNumber"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                    initialValue={sceneData?.scene_number}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item
                    label={"Description"}
                    name="description"
                    initialValue={sceneData?.description}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={"Duration"}
                    name="duration"
                    initialValue={sceneData?.duration}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item
                    label={"Presupuesto"}
                    name="presupuesto"
                    initialValue={sceneData?.presupuesto}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item
                    label={"Movie"}
                    name="movieId"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                    initialValue={sceneData?.movie_id}
                >
                    <Select {...movieSelectProps} />
                </Form.Item>
            </Form>
        </Edit>
    );
};
