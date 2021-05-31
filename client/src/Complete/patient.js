import React from 'react';
import { Form, Input, Button, Checkbox, Select, DatePicker } from 'antd';
import '../Styles/complete.less'

import logo from '../props/logo4x.png'

const utils  = require('../utils');

export default class Patient extends React.Component {
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
                    <Form.Item label="CNP" name="cnp" rules={[{ required: true, message: 'Please input your CNP!' }]}>
                        <Input className="complete_form_input" />
                    </Form.Item>
                    <Form.Item label="Date of birth" name="dob" rules={[{ required: true, message: 'Please input your date of birth!' }]}>
                        <DatePicker className="complete_form_input" format={"YYYY-MM-DD"} />
                    </Form.Item>
                    <Form.Item label="Phone" name="phone">
                        <Input className="complete_form_input" />
                    </Form.Item>
                    <Form.Item label="Weight" name="weight">
                        <Input className="complete_form_input" />
                    </Form.Item>
                    <Form.Item label="Height" name="height">
                        <Input className="complete_form_input" />
                    </Form.Item>
                    <Form.Item label="Medical Gender" name="gender" >
                        <Select className="complete_form_input" placeholder="Male or Female" allowClear>
                            <Select.Option value="male">Male</Select.Option>
                            <Select.Option value="female">Female</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Blood type" name="blood_type" >
                        <Select className="complete_form_input" placeholder="A, B, AB or 0" allowClear>
                            <Select.Option value="A">A</Select.Option>
                            <Select.Option value="B">B</Select.Option>
                            <Select.Option value="AB">AB</Select.Option>
                            <Select.Option value="0">0</Select.Option>
                        </Select>
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

