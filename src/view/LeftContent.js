import "../css/LeftContent.css";

function LeftContent() {
    return (
        <>
            <div className="ListeSide">
                <a href="index.php" className="list-group-item list-group-item-action nav-link">
                    <center>
                        <i className="IconHome fa fa-home "></i>
                    </center>
                    <div style={{ marginTop: "-26px" }}>Accueil</div>
                </a>

                <a href="profile.php" className="list-group-item list-group-item-action nav-link">
                    <center>
                        <i className="fa fa-history"></i>
                    </center>
                    <div style={{ marginTop: "-26px" }}>Historique</div>
                </a>
                <a href="" className="list-group-item list-group-item-action nav-link">
                    <center>
                        <i className="fa fa-cloud"></i>
                    </center>
                    <div style={{ marginTop: "-26px" }}>Météo</div>
                </a>
                <a href="" className="list-group-item list-group-item-action nav-link">
                    <center>
                        <i className="fa fa-info"></i>
                    </center>
                    <div style={{ marginTop: "-26px" }}>
                        Infos
                    </div>
                </a>

                <a href="" className="list-group-item list-group-item-action nav-link">
                    <center>
                        <i className="fa fa-gear"></i>
                    </center>
                    <div style={{ marginTop: "-26px" }}>
                        Configuration
                    </div>
                </a>
            </div>
        </>
    )
}
export default LeftContent;