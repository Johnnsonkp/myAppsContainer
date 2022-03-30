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
            width: '4em', 
            height: '4em', 
            position: 'fixed', 
            bottom: '10%', 
            left: '90%', 
            boxShadow: 'rgb(0 0 0 / 50%) 0px 10.6px 65.6px 5px', 
            backgroundColor: props.formToggler? 'red' : 'blue',
            zIndex: '9000'
          }}  
          icon={<PlusOutlined rotate={props.formToggler? 130 : 90} 
          style={{fontSize: '45px', fontWeight: 'bolder'}}/>} 
            onClick={() => props.setFormToggler && props.setFormToggler(!props.formToggler)}
        />
    )
}