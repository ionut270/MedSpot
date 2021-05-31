import React from "react";

import { Layout , Card} from "antd";

import "../../Styles/message.less";
const utils = require("../../utils");
const { Sider, Content } = Layout;

export default class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
    this.getUsers = this.getUsers.bind(this);
    this.getUsers();
  }

  async getUsers() {
    const users = await utils.request("/users", "GET");
    this.setState({users: users});
  }

  render() {
    
    const { users } = this.state;
    return (
      <Layout className="layout_message">
        <Layout className="layout_message">
          <Sider className="sider_message">List of users
            {users.map(user => {
              const username = user.name;
              if ( username !== "Dominte Florin-Iulian")
                return <Card hoverable = "true" className="card_message">{user.name}</Card>
            })}
          </Sider>
          <Content style={{ textAlign: "center" }}>Content</Content>
        </Layout>
      </Layout>
    );
  }
}
