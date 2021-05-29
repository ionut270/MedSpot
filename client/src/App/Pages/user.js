import React from 'react'

import { Card, Avatar, Divider, Input, Button  } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import '../../Styles/user.less'

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

    componentDidMount() {
        this.getProfile();
    }

    getProfile() {
        const profile = {
            id: 0,
            profile_img: null,
            name: "Andrei",
            surname: "Alexandru",
            email: "andreialex98@gmail.com",
            phone: "0767582689",
            cnp: "19216803",
            dob: "14/06/1998",
            blood: "Type A",
            weight: "84kg",
            height: "180cm"
        }

        this.setState({ profile: profile })
    }

    updateProfile(){
        // Some request to update the profile data
        this.getProfile();
        this.setState({ edit: !this.state.edit });
    }

    editMode() { this.setState({ edit: !this.state.edit }); }

    render() {
        var { edit, profile } = this.state;
        return (
            <div className="user">
                <Avatar 
                    className="user_avatar"
                    size={{ xs: 100, sm: 100, md: 100, lg: 100, xl: 100, xxl: 100 }} 
                    style={{ backgroundColor: '#87d068' }} 
                    icon={<UserOutlined />} 
                />

                <Card 
                    className="user_data" 
                    title={`${profile.name} ${profile.surname}`} 
                    extra={<Button onClick={this.editMode}>Edit</Button>}
                >
                    <p>{edit ?
                        <Input addonBefore="Email" defaultValue={profile.email} /> :
                        `Email : ${profile.email}`}
                    </p>
                    <p>{edit ?
                        <Input addonBefore="Phone" defaultValue={profile.phone} /> :
                        `Phone : ${profile.phone}`}
                    </p>
                    <Divider></Divider>
                    <p>{edit ?
                        <Input addonBefore="CNP" defaultValue={profile.cnp} /> :
                        `CNP : ${profile.cnp}`}
                    </p>
                    <p>{edit ?
                        <Input addonBefore="Date of birth" defaultValue={profile.dob} /> :
                        `Date of birth : ${profile.dob}`}
                    </p>

                    <Divider>Medical data</Divider>

                    <p>{edit ?
                        <Input addonBefore="Blood" defaultValue={profile.blood} /> :
                        `Blood : ${profile.blood}`}
                    </p>
                    <p>{edit ?
                        <Input addonBefore="Weight" defaultValue={profile.weight} /> :
                        `Weight : ${profile.weight}`}
                    </p>
                    <p>{edit ?
                        <Input addonBefore="Height" defaultValue={profile.height} /> :
                        `Height : ${profile.height}`}
                    </p>

                    {edit ? <Divider></Divider> : null}
                    {edit ? <Button primary onClick={this.updateProfile}>Submit</Button> : null}
                </Card>
            </div>
        )
    }
}