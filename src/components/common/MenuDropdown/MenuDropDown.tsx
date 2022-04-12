import { Button, Dropdown, Menu, Space, Tooltip, message } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

import { MenuDropDownProps } from './MenuDropDown.modules';
import React from 'react'

export const MenuDropDown: React.FC<MenuDropDownProps> = (props) => {
    
    function handleButtonClick(e: React.MouseEventHandler<HTMLButtonElement>| void) {
        message.info('Click on left button.');
        console.log('click left button', e);
    }
      
    function handleMenuClick(e: React.MouseEventHandler<HTMLButtonElement> | void) {
        message.info('Click on menu item.');
        console.log('click', e);
    }

    const menu: React.ReactElement<any, string> = (
        <Menu>
            <Menu.Item key="1" 
                onClick={(e) => props.menuItem1Click && props.menuItem1Click(true)}>
                <span >
                    <span>{props.menuItem1Icon}
                    {props.menuItem1 || 'All apps'} 
                    </span>
                </span>
            </Menu.Item>
            <Menu.Item key="2" >
                <span onClick={(e) => props.menuItem2Click && props.menuItem2Click(e, props.menuItemId)}>
                    {props.menuItem2Icon}
                    {props.menuItem2 || 'Productivity'}
                </span>
            </Menu.Item>
            <Menu.Item key="3" >
                {props.menuItem3 || 'Other'}
            </Menu.Item>
        </Menu>
    );
      
    return(
        <Space wrap>
            <Dropdown overlay={menu}>
                <Button 
                    style={{
                        backgroundColor: 'transparent', 
                        border: 'none'
                    }}
                    icon={props.dropDownIcon}
                >
                {props.title}
                </Button>
            </Dropdown>
        </Space>
    );
}
