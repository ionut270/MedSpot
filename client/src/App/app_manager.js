import React from 'react';
import { Layout } from 'antd';

// Import components
import APP_HEADER from './Components/header'
import APP_FOOTER from './Components/footer'

// Import pages of the application
import User     from './Pages/user'
import Bell     from './Pages/bell'
import Search   from './Pages/search/search'
import Loading  from './Pages/loading'
import Home     from './Pages/home'
import Message  from './Pages/message'

// Import styles
import '../Styles/app_manager.less'

// Expand the layout object
const { Header, Footer, Content } = Layout;


export default class App extends React.Component {
    constructor(){
        super();
        this.state = {page : '', loading: false}
        // Bind the class object to the method
        this.changePage = this.changePage.bind(this)
        this.loading = this.loading.bind(this);
    }

    loading(state){ this.setState({loading: state==='on' ? true : false}) }
    changePage(page){ this.setState({page:page}); }

    render() {
        var {loading, page} = this.state;
        return (
            <Layout className="App">
                <Header className="Header"><APP_HEADER /></Header>
                <Content className="Content">
                    {loading ? <Loading /> : null }
                    {page === 'user' ? <User loading={this.loading} /> : null}
                    {page === 'bell' ? <Bell loading={this.loading} /> : null}
                    {page === 'search' ? <Search loading={this.loading} /> : null}
                    {page === 'home' ? <Home loading={this.loading} /> : null}
                    {page === "message" ? <Message loading={this.loading} /> : null}
                </Content>
                <Footer className="Footer"><APP_FOOTER changePage={this.changePage} /></Footer>
            </Layout>
        )
    }
}