import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import avatar from '../../images/avatar.png';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';



function Header() {


    return (
        <header className='header'>
            <div>
                <Link to='/'> <div className='header__logo'/> </Link>
                
                <div className='header__leftGroup'>

                    <div className='header__leftGroup_options'>
                        <div className='header__leftGroup_option'>
                            <SearchOutlinedIcon/>
                        </div>
                        <div className='header__leftGroup_option'>
                            <NotificationsOutlinedIcon/>
                            <span className='ellipse'></span>
                        </div>
                    </div>

                    <div className='header__leftGroup_userInfo'>
                        <div className='haeder_leftGroup_userAvatar'>
                            <img src={avatar} alt='avatar'/>
                        </div>
                        <div className='haeder_leftGroup_userName'>
                            <p>Kristin Watson</p>    
                        </div>
                    </div>
                    




                </div>
            </div>
        </header>
    )
}

export default Header
