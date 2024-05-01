import Hora from './Hora';
import Data from './Data';
import { Link } from 'react-router-dom';
import React from 'react';

const estiloCard = {
  margin: '5px',
  border: '1px solid #b3d7ff',
};

const estiloHeader = {
  border: '1px solid #b3d7ff',
  backgroundColor: '#e5f0ff',
};

const estiloBotao = {
  backgroundColor: '#e5f0ff',
};

function exercicio1() {
  return (
    <>
      <div className="card" style={estiloCard}>
        <div className="card-header" style={estiloHeader}>
          Semana 1
        </div>
        <div className="card-body">
          <h5 className="card-title">Exercício 1</h5>
          <p className="card-text">
            Faça as alterações necessárias no projeto criado para incluir o
            exemplo da aula passada (Data e hora) como um novo componente
            dentro da sua aplicação.
          </p>
          <Data className="mt-5" />
          <Hora className="mt-5" />
          <Link to="/selecao-exercicios/semana1" className="btn" style={estiloBotao}>
            Voltar
          </Link>
        </div>
      </div>
    </>
  );
}

export default exercicio1;
