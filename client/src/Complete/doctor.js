import React from 'react';
import { Form, Input, Button, Checkbox, Divider } from 'antd';
import '../Styles/complete.less'

import logo from '../props/logo4x.png'

const utils  = require('../utils');

export default class Complete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user
        }
    }
    onFinish = async (values) => {
        this.props.loading('on');
        await utils.request('/profile','PATCH',values);
        this.props.loading('off');
        window.location.reload();
    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    render() {
        return (
            <div className="complete">
                <img className="complete_logo" alt="medpot logo" src={logo} />
                <Form className="complete_form" name="profile_info" initialValues={{ remember: true }} onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}>
                    <Divider > Doctor info</Divider>
                    
                    <Form.Item label="Specialization" name="specialization" rules={[{ required: true, message: 'Please input your Specialization!' }]}>
                        <Input className="complete_form_input" />
                    </Form.Item>
                    <Form.Item label="Phone" name="phone">
                        <Input className="complete_form_input" />
                    </Form.Item>
                    <Divider> Cabinet info</Divider>
                    
                    <Form.Item label="Specialization" name="specialization_cab" rules={[{ required: true, message: 'Please input the cab\'s specializations!' }]}>
                        <Input className="complete_form_input" />
                    </Form.Item>

                    <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input the cab\'s email!' }]}>
                        <Input className="complete_form_input" />
                    </Form.Item>

                    <Form.Item label="Phone" name="phone">
                        <Input className="complete_form_input" />
                    </Form.Item>

                    <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input the cab\'s name!' }]}>
                        <Input className="complete_form_input" />
                    </Form.Item>



                    <Form.Item label="Map" name="map" rules={[{ required: true, message: 'Please mark the location of the cab.' }]}>
                        <Input className="complete_form_input" />
                    </Form.Item>
                    


                    <Form.Item rules={[{ required: true, message: 'Due to new laws and regulations we need your consent in order to be able to process your data' }]} name="gdpr" valuePropName="checked">
                        <Checkbox className="complete_form_input">I agree to GDPR</Checkbox>
                    </Form.Item>

                    <Form.Item className="complete_submit">
                        <Button className="complete_submit_button" type="primary" htmlType="submit">Submit</Button>
                    </Form.Item>
                    

                    
                </Form>
            </div>
        )
    }
}

