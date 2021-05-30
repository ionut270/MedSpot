import React from 'react';
import { Form, Input, Button, Checkbox, Select, DatePicker, Upload } from 'antd';
import '../Styles/complete.less'

import logo from '../props/logo4x.png'

const utils  = require('../utils');
const layout = {labelCol: {span: 8}, wrapperCol: {span: 16}};
const tailLayout = {wrapperCol: {offset: 8,span: 16}};

const normFile = (e) => {console.log('Upload event:', e); if (Array.isArray(e)) {return e;}return e && e.fileList;};

export default class Complete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user
        }
    }
    onFinish = (values) => {
        console.log('Success:', values);
    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    render() {
        return (
            <div className="complete">
                <img className="complete_logo" alt="medpot logo" src={logo} />
                <Form className="complete_form" {...layout} name="profile_info" initialValues={{ remember: true }} onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}>
                    <Form.Item label="CNP" name="cnp" rules={[{ required: true, message: 'Please input your CNP!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Id card">
                        <Form.Item name="id_card" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
                            <Upload.Dragger name="id_card" action={`${process.env.REACT_APP_SERVER}/upload/id_card?sessionid=${localStorage.sessionID}`}>
                                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                            </Upload.Dragger>
                        </Form.Item>
                    </Form.Item>
                    <Form.Item label="Date of birth" name="dob" rules={[{ required: true, message: 'Please input your date of birth!' }]}>
                        <DatePicker format="YYYY-MM-DD" />
                    </Form.Item>
                    <Form.Item label="Weight" name="weight">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Height" name="height">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Medical Gender" name="gender" >
                        <Select placeholder="Male or Female" allowClear>
                            <Select.Option value="male">Male</Select.Option>
                            <Select.Option value="female">Female</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Blood type" name="blood_type" >
                        <Select placeholder="A, B, AB or 0" allowClear>
                            <Select.Option value="A">A</Select.Option>
                            <Select.Option value="B">B</Select.Option>
                            <Select.Option value="AB">AB</Select.Option>
                            <Select.Option value="0">0</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item {...tailLayout} rules={[{ required: true, message: 'Due to new laws and regulations we need your consent in order to be able to process your data' }]} name="gdpr" valuePropName="checked">
                        <Checkbox>I agree to GDPR</Checkbox>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Submit
              </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}