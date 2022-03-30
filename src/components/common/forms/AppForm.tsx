import {Button, Form, Input, Select, Upload} from 'antd';
import React, {useEffect, useState} from 'react';

import { FetchResponse } from '../../../App.modules';
import { FormProps } from "./Form.modules"
import { UploadOutlined } from '@ant-design/icons';
import { addNewApp } from '../../../services/appServices';
import { styles } from "./Forms.styles"

export const AppForm: React.FC<FormProps> = (props) => {
    const [appData, setAppData] = useState<FetchResponse['results']>()
    const [title, setTitle] = useState<string>()
    const [image, setImage] = useState<string>()
    const [url, setAppUrl] = useState<string>()


    const normFile = (e: any) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
          return e;
        }
        return e && e.fileList;
    };
    
    const FormComp = () => {
        const onChange = (e: string) => {
            console.log(e)
        }
        const onSubmit = () => {
            return(addNewApp())
        }
        return (
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 16 }}
                layout="horizontal"
                // initialValues={{ size: componentSize }}
                // onValuesChange={onFormLayoutChange}
                // size={componentSize as SizeType}
            >
                <Form.Item label="Title">
                    <Input />
                </Form.Item>

                {/* <Form.Item label="Group">
                    <Select>
                        <Select.Option value="group">All</Select.Option>
                    </Select>
                </Form.Item> */}

                {/* <Form.Item
                    name="url"
                    label="URL"
                    rules={[{ required: true }, { type: 'url', warningOnly: true }, { type: 'string', min: 6 }]}
                >
                    <Input placeholder="App URL / Link" />
                </Form.Item> */}

                <Form.Item
                    name="upload"
                    label="Upload"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                >
                    <Upload name="logo" action="/upload.do" listType="picture">
                        <Button icon={<UploadOutlined />}>Click to upload</Button>
                    </Upload>
                </Form.Item>

                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    <Button 
                        type="primary" 
                        htmlType="submit"
                        onSubmit={() => onSubmit()}
                    >
                    Submit
                    </Button>
                </Form.Item>
            </Form>
        )
    }

    return (
        <div style={props.formToggle? styles.display : styles.hide }>
            <div style={props.formToggle? styles.overlay : styles.hide }></div>
            <h2 style={styles.title}>Add a new app</h2>
            <FormComp />
        </div>
    )
}