import LeftContent from "./LeftContent";
import UpComponent from "./UpComponent";

function Meteo() {
    return (
        <>
            <UpComponent />
            <div className="col-md-12" className="col-md-12">
                <div className="row">
                    <div className="col-md-2" style={{ paddingLeft: "0", paddingRight: "0" }}>
                        <LeftContent />
                    </div>
                    <div className="col-md-10">
                        jj
                    </div>
                </div>
            </div>
        </>
    )
}

export default Meteo;