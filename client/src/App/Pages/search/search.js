import React from 'react';

export default class Search extends React.Component{
    render(){
        return(
        <div className="search_container">
            
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