import "../css/Circle.css"
import { useState, useEffect } from "react";

function Circle() {

    const [num, setNum] = useState("00");

    let count = 0;

    setTimeout(() => {
        setNum(100)
    }, 1100);

    useEffect(() => {
    })


    return (
        <>
            <div className="box">
                <div className="pourcent circle">
                    <svg>
                        <circle cx={"50px"} cy={"50px"} r={"50px"}></circle>
                        <circle cx={"50px"} cy={"50px"} r={"50px"}></circle>
                    </svg>

                    <span>{num} %</span>
                </div>
            </div>
        </>
    )
}

export default Circle;