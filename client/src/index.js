import React from 'react';
import ReactDOM from 'react-dom';

// Import used components
import App from './App/app_manager';
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
  async componentDidMount() {
    var session = await utils.request('/session', 'GET');
    this.setState({ auth: session.auth, complete: session.complete, user: session.user })
  }

  loading(state) { this.setState({ loading: state === 'on' ? true : false }) }

  render() {
    const { auth, loading, complete, user } = this.state;
    if (auth === null || loading)             return <Loading />
    if (auth === true && complete === false)  return <Complete user={user} loading={this.loading} />
    if (auth === true)                        return <App />
                                              return <Auth />
  }
}

ReactDOM.render(<Comp />, document.getElementById('root'));
