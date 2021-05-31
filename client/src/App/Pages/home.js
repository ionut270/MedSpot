import React, { createElement, useState } from 'react';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import { Space, Card,Comment, Tooltip, Avatar,Modal, Button } from 'antd';
const utils = require('../../utils');

export default class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {  }
        this.feed = [];
        this.comments = [];
       
      }
      
      componentDidMount(){this.getFeed();}
      async getFeed() { this.setFeed(await utils.request('/home', 'POST')) }
      async getComments(id){
        //showModal();  
        this.setComments(await utils.request('/comments', 'POST',{id:id})) }
      setFeed(val) { this.feed = val; this.forceUpdate() }
      setComments(val) { this.comments = val; this.forceUpdate() }
    
    render(){
 

  
        console.log( JSON.stringify(this.feed));
        return(
            
            <div id=""> 
            
     
            <Space direction="vertical">
        {this.feed.length>0 ? this.feed.map((d, key) => {
           console.log()
            return(
               <div key={key} onClick={(e)=>{e.preventDefault();this.getComments(d._id);}}>
                     <Card key={key}   title={d.title} style={{ width: 300 }} actions={[
                        <LikeFilled key="like" title="Like"/>,
                        <span key="comment-basic-reply-to">{d.likes}</span>,
                        <DislikeFilled key="dislike" title="Dislike"/>,
                        <span key="comment-basic-reply-to">{d.dislikes}</span>,
                        <span key="comment-basic-reply-to">Comments</span>,
                        <span key="comment-basic-reply-to"></span>
                        
                      ]} >
                          
                        <p>Author: {d.user_email}</p>
                        <p>Description: {d.description}</p>
                        
                     </Card>
                 </div>
            )
        }):<div>Nothing!</div>}
       </Space>
       </div> )   
    }
   
}