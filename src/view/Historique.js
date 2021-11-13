import LeftContent from './LeftContent'
import UpComponent from './UpComponent';
import "../css/Historique.css"
import Load from "./Load";
import { Line, Bar } from "react-chartjs-2"
import { useState, useEffect } from "react";
import Data from "./Data"


function Historique() {

    const [etatLoad, setEtatLoad] = useState(true);
    const [a, setA] = useState(false);
    const [dataV, setData] = useState([]);


    const fetchData = () => {
        Data.getAll().then(res => {
            const donnees = res.data;
            setEtatLoad(false);
            setA(true)
            setData(donnees);
        })
    }


    useEffect(() => {
        fetchData()
    }, [])

    const data4 = {
        labels: ['Nov 01', 'Nov 02', 'Nov 03', 'Nov 04', 'Nov 05', 'Nov 06', 'Nov 07'],
        datasets: [
            {
                label: 'Puissance instantannée',
                data: [2, 9, 3, 5, 2, 3, 6],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options2 = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };

    const data2 = {
        labels: ['Nov 01', 'Nov 02', 'Nov 03', 'Nov 04', 'Nov 05', 'Nov 06', 'Nov 07'],
        datasets: [
            {
                label: 'Charge des batteries ',
                data: [10, 16, 4, 6, 17, 21, 1],
                fill: false,
                backgroundColor: 'silver',
                borderColor: 'black',
                width: "23px"
            },
        ],
    };

    const data5 = {
        labels: ['Nov 01', 'Nov 02', 'Nov 03', 'Nov 04', 'Nov 05', 'Nov 06', 'Nov 07', 'Nov 08', 'Nov 09', 'Nov 10', 'Nov 11', 'Nov 12', 'Nov 13', 'Nov 14', 'Nov 15', 'Nov 16', 'Nov 17', 'Nov 18', 'Nov 19', 'Nov 20', 'Nov 21'],
        datasets: [
            {
                label: 'Température du local ',
                data: [10, 16, 4, 6, 17, 11, 18, 11, 12, 9, 5, 26, 13, 7, 8, 12, 3, 12, 14, 14, 14, 11, 9, 7, 5],
                fill: false,
                backgroundColor: '#3a68ad',
                borderColor: 'black',
                width: "23px"
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    const rand = () => Math.round(Math.random() * 20 - 10);

    const data3 = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                type: 'line',
                label: 'Cycle 1',
                borderColor: 'rgb(54, 162, 235)',
                borderWidth: 2,
                fill: false,
                data: [rand(), rand(), rand(), rand(), rand(), rand()],
            },
            {
                type: 'bar',
                label: 'Cycle 2',
                backgroundColor: 'rgb(255, 99, 132)',
                data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
                borderColor: 'white',
                borderWidth: 2,
            },
            {
                type: 'bar',
                label: 'Cycle 3',
                backgroundColor: 'rgb(75, 192, 192)',
                data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
            },
        ],
    };

    return (
        <>
            <UpComponent />
            <div className="col-md-12" >
                <div className="row">
                    <div className="col-md-2" style={{ paddingLeft: "0", paddingRight: "0" }}>
                        <LeftContent />
                    </div>
                    <div className="col-md-10" style={{ paddingLeft: "20px", paddingRight: "0", marginTop: "20px", backgroundColor: "#f8f8f8" }}>
                        <center>  <h5>Vue d'ensemble de mon installation électrique autonôme</h5> </center>
                        <div className="col-md-12">
                            <div className="row">

                                <div className="col-md-6">

                                    <Line
                                        data={data2}
                                        options={options}
                                    />
                                    <h5 className="mt-4" style={{ textAlign: "center" }}>Puissance instantanée</h5>
                                    <Bar data={data4} options={options2} />
                                </div>
                                <div className="col-md-6">
                                    <Line
                                        data={data5}
                                        options={options}
                                    />
                                    <h5 className="mt-4" style={{ textAlign: "center" }}>Consommation</h5>

                                    <Bar data={data3} />

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

export default Historique;