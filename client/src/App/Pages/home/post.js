import React from 'react'

import { DislikeFilled, LikeFilled, SendOutlined, DislikeOutlined, LikeOutlined } from '@ant-design/icons';
import { Modal, Form, Input, Button, Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment';

import Commentc from './comment'

const utils = require('../../../utils');

export default class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = { openPost: false, comments: [], likes: this.props.post.likes, dislikes: this.props.post.dislikes, 
            action: this.props.likes[0] ? this.props.likes[0].like ? 'like' : 'dislike' : null };

        this.getComments = this.getComments.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.comment = this.comment.bind(this);
        this.like = this.like.bind(this);

    }

    getComments() {
        return new Promise(async (resolve,reject)=>{
            this.setState({ openPost: true, comments: await utils.request(`/comments/${this.props.post._id}`, 'GET') });
            resolve();
        })
    }

    handleCancel() { this.setState({ openPost: false, comments: [] }) }

    async comment(values) {
        this.props.loading('on')
        await utils.request(`/comments/${this.props.post._id}`,'POST',values)
        await this.getComments();
        this.props.loading('off')
    }

    async like(status) {
        if (status) {
            if (this.state.action === 'like') {
                this.props.loading('on')
                await utils.request(`/post/like/${this.props.post._id}`, 'DELETE')
                this.setState({ action: null, likes: this.state.likes - 1 })
                this.props.loading('false')
            }
            else if (this.state.action === 'dislike') {
                this.props.loading('on')
                await utils.request(`/post/like/${this.props.post._id}`, 'POST')
                this.setState({ action: 'like', likes: this.state.likes + 1, dislikes: this.state.dislikes - 1 })
                this.props.loading('false')
            }
            else {
                this.props.loading('on')
                await utils.request(`/post/like/${this.props.post._id}`, 'POST')
                this.setState({ action: 'like', likes: this.state.likes + 1 })
                this.props.loading('false')
            }
        } else {
            if (this.state.action === 'dislike') {
                this.props.loading('on')
                await utils.request(`/post/dislike/${this.props.post._id}`, 'DELETE')
                this.setState({ action: null, dislikes: this.state.dislikes - 1 })
                this.props.loading('false')
            }
            else if (this.state.action === 'like') {
                this.props.loading('on')
                await utils.request(`/post/dislike/${this.props.post._id}`, 'POST')
                this.setState({ action: 'dislike', likes: this.state.likes - 1, dislikes: this.state.dislikes + 1 })
                this.props.loading('false')
            }
            else { 
                this.props.loading('on')
                await utils.request(`/post/dislike/${this.props.post._id}`, 'POST')
                this.setState({ action: 'dislike', dislikes: this.state.dislikes + 1 })
                this.props.loading('false')
            }
        }
    }

    render() {
        const { post } = this.props;
        const { openPost, comments, likes, dislikes, action } = this.state;

        const actions = [
            <Tooltip key="comment-basic-like" title="Like">
                <span onClick={(e) => { e.preventDefault(); this.like(true); }}>
                    {action === 'liked' ? <LikeFilled /> : <LikeOutlined />}
                    <span className="comment-action">{likes}</span>
                </span>
            </Tooltip>,
            <Tooltip key="comment-basic-dislike" title="Dislike">
                <span onClick={(e) => { e.preventDefault(); this.like(false); }}>
                    {action === 'disliked' ? <DislikeFilled /> : <DislikeOutlined />}
                    <span className="comment-action">{dislikes}</span>
                </span>
            </Tooltip>,
            <span key="comment-basic-reply-to" onClick={this.getComments}>Comments</span>,
        ];

        return (
            <>
                <Comment
                    actions={actions}
                    author={<div>{post.name}</div>}
                    avatar={<Avatar src={post.picture} alt={post.name} />}
                    content={<p>{post.post}</p>}
                    datetime={<Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}> <span>{moment(post.time).fromNow()}</span> </Tooltip>}
                />
                {openPost === true ?
                    <Modal
                        title="Comments"
                        visible={openPost}
                        onCancel={this.handleCancel}
                        footer={[
                            <Form name="comment_form" onFinish={this.comment} className="comment_form">
                                <Form.Item className="comment_input_container" name="comment"><Input className="comment_input" placeholder="Say what you think" /></Form.Item>
                                <Form.Item ><Button className="comment_button" type="primary" htmlType="submit"><SendOutlined /></Button></Form.Item>
                            </Form>
                        ]}>
                        {comments.map((comment, key) => <Commentc comment={comment} key={key} />)}
                    </Modal> : null}
            </>
        )
    }
}