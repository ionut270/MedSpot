import React from 'react';
import { Button, Divider } from 'antd';
import '../Styles/complete.less'

import logo from '../props/logo4x.png'

import Patient from './patient';
import Doctor from './doctor';

const utils = require('../utils');

export default class Complete extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user: this.props.user, page: null };

        // Binders
        this.pageSelect = this.pageSelect.bind(this);
    }
    onFinish = async (values) => {
        this.props.loading('on');
        await utils.request('/profile', 'PATCH', values);
        this.props.loading('off');
        window.location.reload();
    };

    onFinishFailed  = (errorInfo)   => console.log('Failed:', errorInfo);
    pageSelect      = (page)        => this.setState({ page: page })

    render() {
        if (this.state.page === "patient")  return <Patient user={this.props.user} loading={this.props.loading} />
        if (this.state.page === "doctor")   return <Doctor  user={this.props.user} loading={this.props.loading} />
        return (
            <div className="complete">
                <img className="complete_logo" alt="medpot logo" src={logo} />
                <div className="complete_info_div">
                    <Divider className="complete_divider">Hello !</Divider>
                    <p>We just want to make sure we are providing you with the right features according to your needs.</p>
                    <p>We just need a bit more information about you.</p>
                    <Divider className="complete_divider">First, you are ..</Divider>
                </div>
                <div className="complete_btn">
                    <Button className="btn-patient" onClick={(e) => { e.preventDefault(); this.pageSelect("patient") }}>A user</Button>
                    <Divider className="complete_divider">OR</Divider>
                    <Button className="btn-doctor"  onClick={(e) => { e.preventDefault(); this.pageSelect("doctor") }}>A doctor</Button>
                </div>
            </div>
        )
    }
}