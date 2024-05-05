import {Link} from 'react-router-dom';
import React from 'react';
import Letreiro from "./Letreiro";

function Exercicio2() {
    return (
        <>
            <div className="card ms-5 me-5 mt-5 border border-info-subtle">
                <div className="card-header border border-info-subtle bg-secondary-subtle">
                    Semana 1
                </div>
                <div className="card-body">
                    <h5 className="card-title">Exercício 2</h5>
                   <br/>
                    <Letreiro className="mt-5"/>
                    <Link to="/home" className="btn bg-secondary-subtle mt-5">Voltar</Link>
                </div>
            </div>
        </>
    );
}

export default Exercicio2;