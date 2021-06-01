import React from 'react'

import { Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment';

export default class Comment_s extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props;
    }
    render() {
        const {comment} = this.state;
        return (
            <Comment
                author={<div>{comment.name}</div>}
                avatar={<Avatar src={comment.picture} alt={comment.name} /> }
                content={<p>{comment.post}</p>}
                datetime={ <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}><span>{moment(comment.time).fromNow()}</span></Tooltip>}
            />
        )
    }
}