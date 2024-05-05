import Hora from './Hora';
import Data from './Data';
import {Link} from 'react-router-dom';
import React from 'react';

function exercicio1() {
    return (
        <>
            <div className="card ms-5 me-5 mt-5 border border-info-subtle">
                <div className="card-header border border-info-subtle bg-secondary-subtle">
                    Semana 1
                </div>
                <div className="card-body">
                    <h5 className="card-title">Exercício 1</h5>
                    <br/>
                    <Data className="mt-5"/>
                    <Hora className="mt-5"/>
                <Link to="/home" className="btn bg-secondary-subtle mt-5">Voltar</Link>
                </div>
            </div>
        </>
    );
}

export default exercicio1;