import { Edit, useForm } from "@refinedev/antd";
import { Form, Input, InputNumber } from "antd";

export const MoviesEdit = () => {
    const { formProps, saveButtonProps, queryResult, formLoading } = useForm({});

    const movieData = queryResult?.data?.data;

    return (
        <Edit saveButtonProps={saveButtonProps} isLoading={formLoading}>
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label={"Title"}
                    name="title"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                    initialValue={movieData?.title}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={"Genre"}
                    name="genre"
                    initialValue={movieData?.genre}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={"Duration"}
                    name="duration"
                    initialValue={movieData?.duration}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item
                    label={"Director"}
                    name="director"
                    initialValue={movieData?.director}
                >
                    <Input />
                </Form.Item>
            </Form>
        </Edit>
    );
};
