import LeftContent from "./LeftContent";
import UpComponent from "./UpComponent";
import { useState } from "react"
import "../css/Meteo.css";

function Meteo() {

    const apiKey = "c7dcfaf683ad73b807f76eb8b1278d04";
    const [weatherData, setWeaterData] = useState([{}]);
    const [city, setCity] = useState("");

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
                        <main style={{ marginTop: "20px" }}>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Rechercher"
                                onChange={e => setCity(e.target.value)}
                                value={city}
                                onKeyPress={getWeather}
                            />

                            {
                                typeof weatherData.main === "undefined" ? (
                                    <>
                                        <p>
                                            Entrer le nom de la ville que vous souhaitez voir sa météo.
                                        </p>
                                    </>
                                ) : (
                                    <>
                                        <p>{weatherData.name}</p>
                                        <p> Température : <i className="temp"> {Math.round(((weatherData.main.temp) - 32) * 5 / 9)} °C </i></p>
                                        <p>{weatherData.weather[0].main}</p>
                                        <p>{weatherData.weather[0].icon}</p>


                                    </>
                                )
                            }
                        </main>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Meteo;