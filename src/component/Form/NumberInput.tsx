import { Form, InputNumber } from "antd";

export const NumberInput = (props: { keyArr: string[]; value: Record<string, any>; optional?: boolean }) => {
        const paramKey = `params${props.keyArr.map((v) => `[${v}]`).join("")}`;
        return (
                <Form.Item
                        key={paramKey}
                        label={paramKey}
                        name={paramKey}
                        rules={[{ required: props.value.optional ?? props.optional ?? false }]}
                >
                        <InputNumber />
                </Form.Item>
        );
};
