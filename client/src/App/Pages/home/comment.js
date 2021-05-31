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
                author={<a>Han Solo</a>}
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="Han Solo" /> }
                content={<p>{comment.comms}</p>}
                datetime={ <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}><span>{moment().fromNow()}</span></Tooltip>}
            />
        )
    }
}