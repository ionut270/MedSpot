import React from 'react'

export default class Page extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    onClick(){

    }

    render(){
        return(
            <div onClick={this.onClick}></div>
        )
    }
}