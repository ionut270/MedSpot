import React from 'react';

import { Select } from 'antd';
const { Option } = Select;

const utils = require('../../../utils')

const children = [];
for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}
export default class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            children : []
        }
    }
    async componentDidMount(){
        const data = await utils.request('/health/simptoms','GET');
        console.log(data);
        this.setState({children: data.map(simptom=><Option key={simptom.Name} val={simptom.ID}>{simptom.Name}</Option>)})
    }
    render() {
        return (
            <div className="search_container">
                <Select
                    mode="multiple"
                    placeholder="Please select simptoms"
                    style={{ width: '90vw', marginLeft : "5vw", marginTop: "1em" }}>
                    {this.state.children}
                </Select>
            </div>
        )
    }
}

/**
 * 2 types of search
 *
 * - 1 diagnostic
 * + list of conditions from store
 * + user data from db
 * -> conditions & details
 * -> What kind of cabinet do u need to search
 * -> 2
 *
 * - 2 medical cabinet
 * + list of cabinets in area
 * + select cabinet -> open map
 * + appointment button with call or calendar if available
 */