import { Form, Select } from "antd";

export const EnumInput = (props: { keyArr: string[]; value: Record<string, any>; optional?: boolean }) => {
        const paramKey = `params${props.keyArr.map((v) => `[${v}]`).join("")}`;
        const optional  =  props.optional || ((props.value?.optional as undefined|boolean) ?? true)
        const options = props.value.values.map((v: string) => {
                return { value: v, label: String(v) };
        });
        return (
                <Form.Item
                        key={paramKey}
                        label={paramKey}
                        name={paramKey}
                        rules={[{ required: optional }]}
                >
                        <Select
                                showSearch
                                placeholder="Search to Select"
                                optionFilterProp="children"
                                filterOption={(input, option) => ((option?.label as string) ?? "").includes(input)}
                                filterSort={(optionA, optionB) =>
                                        ((optionA?.label as string) ?? "")
                                                .toLowerCase()
                                                .localeCompare((optionB?.label as string) ?? "")
                                }
                                options={options}
                        />
                </Form.Item>
        );
};
