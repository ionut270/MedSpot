import React from 'react';
import { List, Avatar} from 'antd';
import "../../Styles/rss.less";
const utils = require("../../utils");
export default class Bell extends React.Component{
    constructor() {
        super();
        this.state = {
          rss: [],
        };
        this.getRss = this.getRss.bind(this);
        this.renderIcon=this.renderIcon.bind(this);
        this.getRss();
      }
      renderIcon(check){ 
        if(typeof(check['media:thumbnail'])!='undefined') 
          return check['media:thumbnail']['$']['url'];
      }
      async getRss() {
        const rss = await utils.request("/rss", "GET");
        this.setState({rss: rss});
      }
    render(){
        const { rss } = this.state;
    
        return( <List
            itemLayout="vertical"
            size="medium"
            pagination={{
              pageSize: 5,
            }}
            dataSource={rss}
            renderItem={item => (
                 <List.Item
                    key={item.title}
                    actions={[<span key="comment-basic-reply-to">{item.pubDate}</span>]}>
                      <List.Item.Meta 
                        avatar={<Avatar className="avatar" src={this.renderIcon(item)} />}
                        title={<a href={item.link}>{item.title}</a>}
                        description={item['categories']}
                        date={item.pubDate}
                      />
                      {item.content.slice(0, 120)}... 
                  </List.Item>
            )}
          />
        )
    }
}
