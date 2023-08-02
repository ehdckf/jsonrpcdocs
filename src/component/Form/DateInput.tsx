import { DatePicker, Form } from "antd";

export const DateInput = (props: { keyArr: string[]; value: Record<string, any>; optional?: boolean }) => {
        console.log("dateOptional");
        console.log("dateOptional");
        console.log("dateOptional");
        console.log(props.value.optional);
        console.log(props.optional);
        console.log(props.value.optional ?? props.optional ?? false);
        const paramKey = `params${props.keyArr.map((v) => `[${v}]`).join("")}`;
        return (
                <Form.Item
                        key={paramKey}
                        label={paramKey}
                        name={paramKey}
                        rules={[{ required: props.value.optional ?? props.optional ?? false }]}
                >
                        <DatePicker />
                </Form.Item>
        );
};
