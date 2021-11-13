import React from 'react'
import UpComponent from './UpComponent'
import LeftContent from './LeftContent'

function Config() {
    return (
        <div>
            <div>
                <UpComponent />
                <div className="col-md-12" className="col-md-12">
                    <div className="row">
                        <div className="col-md-2" style={{ paddingLeft: "0", paddingRight: "0" }}>
                            <LeftContent />
                        </div>
                        <div className="col-md-10 " style={{ backgroundColor: "#f8f8f8" }}>
                            <div>
                                <h5 className="mt-3">Dark</h5>
                                <input type="submit" className="btn btn-dark" value="Dark" />
                            </div>
                            <div>
                                <h5 className="mt-3">Light</h5>
                                <input type="submit" className="btn btn-" value="Light" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Config
