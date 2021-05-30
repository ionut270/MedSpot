import React                                      from 'react';
import ReactDOM                                   from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Import used components
import App  from './App/app_manager';
import Auth from './Auth/auth';
import Loading from './Loading/loading';
import Complete from './Complete/complete'

// Import styles
import './Styles/index.less'

// Import request method handler
const utils = require('./utils');

class Comp extends React.Component {
  constructor() {
    super();
    this.state = { auth: null, complete: null, user: null, loading: false }
    this.loading = this.loading.bind(this);
  }
  async componentDidMount(){
    var session = await utils.request('/session','GET');
    this.setState({auth: session.auth, complete: session.complete, user : session.user})
  }

  loading(state){ this.setState({loading: state==='on' ? true : false}) }

  render = () => {
    if(this.state.auth === null || this.state.loading ) {
      return(<Loading />)
    }
    if(this.state.auth === true && this.state.complete === false){
      return <Complete user={this.state.user} loading={this.loading}  />
    }
    if (this.state.auth === true) {
      return (
        <Router>
          <Switch>
            <Route path="/"> <App /></Route>
          </Switch>
        </Router>
      )
    }
    return (<Auth></Auth>)
  }
}

ReactDOM.render( <React.StrictMode><Comp /></React.StrictMode>,document.getElementById('root') );
