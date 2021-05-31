import React from 'react'

import { DislikeFilled, LikeFilled, SendOutlined } from '@ant-design/icons';
import { Card, Modal, Form, Input, Button } from 'antd';

import Comment from './comment'

const utils = require('../../../utils');

export default class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = { openPost: false, comments: [] };

        this.getComments = this.getComments.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    async getComments() {
        this.setState({ openPost: true, comments: await utils.request('/comments', 'POST', { id: this.props.post._id }) })
    }

    handleCancel() {this.setState({ openPost: false, comments: [] })}
    async comment(values){
        console.log(values);
    }

    render() {
        const { post, key } = this.props;
        const { openPost, comments } = this.state;
        return (
            <>
                <Card className="home_container_card" key={key} title={post.title} style={{ width: 300 }} actions={[
                    <LikeFilled key="like" title="Like" />,
                    <span key="comment-basic-reply-to">{post.likes}</span>,
                    <DislikeFilled key="dislike" title="Dislike" />,
                    <span key="comment-basic-reply-to">{post.dislikes}</span>,
                    <span key="comment-basic-reply-to" onClick={this.getComments}>Comments</span>,
                    <span key="comment-basic-reply-to"></span>
                ]} >
                    <p>Author: {post.user_email}</p>
                    <p>Description: {post.description}</p>
                </Card>
                {openPost === true ?
                    <Modal
                        title="Comments"
                        visible={openPost}
                        onCancel={this.handleCancel}
                        footer={[
                            <Form name="comment_form" onFinish={this.comment} className="comment_form">
                                <Form.Item className="comment_input_container" name="comment">
                                    <Input className="comment_input" placeholder="Say what you think" />
                                </Form.Item>
                                <Form.Item >
                                    <Button className="comment_button" type="primary" htmlType="submit"><SendOutlined /></Button>
                                </Form.Item>
                            </Form>
                        ]}>
                        {comments.map((comment,key)=>
                            <Comment comment={comment} key={key} />
                        )}
                    </Modal> : null}
            </>
        )
    }
}