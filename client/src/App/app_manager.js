import React from 'react';
import { Layout } from 'antd';

// Import components
import APP_HEADER from './Components/header'
import APP_FOOTER from './Components/footer'

// Import pages of the application
import User from './Pages/user'
import Bell from './Pages/bell'

// Import styles
import '../Styles/app_manager.less'

// Expand the layout object
const { Header, Footer, Content } = Layout;


export default class App extends React.Component {
    constructor(){
        super();
        this.state = {page : ''}
        // Bind the class object to the method
        this.changePage = this.changePage.bind(this)
    }

    changePage(page){ this.setState({page:page}); }

    render() {
        return (
            <Layout className="App">
                <Header className="Header"><APP_HEADER /></Header>
                <Content className="Content">
                    {this.state.page === 'user' ? <User /> : null}
                    {this.state.page === 'bell' ? <Bell /> : null}
                    {this.state.page === 'page' ? <Page /> : null}
                </Content>
                <Footer className="Footer"><APP_FOOTER changePage={this.changePage} /></Footer>
            </Layout>
        )
    }
}