import LeftContent from "./LeftContent";
import UpComponent from "./UpComponent";
import { useState } from "react"
import "../css/Meteo.css";
import Ng from "../img/ng.PNG"
import Load from "./Load"

function Meteo() {

    const apiKey = "c7dcfaf683ad73b807f76eb8b1278d04";
    const [weatherData, setWeaterData] = useState([{}]);
    const [city, setCity] = useState("");
    const [etat, setEtat] = useState(true);

    setTimeout(() => {
        setEtat(false)
    }, 1000);

    const getWeather = (event) => {
        if (event.key === "Enter") {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`).then(
                response => response.json()
            ).then(
                data => {
                    setWeaterData(data)
                    setCity("")
                }
            )
        }
    }

    console.log(weatherData)

    return (
        <>
            <UpComponent />
            <div className="col-md-12" className="col-md-12">
                <div className="row">
                    <div className="col-md-2" style={{ paddingLeft: "0", paddingRight: "0" }}>
                        <LeftContent />
                    </div>
                    <div className="col-md-10 content10" style={{ backgroundColor: "#f8f8f8" }}>
                        <p>
                            Météo <img src={Ng} />
                        </p>
                        <main style={{ marginTop: "20px" }}>


                            <input
                                type="text"
                                className="form-control"
                                placeholder="Rechercher une ville ou un pays..."
                                onChange={e => setCity(e.target.value)}
                                value={city}
                                onKeyPress={getWeather}
                                style={{ width: "40%", marginBottom: "20px" }}
                            />

                            {
                                typeof weatherData.main === "undefined" ? (
                                    <>
                                        <p style={{
                                            border: "1px solid silver",
                                        }}>
                                            Entrer le nom de la ville que vous souhaitez voir sa météo.
                                        </p>
                                    </>
                                ) : (
                                    <>
                                        <div style={{
                                            border: "1px solid silver",
                                            height: "auto",
                                            backgroundColor: "transparent",
                                            boxShadow: "2px 2px 2px white",
                                        }}>
                                            <p>{weatherData.name}, {weatherData.sys.country}</p>
                                            <p className="temp"> {Math.round(((weatherData.main.temp) - 32) * 5 / 9)} °C</p>
                                            <p>{weatherData.weather[0].main}</p>
                                            <p>{weatherData.main.humidity}</p>
                                            <p>{weatherData.weather[0].icon}</p>

                                        </div>
                                    </>
                                )
                            }
                        </main>
                    </div>
                </div>
            </div>
            <Load
                show={etat}
            />
        </>
    )
}

export default Meteo;