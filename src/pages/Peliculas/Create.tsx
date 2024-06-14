import { Create, useForm } from "@refinedev/antd";
import { Form, Input, InputNumber } from "antd";

export const MoviesCreate = () => {
    const { formProps, saveButtonProps } = useForm({});

    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label={"Title"}
                    name="title"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={"Genre"}
                    name="genre"
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
                    label={"Director"}
                    name="director"
                >
                    <Input />
                </Form.Item>
            </Form>
        </Create>
    );
};
