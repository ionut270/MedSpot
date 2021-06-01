import React from 'react';

import { SendOutlined } from '@ant-design/icons';
import { Space, Button, Form, Input, Empty  } from 'antd';

import Post from './post'

import '../../../Styles/home.less'

const utils = require('../../../utils');

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { feed: [] }

    this.post     = this.post.bind(this);
    this.getFeed  = this.getFeed.bind(this);
  }

  async componentDidMount() {
    this.props.loading('on');
    await this.getFeed();
    this.props.loading('off');
  }

  getFeed() {
    return new Promise(async (resolve,reject)=>{
      const res = await utils.request('/posts', 'GET')
      this.setState({ feed: res.posts, likes: res.likes })
      resolve();
    })
  }

  async post(values){
    this.props.loading('on');
    await utils.request('/posts','POST',values);
    document.getElementById('comment_form_comment').value = '';
    await this.getFeed();
    this.props.loading('off');
  }

  render() {
    const { feed, likes } = this.state;
    return (
      <Space className="home_container" direction="vertical">
        <div className="posts_container">
        {feed.length > 0 ? feed.map((post, key) => <Post loading={this.props.loading} likes={likes.filter(p=>p.post_id === post._id)} post={post} key={key} />) : <Empty className="no_data" />}
        </div>

        <Form name="comment_form" onFinish={this.post} className="post_form comment_form">
          <Form.Item className="post_input_container" name="comment">
            <Input className="post_input" placeholder="Say what you think" />
          </Form.Item>
          <Form.Item >
            <Button className="comment_button" type="primary" htmlType="submit"><SendOutlined /></Button>
          </Form.Item>
        </Form>

      </Space>
    )
  }
}