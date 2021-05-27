import React from 'react'

import { Menu } from 'antd';
import { HomeOutlined, SearchOutlined, UserOutlined, BellOutlined, MessageOutlined } from '@ant-design/icons';

import '../../Styles/footer.less'

export default class Footer extends React.Component {
    constructor(props){
        super(props);
        this.state = { current: 'user' };
        console.log(props);
    }
    componentDidMount(){
        this.props.changePage('user');
        this.setState({current:'user'})
    }

    handleClick = e => {
        this.props.changePage(e.key);
        this.setState({ current: e.key });
    }

    render() {
        const { current } = this.state;
        return (
            <Menu className="footer_menu" onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                <Menu.Item key="home" icon={<HomeOutlined />} />
                <Menu.Item key="search" icon={<SearchOutlined />} />
                <Menu.Item key="message" icon={<MessageOutlined />} />
                <Menu.Item key="bell" icon={<BellOutlined />} />
                <Menu.Item key="user" icon={<UserOutlined />} />
            </Menu>
        );
    }
}