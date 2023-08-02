import React from "react";
import { Button, Space } from "antd";
import { PoweroffOutlined } from "@ant-design/icons";
import dynamic from "next/dynamic";
const MonacoEditor = dynamic(import("react-monaco-editor"), { ssr: false });
type ItemProps = {
        key: number;
        name: string;
        tag: string;
        description: string;
        shape: Record<string, any>;
};

const getObjectFromSchema = (obj: Record<string, any>) => {
        const result: Record<string, any> = {};
        Object.entries(obj).forEach((v) => {
                const [key, value] = v;
                switch (value.type) {
                        case "string":
                                result[key] = value.type;
                                break;
                        case "number":
                                result[key] = 0;
                                break;
                        case "date":
                                result[key] = "yyyy-mm-dd";
                                break;
                        case "array":
                                if (value.item.type == "file") result[key] = "formdata";
                                else if (value.item.type == "object") {
                                        result[key] = [getObjectFromSchema(value.item.schema)];
                                } else result[key] = [value.itemType];
                                break;
                        case "object":
                                result[key] = getObjectFromSchema(value.schema);
                                break;
                        case "enum":
                                result[key] = value.values.map((v: string) => ` ${v} `).join("|");
                                break;
                }
        });
        return result;
};

const jsonrpcRequest = (props: ItemProps) => {
        const obj: {
                jsonrpc: string;
                id: number;
                method: string;
                params: Record<string, any>;
        } = {
                jsonrpc: "2.0",
                id: 0,
                method: props.name,
                params: getObjectFromSchema(props.shape),
        };

        return JSON.stringify(obj, null, 2);
};
export const JsonRequest = (props: ItemProps) => {
        const [postBody, setPostBody] = React.useState(jsonrpcRequest(props));
        const [respBody, setRespBody] = React.useState("");
        const [loadings, setLoadings] = React.useState<boolean>(false);

        async function call() {
                try {
                        setLoadings(true);
                        const resp = await fetch("http://192.168.57.128:8080/api", {
                                method: "post",
                                headers: {
                                        Accept: "application/json",
                                        "Content-Type": "application/json",
                                },
                                body: postBody,
                        });
                        const data = await resp.json();
                        console.log(data);
                        setRespBody(JSON.stringify(data, null, 2));
                } catch (err) {
                        console.log(err);
                        alert(err);
                } finally {
                        setLoadings(false);
                }
        }

        return (
                <Space
                        style={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-around",
                        }}
                >
                        <MonacoEditor
                                editorDidMount={() => {
                                        // @ts-ignore
                                        window.MonacoEnvironment.getWorkerUrl = (_moduleId: string, label: string) => {
                                                if (label === "json") return "_next/static/json.worker.js";
                                                if (label === "css") return "_next/static/css.worker.js";
                                                if (label === "html") return "_next/static/html.worker.js";
                                                if (label === "typescript" || label === "javascript")
                                                        return "_next/static/ts.worker.js";
                                                return "_next/static/editor.worker.js";
                                        };
                                }}
                                width="500"
                                height="400"
                                language="json"
                                theme="vs-dark"
                                value={postBody}
                                options={{
                                        minimap: {
                                                enabled: false,
                                        },
                                }}
                                onChange={setPostBody}
                        />
                        <Button type="primary" icon={<PoweroffOutlined />} loading={loadings} onClick={call}>
                                Click me!
                        </Button>
                        <MonacoEditor
                                editorDidMount={() => {
                                        // @ts-ignore
                                        window.MonacoEnvironment.getWorkerUrl = (_moduleId: string, label: string) => {
                                                if (label === "json") return "_next/static/json.worker.js";
                                                if (label === "css") return "_next/static/css.worker.js";
                                                if (label === "html") return "_next/static/html.worker.js";
                                                if (label === "typescript" || label === "javascript")
                                                        return "_next/static/ts.worker.js";
                                                return "_next/static/editor.worker.js";
                                        };
                                }}
                                width="500"
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
        );
};
