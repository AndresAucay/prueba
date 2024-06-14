import { Create, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, InputNumber, Select } from "antd";

export const CharactersCreate = () => {
    const { formProps, saveButtonProps } = useForm({});

    const { selectProps: sceneSelectProps } = useSelect({
        resource: "scenes",
    });

    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label={"Character Name"}
                    name="nameCharacter"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={"Age"}
                    name="age"
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item
                    label={"Actor"}
                    name="actor"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={"Cost"}
                    name="cost"
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
                >
                    <Select {...sceneSelectProps} />
                </Form.Item>
            </Form>
        </Create>
    );
};
