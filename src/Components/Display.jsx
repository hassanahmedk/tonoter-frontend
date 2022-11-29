import {useState, useEffect} from "react"
import {  CSSTransition } from 'react-transition-group';
import { useSelector } from "react-redux";

import DisplayHeader from "./InnerComponents/Display/DisplayHeader"

import "../assets/css/display.css"
import Logo from "./InnerComponents/Misc/Logo"
import displayImage from '../assets/illustrations/displayIdle.svg';

import 'animate.css';

function Display (props){

    const {themeStyles:{display}} = useSelector(state => state.theme)
    const {status:displayStatus, noteToDisplay} = useSelector(state => state.display)


      const [inProp, setInProp] = useState(false);
      useEffect(()=>{
        setInProp(true);
      }, [])

      let displayClass = "display-screen-inactive-mobile";

      if(displayStatus){
        displayClass = "display-screen-active-mobile";
    } else {
        displayClass = "display-screen-inactive-mobile";

      }

    return(

        !displayStatus ?

        (
        <div className="display-idle" style={display.displayIdle}>
            <div className="display-idle-top">
                <Logo />
            </div>
            <div className="display-idle-bottom">
                <img className="display-idle-img" src={displayImage} alt="" />
                <h2>Click any note to display</h2>
            </div>
        </div>
        )
        :
        (
        <div id="display-screen" class={displayClass} style={display.displayScreen}>
            <DisplayHeader />
            <CSSTransition in={inProp} timeout={300} classNames={{
                                    enterActive: 'animate__animated animate__zoomIn',
                                    exitActive: 'animate__animated animate__zoomOut'
                                  }} unmountOnExit>
                <div className="display-body">
                    <h1 className="display-title" style={display.displayTitle}> {noteToDisplay.title} </h1>
                    <p style={display.displayContent}> {noteToDisplay.content} </p>
                </div>
            </CSSTransition>
            <div className="display-bottom">
                    Work
                </div>
        </div>
    )
    );
}

export default Display;