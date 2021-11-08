import "../css/CircleEmpy.css"
import { useState, useEffect } from "react";

function CircleEmpy() {

    const [num, setNum] = useState("00");

    let count = 0;

    setTimeout(() => {
        setNum(100)
    }, 1100);

    useEffect(() => {
    })


    return (
        <>
            <div className="containe">
                <div className="ui-widget">
                    <span className="ui-label">00 %</span>
                </div>
            </div>
        </>
    )
}

export default CircleEmpy;