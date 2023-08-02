import { DateInput } from "./DateInput";
import { EnumInput } from "./EnumInput";
import { FileInput } from "./FileInput";
import { NumberInput } from "./NumberInput";
import { StringInput } from "./StringInput";

export const Params = (props: { keyArr: string[]; value: Record<string, any>; optional?: boolean }) => {
        const { keyArr, optional } = props;
        return Object.entries(props.value).map((v, i) => {
                const [key, value] = v;

                switch (value.type) {
                        case "string":
                                return (
                                        <StringInput
                                                key={Math.random()}
                                                keyArr={[...keyArr, key]}
                                                value={value}
                                                optional={optional}
                                        />
                                );
                        case "number":
                                return (
                                        <NumberInput
                                                key={Math.random()}
                                                keyArr={[...keyArr, key]}
                                                value={value}
                                                optional={optional}
                                        />
                                );

                        case "object":
                                return (
                                        <Params
                                                key={Math.random()}
                                                keyArr={[...keyArr, key]}
                                                value={value.schema}
                                                optional={value.optional}
                                        />
                                );

                        case "array":
                                if (value.item.type === "file") {
                                        return (
                                                <FileInput
                                                        key={Math.random()}
                                                        keyArr={[...keyArr, key]}
                                                        value={value}
                                                        optional={optional}
                                                />
                                        );
                                }
                                // return <div key={"arr" + i}>{JSON.stringify(value)}</div>;

                                // if (value.item.type) {
                                //         result.push(
                                //                 renderFileUpload([...prefix, key], value, optional ?? value.optional),
                                //         );
                                // }

                                // switch (value.item.type) {
                                //         case "string":
                                //                 item = renderInput([...prefix, key], value, optional);
                                //                 break;
                                //         case "number":
                                //                 item = renderInputNumber([...prefix, key], value, optional);
                                //                 break;
                                //         case "object":
                                //                 item = renderObject([...prefix, key], value.schema, optional);
                                //                 break;
                                //         case "enum":
                                //                 item = renderEnum([...prefix, key], value, optional);
                                //                 break;
                                // }
                                // result.push(renderFileUpload([...prefix, key], item, optional ?? value.optional));
                                break;
                        case "enum":
                                return (
                                        <EnumInput
                                                key={Math.random()}
                                                keyArr={[...keyArr, key]}
                                                value={value}
                                                optional={optional}
                                        />
                                );
                        case "date":
                                return (
                                        <DateInput
                                                key={Math.random()}
                                                keyArr={[...keyArr, key]}
                                                value={value}
                                                optional={optional}
                                        />
                                );
                        // result.push(renderEnum([...prefix, key], value, optional));
                }
        });
};
