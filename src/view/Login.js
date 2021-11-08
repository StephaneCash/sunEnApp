import "../css/Login.css"
import { useState } from "react";
import { useHistory } from "react-router-dom"

function Login() {

    const [a, setA] = useState(true);
    const [err, setErr] = useState("");
    const [etat, setEtat] = useState(false)

    let history = useHistory();

    let username = "";
    let password = "";

    const handleInput = (e) => {
        let valueInput = e.target.value;
        username = valueInput;
    }

    const handlePass = (e) => {
        let valuePass = e.target.value;
        password = valuePass;
    }

    function verif(username, password) {

        if (username && password) {
            if (username === "fendji" && password === "1234") {
                history.push('/home')
                setA(true)
                setEtat(true)
            }
            else {
                setA(false)
                setErr("Votre username ou password n'est pas valide")
                setEtat(true)
            }
        } else if (username === "" || password === "") {
            if (username === "") {
                setA(false);
                setEtat(true)
                setErr("Veuillez renseigner votre username");
            } else if (password === "") {
                setA(false);
                setEtat(true)
                setErr("Veuillez renseigner votre password");
            }
        }
    }

    const seConnecter = () => {
        verif(username, password)
    }

    return (
        <>
            <div className="container login">
                <div style={{ textAlign: 'center', }}>
                    <h4>Connectez-vous</h4>
                    <i className="fa fa-user-circle fa-3x mt-2"></i>
                </div>

                {
                    a === false ? (
                        <>
                            <div className="alert alert-danger mt-2">
                                {err}
                            </div>
                        </>
                    ) : ""
                }

                <div className="form-group mt-3">
                    <label>Votre username</label>
                    <div className="user-field">
                        <div className="input-group mb-2">
                            <input
                                type="text"
                                className="form-control "
                                placeholder="Votre username"
                                onChange={handleInput}
                                autoComplete="off"
                            />
                            <div className="input-group-append">
                                <i className="input-group-text fa fa-user" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label>Votre password</label>
                    <div className="user-field">
                        <div className="input-group mb-2">
                            <input type="password"
                                className="form-control "
                                placeholder="Votre password"
                                onChange={handlePass}
                            />
                            <div className="input-group-append">
                                <i className="input-group-text fa fa-key" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                </div>


                {
                    etat === true ? (
                        <>
                            <button className="btn btn-primary btnS" onClick={seConnecter}>
                                Connexion...
                            </button>
                        </>
                    ) : (
                        <>
                            <button className="btn btn-primary btnS" onClick={seConnecter}>
                                Se Connecter
                            </button>
                        </>
                    )
                }

                <button className="btn btn btnE">
                    S'enregistrer
                </button>
            </div>
        </>
    )
}

export default Login;