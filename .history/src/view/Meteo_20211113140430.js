import LeftContent from "./LeftContent";
import UpComponent from "./UpComponent";
import { useState } from "react"
import "../css/Meteo.css";

const api = {
    key: "5e706520a3d085e28d3b5fe582c91e38",
    base: "http://maps.openweathermap.org/maps/2.0"
}

function Meteo() {

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const search = evt => {
        if (evt.key === "Enter") {
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result);
                    setQuery('');
                    console.log(result)
                });
        }
    }

    const dateBuilder = (d) => {
        let months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"];
        let days = ['Ludni', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`;
    }

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
                            <div className="search-box">
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={e => setQuery(e.target.value)}
                                    placeholder="Rechercher..."
                                    value={query}
                                    onKeyPress={search}
                                />
                            </div>
                            <div className="">
                                {dateBuilder(new Date())}
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Meteo;