import { Button, Dropdown, Menu, Space, Tooltip, message } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

import React from 'react'

export const MenuDropDown = (props: {title: string}) => {
    function handleButtonClick(e: React.MouseEventHandler<HTMLButtonElement>| void) {
        message.info('Click on left button.');
        console.log('click left button', e);
    }
      
    function handleMenuClick(e: React.MouseEventHandler<HTMLButtonElement> | void) {
        message.info('Click on menu item.');
        console.log('click', e);
    }
      
    const menu: React.ReactElement<any, string> = (
        <Menu onClick={() => handleMenuClick}>
            <Menu.Item key="1" icon={<UserOutlined />}>
            1st menu item
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
            2nd menu item
            </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}>
            3rd menu item
            </Menu.Item>
        </Menu>
    );
      
    return(
        <Space wrap>
            <Dropdown overlay={menu}>
                <Button style={{backgroundColor: 'transparent', border: 'none'}}>
                {props.title} <DownOutlined />
                </Button>
            </Dropdown>
        </Space>
    );
}
