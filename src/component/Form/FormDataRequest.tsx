import { Form, Input, InputNumber, Button, Space } from "antd";
import React from "react";
import { Params } from "@/component/Form/Params";
import dynamic from "next/dynamic";
import axios from "axios";
const MonacoEditor = dynamic(import("react-monaco-editor"), { ssr: false });
type ItemProps = {
        key: number;
        name: string;
        tag: string;
        description: string;
        shape: Record<string, any>;
};
export const FormDataReqeust = (props: ItemProps) => {
        const onFinish = async (values: any) => {
                try {
                        console.log("formdata:", values);
                        const formdata = new FormData();
                        Object.entries(values).forEach((v) => {
                                const [key, value] = v as [string, any];
                                if (typeof value === "object") {
                                        value.fileList.forEach((file: any) => {
                                                formdata.append(key, file.originFileObj);
                                        });
                                }
                                formdata.append(key, value as string | Blob);
                        });
                        console.log("formdata key");
                        for (let key of formdata.keys()) {
                                console.log(key);
                        }

                        // FormData의 value 확인
                        console.log("formdata value");
                        for (let value of (formdata as any).values()) {
                                console.log(value);
                        }

                        const resp = await axios.post("http://192.168.57.128:3000/api", formdata, {
                                headers: {
                                        "Content-Type": "multipart/form-data",
                                },
                        });
                        setRespBody(JSON.stringify(resp.data, null, 2));
                        console.log("🙂");
                } catch (err) {
                        console.log("😣");
                        setRespBody(JSON.stringify(err, null, 2));
                } finally {
                }
        };

        const onFinishFailed = (errorInfo: any) => {
                console.log("Failed:", errorInfo);
        };

        const [respBody, setRespBody] = React.useState("");
        const [id, setId] = React.useState(0);

        const renderFormItem = (props: ItemProps) => {
                const result = [
                        <Form.Item
                                key={"jsonrpc"}
                                label="jsonrpc"
                                name="jsonrpc"
                                rules={[{ required: true }]}
                                initialValue={"2.0"}
                        >
                                <Input readOnly={true} />
                        </Form.Item>,
                        <Form.Item initialValue={0} key={"id"} label="id" name="id" rules={[{ required: true }]}>
                                <InputNumber value={id} onChange={() => setId} />
                        </Form.Item>,
                        <Form.Item
                                key={"method"}
                                label="method"
                                name="method"
                                initialValue={props.name}
                                rules={[{ required: true }]}
                        >
                                <Input readOnly={true} />
                        </Form.Item>,
                        <Params key={props.name + ": parmas"} keyArr={[]} value={props.shape} optional={true} />,
                ];
                return result;
        };

        return (
                <Space
                        style={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                        }}
                >
                        <Form
                                name="basic"
                                style={{
                                        width: "60vw",
                                        display: "flex",
                                        flexDirection: "column",
                                        marginRight: "5vw",
                                }}
                                labelCol={{ span: 8 }}
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                        >
                                {renderFormItem(props)}
                                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                        <Button type="primary" htmlType="submit">
                                                Run
                                        </Button>
                                </Form.Item>
                        </Form>
                        <Space
                                style={{
                                        width: "30vw",
                                        display: "flex",
                                        flexDirection: "column",
                                }}
                        >
                                Response
                                <MonacoEditor
                                        editorDidMount={() => {
                                                // @ts-ignore
                                                window.MonacoEnvironment.getWorkerUrl = (
                                                        _moduleId: string,
                                                        label: string,
                                                ) => {
                                                        if (label === "json") return "_next/static/json.worker.js";
                                                        if (label === "css") return "_next/static/css.worker.js";
                                                        if (label === "html") return "_next/static/html.worker.js";
                                                        if (label === "typescript" || label === "javascript")
                                                                return "_next/static/ts.worker.js";
                                                        return "_next/static/editor.worker.js";
                                                };
                                        }}
                                        width="600"
                                        height="400"
                                        language="json"
                                        theme="vs-dark"
                                        value={respBody}
                                        options={{
                                                readOnly: true,
                                                minimap: {
                                                        enabled: false,
                                                },
                                        }}
                                />
                        </Space>
                </Space>
        );
};
