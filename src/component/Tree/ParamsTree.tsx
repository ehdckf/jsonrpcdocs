import { Badge, Collapse, Typography, Tabs, Descriptions, TabsProps, CollapseProps, Tree } from "antd";
import { JsonRequest } from "../JsonRequest";
import { FormDataReqeust } from "../Form/FormData";
import type { DataNode } from "antd/es/tree";
import { DownOutlined } from "@ant-design/icons";
type ItemProps = {
        key: number;
        name: string;
        tag: string;
        description: string;
        shape: Record<string, any>;
};

const treeItemRender = (props: any) => {
        const items: DataNode[] = [
                {
                        title: "kkk",
                        key: "0-0-0",
                },
        ];

        return items;
};

const paramsItemRender = (shape: Record<string, any>) => {
        return Object.entries(shape).map((v, ii) => {
                const [name, value] = v;
                const description = Object.entries(value)
                        .filter((v) => v[1])
                        .map((v, i) => {
                                const [key, nestedValue] = v;

                                return (
                                        <Descriptions.Item label={key} key={Math.random()}>
                                                <>{JSON.stringify(nestedValue)}</>
                                        </Descriptions.Item>
                                );
                        });

                return (
                        <Descriptions bordered title={name} column={1} key={Math.random()}>
                                {description}
                        </Descriptions>
                );
        });
};

export const ParamsTree = (props: { value: Record<string, any>; optional?: boolean }) => {
        return (
                <Tree
                        showIcon
                        defaultExpandAll
                        defaultSelectedKeys={["0-0-0"]}
                        switcherIcon={<DownOutlined />}
                        treeData={treeItemRender(null)}
                />
        );
};
