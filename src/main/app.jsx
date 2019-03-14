import '../common/template/dependencies';
import React from 'react';
import Header from '../common/template/header';
import SideBar from '../common/template/sideBar';
import Footer from '../common/template/footer';
import Messages from '../common/msg/messages';

const App = props => {
    
    const {children } = props;

    return (
        <div className='wrapper'>
            <Header />
            <SideBar />
            <div className='content-wrapper'>
                {children}
            </div>
            <Footer />
            <Messages />
        </div>        
    )
}

export default App;