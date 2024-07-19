import { useState } from "react";

import ArrowBackDown from "../assets/arrows/arrow-back_up.png";
import ArrowBackUp from "../assets/arrows/arrow-back_down.png";

function Collapse ({title, text}) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleArrow = () => {
        setIsOpen(!isOpen);
    }

    return(
        <div className="collapsesContainer">
                <div className="collapseTitle" onClick={toggleArrow}> {title}
                    <img
                    src= {ArrowBackUp}
                    alt="Arrow"
                    className= {isOpen ? "arrowBackDown" : "arrowBackUp"}
                    />
                </div>
                <div className={isOpen ? "collapseText" : "collapseTextOpen"}>
                    {text}</div>
        </div>
    )
}

export default Collapse