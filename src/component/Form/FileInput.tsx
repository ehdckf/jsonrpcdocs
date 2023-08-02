import { Form, Modal } from "antd";
import { UploadFile, UploadProps, Upload } from "antd";
import { RcFile } from "antd/es/upload";

import React from "react";
import { PlusOutlined } from "@ant-design/icons";
const getBase64 = (file: RcFile): Promise<string> =>
        new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result as string);
                reader.onerror = (error) => reject(error);
        });

export const FileInput = (props: { keyArr: string[]; value: Record<string, any>; optional?: boolean }) => {
        const { keyArr, value } = props;
        const optional  =  props.optional || ((props.value?.optional as undefined|boolean) ?? true)
        
        const maxLength = value?.maxLength?.value ?? Infinity;
        const [previewOpen, setPreviewOpen] = React.useState(false);
        const [previewImage, setPreviewImage] = React.useState("");
        const [previewTitle, setPreviewTitle] = React.useState("");
        const [fileList, setFileList] = React.useState<UploadFile[]>([]);
        const paramKey = `params${keyArr.map((v) => `[${v}]`).join("")}`;
        const handleCancel = () => setPreviewOpen(false);

        const handlePreview = async (file: UploadFile) => {
                if (!file.url && !file.preview) {
                        file.preview = await getBase64(file.originFileObj as RcFile);
                }

                setPreviewImage(file.url || (file.preview as string));
                setPreviewOpen(true);
                setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf("/") + 1));
        };

        const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) => setFileList(newFileList);

        const uploadButton = (
                <div>
                        <PlusOutlined />
                        <div style={{ marginTop: 8 }}>Upload</div>
                </div>
        );

        return (
                <div>
                        <Form.Item
                                key={paramKey}
                                label={paramKey}
                                name={paramKey}
                                rules={[{ required: optional }]}
                        >
                                <Upload
                                        // action="https://www.mocky.io/v2/5cc8019d300000980a055e76" 업로드 URL
                                        listType="picture-card"
                                        fileList={fileList}
                                        onPreview={handlePreview}
                                        onChange={handleChange}
                                        data={value}
                                >
                                        {fileList.length >= maxLength ? null : uploadButton}
                                </Upload>
                        </Form.Item>
                        <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                                <img alt="example" style={{ width: "100%" }} src={previewImage} />
                        </Modal>
                </div>
        );
};
