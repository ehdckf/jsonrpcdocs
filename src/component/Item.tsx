import { Badge, Collapse, Typography } from "antd";



type ItemProps = {
        key:number;
        name: string;
        tag:string;
        description: string;
        shape: Record<string, any>
}

export const Item = (props:ItemProps)=>{
        const header = <>
                <strong>{props.name}</strong>
                <strong>{props.description}</strong>
        </>

        return(
                        <Collapse >
                        <Collapse.Panel key={props.name} header={header}  >
                         {/* {props.description !== null && <Typography.Title level={5}>{props.description}</Typography.Title>} */}
                         <div>
                                {JSON.stringify(props.shape,null,2)}
                         </div>
                        </Collapse.Panel>
                        </Collapse>
        )
}