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
                                                <div className="etatNormal">
                                                    ETAT NORMAL
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                Champs votov
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4" style={{ borderLeft: "1px solid silver" }}>
                                    <div className="" style={{ borderBottom: "1px solid silver" }}>
                                        Date et Heure
                                    </div>
                                    <div style={{ display: "block" }}>
                                        Contacts informations <br />
                                        Téléphone <br />
                                        Email <br />
                                        Facebook <br />
                                        Whatsapp
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
export default MainContent;