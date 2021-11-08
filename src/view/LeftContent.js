import "../css/LeftContent.css";
import { Link, NavLink } from "react-router-dom"

function LeftContent() {
    return (
        <>
            <div className="ListeSide">
                <NavLink to="/home" className="nav-link">
                    <center>
                        <i className="IconHome fa fa-home "></i>
                    </center>
                    <div style={{ marginTop: "-26px" }}>Accueil</div>
                </NavLink>

                <NavLink to="/historique" className="list-group-item list-group-item-action nav-link">
                    <center>
                        <i className="fa fa-history"></i>
                    </center>
                    <div style={{ marginTop: "-26px" }}>Historique</div>
                </NavLink>
                <NavLink to="/meteo" className="list-group-item list-group-item-action nav-link">
                    <center>
                        <i className="fa fa-cloud"></i>
                    </center>
                    <div style={{ marginTop: "-26px" }}>Météo</div>
                </NavLink>
                <NavLink to="/info" className="list-group-item list-group-item-action nav-link">
                    <center>
                        <i className="fa fa-info"></i>
                    </center>
                    <div style={{ marginTop: "-26px" }}>
                        Infos
                    </div>
                </NavLink>

                <NavLink to="/conf" className="list-group-item list-group-item-action nav-link">
                    <center>
                        <i className="fa fa-gear fa-spin"></i>
                    </center>
                    <div style={{ marginTop: "-26px" }}>
                        Configuration
                    </div>
                </NavLink>
                <Link to="/" className="list-group-item list-group-item-action nav-link">
                    <center>
                        <i className="fa fa-power-off"></i>
                    </center>
                    <div style={{ marginTop: "-26px" }}>
                        Déconnexion
                    </div>
                </Link>
            </div>
        </>
    )
}
export default LeftContent;