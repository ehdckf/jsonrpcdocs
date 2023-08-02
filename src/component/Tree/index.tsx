import { Badge, Collapse, Typography, Tabs, Descriptions, TabsProps, CollapseProps, Tree } from "antd";
import { JsonRequest } from "../JsonRequest";
import { FormDataReqeust } from "../Form/FormDataRequest";
import type { DataNode } from "antd/es/tree";
import { DownOutlined } from "@ant-design/icons";
import {StringItem} from './StringItem';
type ItemProps = {
        key: number;
        name: string;
        tag: string;
        description: string;
        shape: Record<string, any>;
};

const renderStringLeaf = (value:Record<string,any>,keyArr:number[])=>{
        const items :DataNode[]= [];
        let index = 0;
        Object.entries(value).forEach(([key,desc],i)=>{
                switch(key){
                        case "description":{
                                if(desc){
                                        items.push({
                                                title: `설명: ${desc}`,
                                                key:[...keyArr,index].join('-'),
                                                isLeaf:true
                                        })
                                }
                        }
                        break;
                        case "check":
                }
                if(desc){

                        
                }
        })

        return items
}


const treeItemRender = (obj: Record<string,Record<string,any>>,keyArr:number[]) => {
        
        const items: DataNode[] = [
             
        ];

        Object.entries(obj).forEach(([key,value],i)=>{
                const title = key;
                let child;
                switch(value.type){
                        case "string":
                                items.push({
                                        title,
                                        key:[...keyArr,i].join('-'),
                                        children:renderStringLeaf(value,[...keyArr,i])
                                })
                               break;
                        // case "number":
                        //         return (
                        //                 <></>
                        //         );

                        // case "object":
                        //         return (
                        //                 <></>
                        //         );

                        // case "array":
                        //         if (value.item.type === "file") {
                                    
                        //         }

                        //         // if (value.item.type) {
                        //         //         result.push(
                        //         //                 renderFileUpload([...prefix, key], value, optional ?? value.optional),
                        //         //         );
                        //         // }

                        //         // switch (value.item.type) {
                        //         //         case "string":
                        //         //                 item = renderInput([...prefix, key], value, optional);
                        //         //                 break;
                        //         //         case "number":
                        //         //                 item = renderInputNumber([...prefix, key], value, optional);
                        //         //                 break;
                        //         //         case "object":
                        //         //                 item = renderObject([...prefix, key], value.schema, optional);
                        //         //                 break;
                        //         //         case "enum":
                        //         //                 item = renderEnum([...prefix, key], value, optional);
                        //         //                 break;
                        //         // }
                        //         // result.push(renderFileUpload([...prefix, key], item, optional ?? value.optional));
                        //         break;
                        // case "enum":
                        //         return (
                        //                 <></>
                        //         );
                        // case "date":
                        //         return (
                        //                 <></>
                        //         );
                }
        })



        return items;
};

// const paramsItemRender = (shape: Record<string, any>) => {
//         return Object.entries(shape).map((v, ii) => {
//                 const [name, value] = v;
//                 const description = Object.entries(value)
//                         .filter((v) => v[1])
//                         .map((v, i) => {
//                                 const [key, nestedValue] = v;

//                                 return (
//                                         <Descriptions.Item label={key} key={Math.random()}>
//                                                 <>{JSON.stringify(nestedValue)}</>
//                                         </Descriptions.Item>
//                                 );
//                         });

//                 return (
//                         <Descriptions bordered title={name} column={1} key={Math.random()}>
//                                 {description}
//                         </Descriptions>
//                 );
//         });
// };

export const ParamsTree = (shape:Record<string, any>) => {
        return (
                <Tree
                        showIcon
                        defaultExpandAll
                        defaultSelectedKeys={["0-0-0"]}
                        switcherIcon={<DownOutlined />}
                        treeData={treeItemRender(shape.shape,[0])}
                />
        );
};
