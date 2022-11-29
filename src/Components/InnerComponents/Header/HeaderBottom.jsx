import React from 'react'

import InfoIcon from '@mui/icons-material/Info';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';

function HeaderBottom(props){
    return(

        <div className="header-component  header-bottom">
            <InfoIcon style={props.themeStyle} className="headerIcon"/>
            <CircleNotificationsIcon style={props.themeStyle} className="headerIcon"/>
        </div>

    );
}


export default HeaderBottom;