import LeftContent from './LeftContent'
import UpComponent from './UpComponent';

function Historique() {
    return (
        <>
            <UpComponent />
            <div className="col-md-12" >
                <div className="row">
                    <div className="col-md-2" style={{ paddingLeft: "0", paddingRight: "0" }}>
                        <LeftContent />
                    </div>
                    <div className="10" style={{ paddingLeft: "20px", paddingRight: "0" }}>
                        <table className="table table-bordered table-striped mt-3">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Evénement</th>
                                    <th>Date de début</th>
                                    <th>Date de fin</th>
                                    <th>Constat</th>
                                    <th>Décision</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Préléver les différentes grandeurs physiques et électriques</td>
                                    <td>12 mars 2021</td>
                                    <td>13 mars 2021</td>
                                    <td>Constat amer</td>
                                    <td>Bânir ce système</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Préléver les différentes grandeurs physiques et électriques</td>
                                    <td>12 mars 2021</td>
                                    <td>13 mars 2021</td>
                                    <td>Constat amer</td>
                                    <td>Bânir ce système</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Historique;