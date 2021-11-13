import React from 'react'
import UpComponent from './UpComponent'
import LeftContent from './LeftContent'
import {useState} from "react"

function Info() {

    const [etat, setEtat] = useState(true);

    setTimeout(() => {
        setEtat(false)
    }, 1000)

    return (
        <div>
            <UpComponent />
            <div className="col-md-12" className="col-md-12">
                <div className="row">
                    <div className="col-md-2" style={{ paddingLeft: "0", paddingRight: "0" }}>
                        <LeftContent />
                    </div>
                    <div className="col-md-10 " style={{ backgroundColor: "#f8f8f8" }}>
                        <p>
                           <h3 className='mt-3'> A propos  de SE Monit <i className="fa fa-info-circle"></i></h3>
                        </p>
                        <p style={{
                            border: "1px solid silver",
                            padding: "20px",
                            fontSize: "16px",
                            textAlign:"justify"
                        }}>
                            SUN ENERGY MONITORING est une plateforme web qui permet une supervision d’une installation photovoltaïque aux propriétaires de cette dernière. Un moyen simple d’utilisation, de surveiller et de contrôler votre système. Il permet de consulter, suivre et gérer votre consommation d’énergie et votre production en temps réels via internet, pour tenir l’utilisateur au courant de la performance de son installation. Avec des fonctionnalités optimisées pour votre terminal, Sun Energy monitoring valorise votre logement. Et vous permet de gagner en efficacité et en disponibilité de l’énergie.
                            Elle fournit en une vue, en un coup d’œil l’état détaillé de votre système et des menus facilement accessibles, et d’utilisation. Les informations actuelles et passées sont toute disponibles (historisation complète), la météorologie est aussi affichée.
                            Contribuez à rendre plus écologique notre environnement en utilisant des sources d’énergies propres et renouvelables.

                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info
