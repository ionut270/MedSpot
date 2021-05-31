import React from 'react';

import { Card, Divider, Button } from 'antd';

export default class Data extends React.Component {
    constructor(props){ super(props); this.state={} }
    render() {
        var {editMode, profile} = this.props;
        return (
            <Card
                className="user_data"
                title={`${profile.given_name} ${profile.family_name} `}
                extra={<Button onClick={(e)=>{e.preventDefault(); editMode("on")}}>Edit</Button>}
            >
                <p>Email : {profile.email}</p>
                <p>Phone : {profile.phone}</p>
                <Divider></Divider>

                <p>CNP : {profile.cnp}</p>
                <p>Date of birth : {profile.dob}</p>

                <Divider>Medical data</Divider>

                <p>Blood : {profile.blood_type}</p>
                <p>Weight : {profile.weight}</p>
                <p>Height : {profile.height}</p>
            </Card>
        )
    }
}