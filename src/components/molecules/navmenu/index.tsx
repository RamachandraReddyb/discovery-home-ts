import React from 'react';
import Icon from '../../atoms/icon/index';
import './style.css';

type propsTypes = {
    menuItems: Array<menu>;
    textShow: Boolean;
}

interface menu {
    text : string;
    icon: string;
    id: number;
}

const NavMenu = ({ menuItems, textShow } : propsTypes) => {

    let list: any = menuItems.map(({text, icon, id}: menu) => {
        return (
            <li key={id} style={{ textAlign : textShow ? 'left' : 'center'}}>
                <Icon 
                    style={{}}
                    image={icon}
                    alt="home"
                    classNames={id === 1 ? 'active' : ''}
                />
                <span style={{display: textShow ? 'inline-block' : 'none'}}>{text}</span>
            </li>
        );
    });

    return <ul> { list } </ul>;
}

export default NavMenu;
