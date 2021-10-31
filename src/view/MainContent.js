import LeftContent from "./LeftContent";

function MainContent() {
    return (
        <>
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-2" style={{ marginLeft: "-30px" }}>
                        <LeftContent />
                    </div>
                    <div className="col-md-10">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="col-md-12">
                                        <div className="row">
                                            <div className="col-md-8">
                                                Etat
                                            </div>
                                            <div className="col-md-4">
                                                Champs votov
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4" style={{ borderLeft: "1px solid black" }}>
                                    Date et Heure
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MainContent;