import { Badge, Collapse, Typography, Tabs, Descriptions, Divider, TabsProps, CollapseProps } from "antd";
import { JsonRequest } from "./JsonRequest";
import { FormDataReqeust } from "./Form/FormData";
import { ParamsTree } from "./Tree/ParamsTree";

type ItemProps = {
        key: number;
        name: string;
        tag: string;
        description: string;
        shape: Record<string, any>;
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

export const Item = (props: ItemProps) => {
        const tabItemRender = (props: ItemProps): TabsProps["items"] => {
                const items: TabsProps["items"] = [
                        {
                                key: "1",
                                label: "params",
                                // children: <ParamsTree {...props} />,
                                children: <></>,
                        },
                        {
                                key: "5",
                                label: "params222",
                                children: <>{paramsItemRender(props.shape)}</>,
                        },
                        {
                                key: "2",
                                label: "json",
                                children: (
                                        <div style={{ width: "100%" }}>
                                                <JsonRequest {...props} />
                                        </div>
                                ),
                        },
                        {
                                key: "3",
                                label: "formdata",
                                children: (
                                        <div>
                                                <FormDataReqeust {...props} />
                                        </div>
                                ),
                        },
                        {
                                key: "4",
                                label: "example",
                                children: <></>,
                        },
                ];

                return items;
        };

        const collapse = (props: ItemProps): CollapseProps["items"] => {
                const items: CollapseProps["items"] = [
                        {
                                key: 1,
                                label: (
                                        <div>
                                                <strong style={{ paddingRight: "10px" }}>{props.name}</strong>
                                                <span>{props.description}</span>
                                        </div>
                                ),
                                children: <Tabs items={tabItemRender(props)} defaultActiveKey="3"></Tabs>,
                        },
                ];
                return items;
        };

        return (
                <>
                        <Collapse items={collapse(props)} key={Math.random()} />
                </>
        );
};
