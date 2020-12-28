import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './styles/Header.css';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import TelegramIcon from '@material-ui/icons/Telegram';
import ExploreIcon from '@material-ui/icons/Explore';
import { Avatar } from '@material-ui/core';


function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="" />

                <div className="header__search">
                    <SearchIcon /><input type="text" placeholder="Search" />
                </div>
            </div>
            <div className="header__right">
                <HeaderOptions Icon={HomeIcon} />
                <HeaderOptions Icon={TelegramIcon} />
                <HeaderOptions Icon={ExploreIcon} />
                <HeaderOptions Icon={FavoriteBorderIcon} />
                <HeaderOptions avatar={Avatar} />

            </div>

        </div>
    );
}

export default Header
