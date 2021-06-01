import React from 'react';

import { SendOutlined } from '@ant-design/icons';
import { Select, Form, Button, Empty } from 'antd';

import Diagnostic from './diagnostic'

import '../../../Styles/search.less'

const { Option } = Select;

const utils = require('../../../utils')
export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            children: [],
            simptoms : [],
            diagnostics : []
        }
        this.getDiagnostic = this.getDiagnostic.bind(this);
    }
    async componentDidMount() {
        const data = await utils.request('/health/simptoms', 'GET');
        this.setState({simptoms : data, children: data.map(simptom => <Option key={simptom.Name} val={simptom.ID}>{simptom.Name}</Option>) })
    }

    async getDiagnostic(values) {
        //Convert simptomsstring to array of id's
        var simptoms =  values.simptoms.map(simptom=> this.state.simptoms.filter(x=>x.Name===simptom)[0].ID)

        const data = await utils.request(`/health/diagnosis?simptoms=${JSON.stringify(simptoms)}`, 'GET');
        this.setState({diagnostics: data});
    }

    render() {
        const {diagnostics} = this.state;
        return (
            <div className="search_container">
                <Form className="simptoms_form" onFinish={this.getDiagnostic} name="diagnostic" >
                    <Form.Item 
                        className="simptoms_input"
                        name="simptoms" 
                        rules={[{ required: true, message: 'To generate a diagnostic please enter a few simptoms first' }]} 
                        valuePropName='value'
                    >
                        <Select
                            mode="multiple"
                            placeholder="Please select simptoms"
                            className="select_simptoms" >
                            {this.state.children}
                        </Select>
                    </Form.Item>
                    <Form.Item >
                        <Button className="comment_button" type="primary" htmlType="submit"><SendOutlined /></Button>
                    </Form.Item>
                </Form>

                {diagnostics.map((diagnostic,key)=>{
                    return <Diagnostic key={key} diagnostic={diagnostic}/>
                })}

                {diagnostics.length === 0 ? <Empty /> : null }

            </div>
        )
    }
}
