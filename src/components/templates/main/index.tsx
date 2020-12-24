import React from 'react';
import LeftNav from '../../organisms/leftnav/index';
import Header from '../../organisms/header/index';
import Footer from '../../organisms/footer/index';

class Main extends React.Component {
    render () {
        return (
            <React.Fragment>
                <LeftNav />
                <div id="main">
                    <Header />
                    <Footer />
                </div>
            </React.Fragment>
        );
    }
}

export default Main;
