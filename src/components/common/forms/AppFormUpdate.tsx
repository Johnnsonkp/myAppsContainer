import {Button, Form, Input, Select, Spin, Upload} from 'antd';
import { CheckOutlined, LoadingOutlined, UploadOutlined } from '@ant-design/icons';
import { FetchResponse, FetchedJSONDataStructure } from '../../../App.modules';
import React, {useEffect, useState} from 'react';
import { addNewApp, updateApp } from '../../../services/appServices';

import { FormProps } from "./Form.modules"
import { props } from './ImageUpload';
import { styles } from "./Forms.styles"

export const UpdateAppForm: React.FC<FormProps> = (props) => {
    const [form] = Form.useForm<any>();
    const appsArray = props.apps
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
    const [timeoutTimer, timeoutTimerComplete] = useState<boolean>(false)
    
    const [formData, setFormData] = useState<FetchedJSONDataStructure>()

    const normFile = (e: any) => {
        console.log('Upload event:', e);
        console.log('Upload event:', e.file.type);
        console.log('Upload event:', e.file.name);

        return e.file.name || props.image
    };
    
    
    const FormComp = () => {
        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        }
        const onSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
            setFormData({
                id: props.id,
                title: form.getFieldValue('title'),
                group: form.getFieldValue('groups'),
                url: form.getFieldValue('url'),
                image: form.getFieldValue('image')
            })
        }

        useEffect( () => {
            if(formData?.id){
                updateApp(formData).then(() => {
                    setTimeout(() => {
                        timeoutTimerComplete(true)
                    }, 1800)
                    setTimeout(() => {
                        timeoutTimerComplete(false)
                        window.location.reload()
                    }, 2200)
                })
            }
        }, [onSubmit])
        
        return (
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 16 }}
                layout="horizontal"
                form={form}
                onFinish={(event) => onSubmit(event)} 
            >
                <Form.Item 
                    label="Title"
                    name="title" 
                    initialValue={props.title}
                >
                    <Input 
                        placeholder="App name"
                        onChange={(event) => handleChange(event)}
                    /> 
                </Form.Item>

                <Form.Item 
                    label="Group"
                    name="groups"
                    initialValue={props.group}
                >
                    <Select
                        placeholder="Add app to group"
                    >
                        <Select.Option value="All">All</Select.Option>
                        <Select.Option value="Productivity">Productivity</Select.Option>
                        <Select.Option value="Other">Other</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="url"
                    label="URL"
                    rules={[{ required: true }, { type: 'url', warningOnly: true }, { type: 'string', min: 6 }]}
                    initialValue={props.url}
                >
                    <Input placeholder="App URL" />
                </Form.Item>

                <Form.Item
                    name="image"
                    label="Image"
                    // valuePropName="fileList"
                    getValueFromEvent={normFile}
                    // rules={[{ required: true }, { type: 'url', warningOnly: true }, { type: 'string', min: 6 }]}
                >
                    <Upload 
                        // name="logo" 
                        // action={`src/images/`} 
                        // listType="picture"
                        // listType="picture"
                        // {...props}
                    >
                        <Button icon={<UploadOutlined />}>Click to upload</Button>
                    </Upload>
                </Form.Item>

                <Form.Item wrapperCol={{ span: 12, offset: 4 }}>
                    <Button 
                        type="primary" 
                        htmlType="submit"
                        style={{width: '200px'}}
                    >
                    {formData === undefined ? 'Submit' : !timeoutTimer? <Spin indicator={antIcon} style={{color: '#fff'}}/> : <CheckOutlined />}
                    </Button>
                </Form.Item>
            </Form>
        )
    }

    return (
        <div style={props.updateFormToggle? styles.display : styles.hide }>
            <div style={props.updateFormToggle? styles.overlay : styles.hide }></div>
            <h2 style={styles.title}>Update app</h2>
            <FormComp />
        </div>
    )
}