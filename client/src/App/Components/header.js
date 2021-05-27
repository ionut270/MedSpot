import React from 'react'
import { Drawer, Button, Radio, Space } from 'antd';

import '../../Styles/header.less'

export default class Header extends React.Component{
    state = { visible: false, placement: 'bottom' };

    showDrawer = () => {
      this.setState({
        visible: true,
      });
    };
  
    onClose = () => {
      this.setState({
        visible: false,
      });
    };
  
    render() {
      const { placement, visible } = this.state;
      return (
        <>
          <Space >
            <div className="header_logo" onClick={this.showDrawer}>
                MEDSPOT
            </div>
          </Space>
          <Drawer
            title="Menu"
            placement={placement}
            closable={false}
            onClose={this.onClose}
            visible={visible}
            key={placement}
          >
            <p>Settings</p>
            <p>About</p>
            <p>Support</p>
          </Drawer>
        </>
      );
    }
}