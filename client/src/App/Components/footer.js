import React from 'react'

import { Menu } from 'antd';
import { HomeOutlined, SearchOutlined, UserOutlined, BellOutlined, GlobalOutlined } from '@ant-design/icons';

import '../../Styles/footer.less'

export default class Footer extends React.Component {
    constructor(props){
        super(props);
        this.state = { current: process.env.REACT_APP_DEFAULT_PAGE };
    }
    componentDidMount(){
        this.props.changePage(process.env.REACT_APP_DEFAULT_PAGE);
        this.setState({current:process.env.REACT_APP_DEFAULT_PAGE})
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
                <Menu.Item key="rss" icon={<GlobalOutlined />} />
                <Menu.Item key="bell" icon={<BellOutlined />} />
                <Menu.Item key="user" icon={<UserOutlined />} />
            </Menu>
        );
    }
}