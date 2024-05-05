// Exercicio3.jsx

import React from 'react';
import ContadorDePessoas from './ContadorDePessoas'; // Assumindo que o componente esteja no mesmo diretório

function Exercicio3() {
    return (
        <div className="card ms-5 me-5 border border-info-subtle card-style" style={{ marginTop: '50px' }}>
                <div className="card-header border border-info-subtle bg-secondary-subtle">
                    <h1 style={{ color: '#fff' }}>Página do Exercício 3</h1>
                   
                </div>
                <ContadorDePessoas />
            </div>
    );
}

export default Exercicio3;
