import React from 'react'
import { Card, Divider, Modal, Empty, Rate, Collapse,Popover, Button } from 'antd';
import Map from './map'
import {CopyToClipboard} from 'react-copy-to-clipboard';

const utils = require('../../../utils');

export default class Diagnostic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location : {},
            showDetails: false,
            showCabinets: false,
            cabinets: [],
            details: {},
            phoneNumber: {}
        }
        this.getIssueDetails = this.getIssueDetails.bind(this);
        this.getCabinets = this.getCabinets.bind(this);
        this.getPhone=this.getPhone.bind(this);

        this.hideCabinets = this.hideCabinets.bind(this);
        this.hideDetails = this.hideDetails.bind(this);
    }

    componentDidMount(){
        // Retrieve & store the location of the user
        if (navigator.geolocation) {
            
            navigator.geolocation.getCurrentPosition((pos) => {
                const { latitude, longitude } = pos.coords
                const location = { lat : latitude, lng : longitude}

                this.setState({ location : location });
            });
        } else {
            alert("Geolocation is not supported by this browser.")
        }
    }

    async getIssueDetails() {
        const data = await utils.request(`/health/issues/${this.props.diagnostic.Issue.ID}`, 'GET')
        this.setState({ details: data, showDetails: true });
    }

    hideCabinets() { this.setState({ showCabinets: false, cabinets: {} }) }
    hideDetails() { this.setState({ showDetails: false, details: {} }) }

    async getCabinets(type) {
        const locationbias = `circle:100000@${this.state.location.lat},${this.state.location.lng}`
        const data = await utils.request(`/places?type=${type}&locationbias=${locationbias}`, 'GET');
        this.setState({ cabinets: data, showCabinets: true })
    }
     async getPhone(id){
        const phone = await utils.request(`/phone?id=${id}`, 'GET');
        this.setState({ phoneNumber: phone })
    }
    render() {

        const { diagnostic } = this.props;
        const { Issue, Specialisation } = diagnostic;
        const { showDetails, showCabinets, details, cabinets, location,phoneNumber } = this.state
        const content = (<div>{typeof(phoneNumber.result)!='undefined'?
        <CopyToClipboard text={phoneNumber.result.formatted_phone_number}>
          <p>{phoneNumber.result.formatted_phone_number}</p>
        </CopyToClipboard>:null}</div>);
          
        return (
            <>
                <Card className="diagnostic_card" hoverable={true} size="small" title={Issue.Name} style={{ width: 300 }} onClick={this.getIssueDetails}>
                    <p>{Issue.ProfName}</p>
                    <Divider>Specialisations</Divider>
                    {Specialisation.map((spec, key) => {
                        return <Card size="small" key={key}>{spec.Name}</Card>
                    })}
                </Card>
                <Modal visible={showDetails} onCancel={this.hideDetails} onOk={this.hideDetails} title={Issue.Name}>
                    <i>{details.Synonyms}</i>
                    <Divider>PossibleSymptoms</Divider>
                    <i>{details.PossibleSymptoms}</i>
                    <Divider>Description</Divider>
                    <p>{details.DescriptionShort}</p>
                    <p>{details.Description}</p>
                    <p>{details.MedicalCondition}</p>
                    <Divider>Treatments</Divider>
                    <p>{details.TreatmentDescription}</p>

                    <Divider>Specialisations</Divider>
                    {Specialisation.map((spec, key) => {
                        return <Card size="small" hoverable={true} key={key} onClick={
                            (e) => {
                                e.preventDefault();
                                this.getCabinets(spec.Name)
                            }
                        }>{spec.Name}</Card>
                    })}
                    
                </Modal>
                <Modal visible={showCabinets} footer={[
                   <Button type="cancel" key="cancel" onClick={this.hideCabinets}>Cancel</Button>,
                   <Button type="primary" key="ok" onClick={this.hideCabinets}>OK</Button>,
                   <Popover key="key" content={content} title="Phone Number">
                     <Button type="primary" className="right" style={{float:'left'}}>Phone Number</Button>
                   </Popover>
                ]} 
                onCancel={this.hideCabinets} 
                onOk={this.hideCabinets} 
                title='Cabinets in your area'>
                    {!cabinets.candidates ? <Empty description='We could not find any cabinets on the selected specialization in your area !' /> : cabinets.candidates.map((cabinet, key) => {   
                       this.getPhone(cabinet.place_id)

                       return <Card hoverable={true} key={key} size="small" title={cabinet.name} extra={cabinet.opening_hours ? cabinet.opening_hours.open_now ? "Open" : "Closed" : ''}>
                            <Rate disabled defaultValue={cabinet.rating} />

                            <Collapse key={key} bordered={false} ghost>
                                <Collapse.Panel className="Colapse_Maps_container" header={cabinet.formatted_address} key="1">
                                    <Map className="Maps_container" center={location} target={cabinet.geometry.location}></Map>
                                </Collapse.Panel>
                            </Collapse>  
                    </Card>
                    })}
                </Modal>
            </>
        )
    }
}