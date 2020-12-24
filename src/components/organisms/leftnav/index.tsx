import React from 'react';
import NavMenu from '../../molecules/navmenu';
import MenuItems from '../../templates/navmenu';

import './styles.css';

class LeftNav extends React.Component {

    state = {
        show: false
    }

    toggleNav = () => {
        let mySidenav: any = document.getElementById("mySidenav");
        let main: any = document.getElementById("main");
        
        if (mySidenav.offsetWidth === 100) {
            mySidenav.style.width = '250px';
            main.style.marginLeft = '250px';
            this.setState({ show: true });
        } else {
            mySidenav.style.width = '100px';
            main.style.marginLeft = '100px';
            this.setState({ show: false });
        }
    }

    render () {
        return (
            <React.Fragment>
                <div id="mySidenav" className="sidenav">
                    <div className="center">
                        <img src={'https://www.w3schools.com/howto/img_avatar.png'} alt="Avatar" className="avatar" onClick={this.toggleNav} />
                    </div>
                    <div className="vertical-center">
                        <NavMenu menuItems={MenuItems} textShow={this.state.show}/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default LeftNav;
