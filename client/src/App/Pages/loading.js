import React from 'react'
import { Spin, Space } from 'antd';

import '../../Styles/loading.less'

export default class Loading extends React.Component {
    render() {
        return (<Space className="app_loader_2" size="middle"><Spin size="large" /></Space>)
    }
}