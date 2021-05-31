import React from 'react';
import {Button, Divider  } from 'antd';
import '../Styles/complete.less'

import logo from '../props/logo4x.png'
import Patient from './patient';
import Doctor from './doctor';

const utils  = require('../utils');

export default class Complete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            page: null
        };
        this.pageSelect=this.pageSelect.bind(this);
    }
    onFinish = async (values) => {
        this.props.loading('on');
        await utils.request('/profile','PATCH',values);
        this.props.loading('off');
        window.location.reload();
    };
    handleSubmit = (e) => {
        this.props.history.push('/ahana-psychometry/')
      }

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    pageSelect = (page) => {
        this.setState({
            page:page
        })
    }

    render() {
        if (this.state.page){
            if (this.state.page=="patient")
                return <Patient></Patient>
            else
            return <Doctor></Doctor>
        }else
            return (
                <div className="complete">

                    <img className="complete_logo" alt="medpot logo" src={logo} />

                    <div className= "complete_btn">
                    <Button className="btn-patient" onClick={(e)=>{
                        e.preventDefault();
                        this.pageSelect("patient")
                    }}>
                        Patient
                    </Button>

                    <Divider type="vertical" >
                        or
                    </Divider>
                    <Button className="btn-doctor"onClick={(e)=>{
                        e.preventDefault();
                        this.pageSelect("doctor")
                    }}>
                        Doctor
                    </Button>
                    </div>
                </div>
            )
    }
}