import { Create, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, InputNumber, Select } from "antd";

export const ScenesCreate = () => {
    const { formProps, saveButtonProps } = useForm({});

    const { selectProps: movieSelectProps } = useSelect({
        resource: "movies",
    });

    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label={"Scene Number"}
                    name="sceneNumber"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item
                    label={"Description"}
                    name="description"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={"Duration"}
                    name="duration"
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item
                    label={"Presupuesto"}
                    name="presupuesto"
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
                >
                    <Select {...movieSelectProps} />
                </Form.Item>
            </Form>
        </Create>
    );
};
