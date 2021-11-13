import "../css/UpComponent.css";

function UpComponent() {
    return (
        <>
            <div className="upComponent">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-3 mt-3">
                            <h3 style={{
                                width: "80px", 
                                height: "80px",
                                border: "5px solid silver",
                                borderRadius: "50%", textAlign: "center",
                                marginTop: "-15px"
                            }}>SE Monit</h3>
                        </div>
                        <div className="col-md-6"></div>
                        <div className="col-md-3">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-8"></div>
                                    <div className="col-md-2">
                                        <i className="fa fa-user-circle fa-2x mt-3"></i>
                                        <p style={{ marginLeft: "-5px", textDecoration: "underline" }}>Fendji</p>
                                    </div>
                                    <div className="col-md-2 mt-2">
                                        Langue
                                        <div>
                                            <select >
                                                <option className="form-control" >en</option>
                                                <option className="form-control" >fr</option>
                                                <option className="form-control" >ar</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default UpComponent;