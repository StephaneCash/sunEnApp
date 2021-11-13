import React from 'react'
import UpComponent from './UpComponent'
import LeftContent from './LeftContent'

function Info() {
    return (
        <div>
            <UpComponent />
            <div className="col-md-12" className="col-md-12">
                <div className="row">
                    <div className="col-md-2" style={{ paddingLeft: "0", paddingRight: "0" }}>
                        <LeftContent />
                    </div>
                    <div className="col-md-10 content10" style={{ backgroundColor: "#f8f8f8" }}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info
