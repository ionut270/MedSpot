import React from 'react'

import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import Data from './user/data'
import Edit from './user/edit'

import '../../Styles/user.less'
const utils=require('../../utils');

export default class User extends React.Component {
    constructor() {
        super();
        this.state = {
            edit: false,
            profile: {}
        }
        // bind state object to class methods
        this.editMode = this.editMode.bind(this);
        this.getProfile = this.getProfile.bind(this);
        this.updateProfile = this.updateProfile.bind(this);
    }

    componentDidMount() { this.getProfile(); }

    async getProfile() {
        this.props.loading('on')
        const profile = await utils.request('/profile', 'GET');
        this.setState({ profile: profile });
        this.props.loading('off')
    }

    updateProfile(){
        // Some request to update the profile data
        this.getProfile();
        this.setState({ edit: false });
    }

    editMode(state) { this.setState({ edit: state==='on' ? true : false }); }

    render() {
        var { edit, profile } = this.state;
        return (
            <div className="user">
                <Avatar 
                    className="user_avatar"
                    size={{ xs: 100, sm: 100, md: 100, lg: 100, xl: 100, xxl: 100 }} 
                    style={{ backgroundColor: '#87d068' }} 
                    icon={<UserOutlined />} 
                    src={`${profile.picture}`}
                />
                {!this.state.edit ? <Data profile={this.state.profile} editMode={this.editMode}/> : <Edit profile={this.state.profile} loading={this.props.loading} editMode={this.editMode} />}
            </div>
        )
    }
}