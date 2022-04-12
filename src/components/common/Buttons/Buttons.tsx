import {Button} from 'antd'
import { ButtonsProps } from './Button.modules'
import { PlusOutlined } from '@ant-design/icons'

export const FormToggleButton: React.FC<ButtonsProps> = (props) => {
    return (
        <Button 
            type="primary" 
            shape="circle"
            style={props.style}
            icon={<PlusOutlined 
                rotate={props.formToggler? 130 : 90} 
                style={{fontSize: '45px', fontWeight: 'bolder'}}
            />}
            onClick={() => props.onClickFunc}
        />
    )
}

export const FormToggle: React.FC<ButtonsProps> = (props) => {
    return (
        <Button 
          type="primary" 
          shape="circle" 
          style={{
            width: '3.5em', 
            height: '3.5em', 
            position: 'fixed', 
            bottom: '10%', 
            left: '90%', 
            boxShadow: 'rgb(0 0 0 / 50%) 0px 10.6px 65.6px 5px', 
            backgroundColor: props.formToggler !== props.updateFormToggler? '#f4364c' : '#1890ff',
            zIndex: '9000',
            border: 'none'
          }}  
          icon={<PlusOutlined rotate={props.formToggler !== props.updateFormToggler? 130 : 90} 
          style={{fontSize: '40px', fontWeight: 'bolder'}}/>} 
            onClick={() => props.formToggler !== false? props.setFormToggler && props.setFormToggler(!props.formToggler) : props.updateFormToggler !== false?
                props.setUpdateFormToggler && props.setUpdateFormToggler(!props.updateFormToggler) : props.setFormToggler && props.setFormToggler(!props.formToggler)
            }
        />
    )
}