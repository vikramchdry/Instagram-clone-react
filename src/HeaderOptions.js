import React from 'react';
import './styles/HeaderOptions.css';
import Avatar from '@material-ui/core/Avatar';
function HeaderOptions({ Icon, avatar }) {
    return (
        <div className="headerOptions">
            {Icon && <Icon className=" headerOption__icon" />}
            {avatar &&
                <Avatar className="headerOption__icon" src={avatar} alt="" />}


        </div>
    )
}

export default HeaderOptions
