import LeftContent from "./LeftContent";
import UpComponent from "./UpComponent";
import "../css/MainContent.css";
import Circle from "./Circle";
import Load from "./Load";
import { useState } from "react"

function MainContent() {

    const [etatLoad, setEtatLoad] = useState(true);
    const [a, setA] = useState(false);

    setTimeout(() => {
        setEtatLoad(false)
    }, 1000)

    return (
        <>
            <UpComponent />
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-2" style={{ paddingLeft: "0", paddingRight: "0" }} >
                        <LeftContent />
                    </div>

                    <div className="col-md-10 mainContent">
                        <div className="col-md-12" style={{ paddingLeft: "0", paddingRight: "0" }}>
                            <p style={{ fontSize: "20px" }}>Dashboard <i className="fa fa-tachometer-alt"></i></p>
                            <div style={{ borderBottom: "1px solid silver", marginBottom: '10px' }}></div>
                            <div className="row">
                                <div className="col-md-12 mainContent_1 " >
                                    <div className="row">
                                        <div className="col-md-9">
                                            <div className="row" style={{}}>
                                                <div className="col-md-6">
                                                    <div className="col-md-12 etatParent " style={{ paddingLeft: "0", paddingRight: "0", border: "1px solid silver" }}>
                                                        <p style={{ textAlign: "center" }}>
                                                            ETAT : NORMAL
                                                        </p>
                                                        <div className="contentEtat d-flex">

                                                            <div style={{ marginRight: "30px", border: "1px solid silver", width: "180px", borderRadius: "5px", padding: "10px", textAlign: "center" }}>
                                                                AUTO-CONSOMMATION  <br /><br />

                                                                <p style={{ paddingLeft: "23px", }}>
                                                                    {
                                                                        a === true ? (
                                                                            <>
                                                                                00
                                                                            </>
                                                                        ) : (
                                                                            <>
                                                                                <Circle />
                                                                            </>
                                                                        )
                                                                    }
                                                                </p>
                                                            </div>

                                                            <div style={{ border: "1px solid silver", borderRadius: "5px", padding: "10px", textAlign: "center", width: "180px" }}>
                                                                AUTONOMIE

                                                                <br /><br />

                                                                <p style={{ paddingLeft: "23px", }}>
                                                                    <Circle />
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="row">
                                                                <div className="col-md-12 champs">
                                                                    Champs photovoltaiques : 2 panneaux solaires <br /> <br />
                                                                    <div className="d-flex">
                                                                        <div style={{ marginLeft: '60px' }} >
                                                                            <table className="table table-striped">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <i className="fa fa-solar-panel"></i>
                                                                                        </td>
                                                                                        <td> <i className="fa fa-solar-panel"></i></td>
                                                                                        <td> <i className="fa fa-solar-panel"></i> </td>
                                                                                        <td>  <i className="fa fa-solar-panel"></i> </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td> <i className="fa fa-solar-panel"></i> </td>
                                                                                        <td> <i className="fa fa-solar-panel"></i> </td>
                                                                                        <td> <i className="fa fa-solar-panel"></i> </td>
                                                                                        <td> <i className="fa fa-solar-panel"></i> </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td> <i className="fa fa-solar-panel"></i> </td>
                                                                                        <td> <i className="fa fa-solar-panel"></i> </td>
                                                                                        <td> <i className="fa fa-solar-panel"></i> </td>
                                                                                        <td> <i className="fa fa-solar-panel"></i> </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                        <div style={{ marginLeft: '20px' }}>
                                                                            <table className="table table-striped">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <i className="fa fa-solar-panel"></i>
                                                                                        </td>
                                                                                        <td> <i className="fa fa-solar-panel"></i></td>
                                                                                        <td> <i className="fa fa-solar-panel"></i> </td>
                                                                                        <td>  <i className="fa fa-solar-panel"></i> </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td> <i className="fa fa-solar-panel"></i> </td>
                                                                                        <td> <i className="fa fa-solar-panel"></i> </td>
                                                                                        <td> <i className="fa fa-solar-panel"></i> </td>
                                                                                        <td> <i className="fa fa-solar-panel"></i> </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td> <i className="fa fa-solar-panel"></i> </td>
                                                                                        <td> <i className="fa fa-solar-panel"></i> </td>
                                                                                        <td> <i className="fa fa-solar-panel"></i> </td>
                                                                                        <td> <i className="fa fa-solar-panel"></i> </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-12 temperature" style={{ textAlign: "center" }}>
                                                                    Température <br /><br />
                                                                    <div>
                                                                        <i className=" fa fa-temperature-high fa-3x"></i> <br />
                                                                        00 %
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 date">
                                            <div className="row" >
                                                <div className="el ml-2">
                                                    <h5 style={{ border: "1px solid silver", padding: "5px" }}>Date et Heure <i className="fa fa-calendar-alt"></i> </h5>
                                                    <div style={{ border: "1px solid silver", padding: "5px" }}>
                                                        <h6 className="mt-2">Contacts informations</h6><br />
                                                        <i className="fa fa-phone"></i> Téléphone : <br /><br />
                                                        <i className="fa fa-envelope"></i> Email : <br /><br />
                                                        <i className="fab fa-facebook-f"></i> facebook (meta) : <br /><br />
                                                        <i className="fab fa-whatsapp"></i> Whatsapp :
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 mainContent_2">
                                    <div className="row">
                                        <div className="col-md-6 charge">
                                            <table className="table">
                                                <tbody style={{ border: "1px solid silver" }}>
                                                    <tr>
                                                        <td>
                                                            <br />
                                                            <i className="fa fa-battery"></i>
                                                        </td>
                                                        <td style={{ textAlign: "center" }}>
                                                            <i>Etat de charge</i> <br />
                                                            <div class="progress progress-md">
                                                                <div class="progress-bar bg-success" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <br />
                                                            92 %
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <br />
                                                            <i className="fa fa-sun"></i>
                                                        </td>
                                                        <td style={{ textAlign: "center" }}> <i>Production des panneaux </i><br />
                                                            <div class="progress progress-md">
                                                                <div class="progress-bar bg-primary" role="progressbar" style={{ width: '0%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <br />
                                                            00 W
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <br />
                                                            <i className="fa fa-plug"></i></td>
                                                        <td style={{ textAlign: "center" }}> <i>Consommation </i><br />
                                                            <div class="progress progress-md">
                                                                <div class="progress-bar bg-" role="progressbar" style={{ width: '65%', backgroundColor: "orange" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <br />
                                                            65 W</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ padding: '17px' }}><i className="fa fa-battery-empty"></i></td>
                                                        <td style={{ textAlign: "center", padding: '17px' }}>
                                                            <i>Statut de charge : ON </i>
                                                        </td>

                                                        <td style={{ padding: '17px' }}>00 % <br /></td>
                                                        <br />
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="col-md-6 humidite">
                                            <table className="table" >
                                                <tbody style={{ border: "1px solid silver", }}>
                                                    <tr >
                                                        <td style={{ padding: "20px" }}>
                                                            <i className="fas fa-cloud"></i>
                                                        </td>
                                                        <td style={{ padding: "20px" }}>
                                                            <i>humidité sur le panneau</i>
                                                        </td>
                                                        <td style={{ padding: "20px" }}>00 %</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ padding: "20px" }}><i class="fas fa-thermometer-half"></i></td>
                                                        <td style={{ padding: "20px" }}>
                                                            <i>Température sur le panneau</i>
                                                        </td>
                                                        <td style={{ padding: "20px" }}>19 °C</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ padding: "20px" }}><i class="fas fa-thermometer-half"></i></td>
                                                        <td style={{ padding: "20px" }}><i>Température ambiante</i> </td>
                                                        <td style={{ padding: "20px" }}>23 %</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ padding: "20px" }}><i className="fas fa-redo"></i></td>
                                                        <td style={{ padding: "20px" }}><i>Cycle de charge battery</i></td>
                                                        <td style={{ padding: "20px" }}>4</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Load
                show={etatLoad}
            />
        </>
    )
}
export default MainContent;