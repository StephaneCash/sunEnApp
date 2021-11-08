import "../css/Status.css"
import { useState, useEffect } from "react";

function Status() {

    const [num, setNum] = useState("00");

    let count = 0;

    setTimeout(() => {
        setNum(95)
    }, 2000);

    useEffect(() => {
    })


    return (
        <>
            <div className="box">
                <div className="pourcent status">
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

export default Status;