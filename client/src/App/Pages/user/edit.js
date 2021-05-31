import React from 'react'
import { Form, Input, Button, Select, DatePicker } from 'antd';
import moment from 'moment';

const utils=require('../../../utils');

export default class Edit extends React.Component {
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
        const {profile, editMode} = this.props;
        const dateFormat = 'YYYY-MM-DD';
        return (
            <Form className="edit_form complete_form" name="profile_info" initialValues={{ remember: true }} onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}>
                <Form.Item label="CNP" name="cnp" rules={[{ required: true, message: 'Please input your CNP!' }]}>
                    <Input defaultValue={profile.cnp ? profile.cnp : '' } className="complete_form_input" />
                </Form.Item>
                <Form.Item label="Date of birth" name="dob" rules={[{required: true, message: 'Please input your date of birth!' }]}>
                    <DatePicker defaultValue={profile.dob ? moment(profile.dob, dateFormat) : null} className="complete_form_input" format={dateFormat} />
                </Form.Item>
                <Form.Item label="Phone" name="phone">
                    <Input defaultValue={profile.phone ? profile.phone : '' } className="complete_form_input" />
                </Form.Item>
                <Form.Item label="Weight" name="weight">
                    <Input defaultValue={profile.weight ? profile.weight : '' } className="complete_form_input" />
                </Form.Item>
                <Form.Item label="Height" name="height">
                    <Input defaultValue={profile.height ? profile.height : '' } className="complete_form_input" />
                </Form.Item>
                <Form.Item label="Medical Gender" name="gender" >
                    <Select defaultValue={profile.gender ? profile.gender : '' } className="complete_form_input" placeholder="Male or Female" allowClear>
                        <Select.Option value="male">Male</Select.Option>
                        <Select.Option value="female">Female</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Blood type" name="blood_type" >
                    <Select defaultValue={profile.blood_type ? profile.blood_type : '' } className="complete_form_input" placeholder="A, B, AB or 0" allowClear>
                        <Select.Option value="A">A</Select.Option>
                        <Select.Option value="B">B</Select.Option>
                        <Select.Option value="AB">AB</Select.Option>
                        <Select.Option value="0">0</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item className="edit_submit">
                    <Button className="edit_submit_button" type="primary" htmlType="submit">Submit</Button>
                    <Button className="edit_submit_button" type="danger" onClick={ (e)=>{ e.preventDefault(); editMode("off") }}>Cancel</Button>
                </Form.Item>
            </Form>
        )
    }
}