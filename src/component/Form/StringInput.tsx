import { Form, Input } from "antd";

export const StringInput = (props: { keyArr: string[]; value: Record<string, any>; optional: boolean }) => {
        const paramKey = `params${props.keyArr.map((v) => `[${v}]`).join("")}`;
        const optional  =  props.optional || ((props.value?.optional as undefined|boolean) ?? true)

        return (
                <Form.Item
                        key={paramKey}
                        label={paramKey}
                        name={paramKey}
                        rules={[{ required: optional}]}
                >
                        <Input />
                </Form.Item>
        );
};
