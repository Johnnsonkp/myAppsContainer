import {Button, Form, Input, Select, Spin, Upload} from 'antd';
import { CheckOutlined, LoadingOutlined, UploadOutlined } from '@ant-design/icons';
import { FetchResponse, FetchedJSONDataStructure, ImageDataStructure } from '../../../App.modules';
import React, {useEffect, useState} from 'react';

import { FileUploaderComponent } from './FileUploader';
import { FormProps } from "./Form.modules"
import { addNewApp } from '../../../services/appServices';
import { props } from './ImageUpload';
import { styles } from "./Forms.styles"

export const AppForm: React.FC<FormProps> = (props) => {
    const [form] = Form.useForm<any>();
    const appsArray = props.apps
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
    const [timeoutTimer, timeoutTimerComplete] = useState<boolean>(false)
    const [refreshing, setRefreshing] = useState<boolean>(false)
    const [selectedFile, setSelectedFile] = useState<any>(null);
    const [formData, setFormData] = useState<FetchedJSONDataStructure>()

    const normFile = (e: any) => {
        return e.fileList
    };
    const handleFileInput = (e: any, onFileSelect: any) => {
        onFileSelect(e.target.files[0])
    }
    
    const FormComp = () => {
        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        }
        
        const onSubmit = async (event: React.ChangeEvent<HTMLInputElement>) => {
            const newImageData = new FormData()
            const imageInput = form.getFieldValue('image')
            newImageData.append('file', imageInput[0].originFileObj)
            newImageData.append('upload_preset', 'my-uploads')

            const data = await fetch('https://api.cloudinary.com/v1_1/dcssugmik/image/upload', {
                method: 'POST',
                body: newImageData,
            }).then(r => r.json())
            .then((response) => {
                setFormData({
                    id: appsArray && appsArray.length + 1 || 1,
                    title: form.getFieldValue('title'),
                    group: form.getFieldValue('groups'),
                    url: form.getFieldValue('url'),
                    image: response.url
                })
            })
            setRefreshing(true)
        }

        useEffect( () => {
            if(refreshing){
                addNewApp(formData).then(() => {
                    setRefreshing(false)
                    setTimeout(() => {
                        timeoutTimerComplete(true)
                    }, 1800)
                    setTimeout(() => {
                        window.location.reload()
                    }, 2200)
                })
                return 
            }
        }, [refreshing])
        
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
                >
                    <Input 
                        placeholder="App name"
                        onChange={(event) => handleChange(event)}
                    /> 
                </Form.Item>

                <Form.Item 
                    label="Group"
                    name="groups"
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
                >
                    <Input placeholder="App URL" />
                </Form.Item>

                <Form.Item
                    name="image"
                    label="Image"
                    getValueFromEvent={normFile}
                >
                    <Upload 
                        name="logo" 
                        // action={(e) => e.preventDefault()} 
                        listType="picture"
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
        <div style={props.formToggle? styles.display : styles.hide }>
            <div style={props.formToggle? styles.overlay : styles.hide }></div>
            <h2 style={styles.title}>Add new app</h2>
            <hr style={{marginBottom: '30px', color: 'lightgrey'}}></hr>
            <FormComp />
        </div>
    )
}