import React from 'react';

import { SendOutlined } from '@ant-design/icons';
import { Select, Form, Button, Empty, Divider , Spin } from 'antd';

import Diagnostic from './diagnostic'

import '../../../Styles/search.less'

const { Option } = Select;

const utils = require('../../../utils')
export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            children: [],
            simptoms: [],
            diagnostics: [],
            loading : false,
        }
        this.getDiagnostic = this.getDiagnostic.bind(this);
        this.loading = this.loading.bind(this)
    }
    async componentDidMount() {
        const data = await utils.request('/health/simptoms', 'GET');
        this.setState({ simptoms: data, children: data.map(simptom => <Option key={simptom.Name} val={simptom.ID}>{simptom.Name}</Option>) })
    }

    async getDiagnostic(values) {
        //Convert simptomsstring to array of id's
        this.loading('on')
        var simptoms = values.simptoms.map(simptom => this.state.simptoms.filter(x => x.Name === simptom)[0].ID)

        const data = await utils.request(`/health/diagnosis?simptoms=${JSON.stringify(simptoms)}`, 'GET');
        this.setState({ diagnostics: data });
        this.loading('off')
    }

    loading(state){
        if(state === 'on')  this.setState({loading : true})
        else                this.setState({loading : false})
    }

    render() {
        const { diagnostics,loading } = this.state;
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

                {!loading ? diagnostics.map((diagnostic, key) => {
                    return <Diagnostic loading={this.props.loading} key={key} diagnostic={diagnostic} />
                }): null}
                
                {loading ? <div className="loading_container"><Spin size="large" /></div> : null}

                {diagnostics.length === 0 && !loading ? <Empty description={
                    <span>
                        <h3>Self diagnostic</h3>
                        <p>Our app can provide you with a self diagnostic.</p>
                        <i>The self diagnostic feature is experimental, and under no circumstances should it be taken as a reliable source of information.</i>
                        <p><b>In order to get a correct diagnostic please consult a medic</b></p>
                        <p>The self diagnostic feature may help you determine what kind of checkup you may need</p>
                        <Divider />
                        <p>To proceed provide a list of simptoms in the search bar above</p>
                    </span>
                } /> : null}

            </div>
        )
    }
}
