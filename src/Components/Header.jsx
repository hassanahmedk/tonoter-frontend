import React from "react";
import { useSelector } from "react-redux";

import HeaderTop from "./InnerComponents/Header/HeaderTop"
import HeaderMiddle from "./InnerComponents/Header/HeaderMiddle"
import HeaderBottom from "./InnerComponents/Header/HeaderBottom"



function Header (){
    const {themeStyles:{header}} = useSelector(state => state.theme);

    return(

        <div id="header" style={header}>

            <HeaderTop themeStyle={header.headerIcon} />
            <HeaderMiddle themeStyle={header.headerIcon} />
            <HeaderBottom themeStyle={header.headerIcon} />


        </div>

    );
}

export default Header;