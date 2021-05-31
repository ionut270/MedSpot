import React, { createElement, useState } from 'react';

import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import { Space, Card, Comment, Tooltip, Avatar, Modal, Button } from 'antd';

import Post from './post'

import '../../../Styles/home.less'

const utils = require('../../../utils');

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { feed: [] }
  }

  componentDidMount() { this.getFeed(); }

  async getFeed() { 
    this.setState({ feed: await utils.request('/home', 'POST') }) 
  }

  render() {
    const {feed} = this.state;
    return (
      <Space className="home_container" direction="vertical">
        {feed.length > 0 ? feed.map((post, key) => <Post post={post} key={key} />) : <div>Nothing!</div>}
      </Space>
    )
  }
}