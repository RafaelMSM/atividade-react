import React from 'react';
import { Link } from 'react-router-dom';

const Semana5 = () => {
  return (
    <div className="container">
      <div className="card ms-5 me-5 border border-info-subtle card-style" style={{ marginTop: '50px' }}>
        <div className="card-header border border-info-subtle bg-secondary-subtle">
          <h1 style={{ color: '#fff' }}>Atividades de Laboratório de Engenharia</h1>
        </div>
        <div className="card-body">
          <p className="card-text text-home">
            Bem-vindo ao meu projeto, desenvolvido durante as aulas de Laboratório de Engenharia de Software.
          </p>
        </div>
      </div>

      <div className="card ms-5 me-5 mb-5 border border-info-subtle card-style" style={{ marginTop: '50px' }}>
        <div className="card-header border border-info-subtle bg-secondary-subtle">
          <h1 style={{ color: '#fff' }}>Navegando no Projeto</h1>
        </div>
        <div className="card-body">
          <Link to="/semana5/form1" className="btn bg-secondary-subtle" style={{ marginBottom: '10px', display: 'block' }}>City Quiz</Link>
          <Link to="/semana5/form2" className="btn bg-secondary-subtle" style={{ marginBottom: '10px', display: 'block' }}>Check-in</Link>
          <Link to="/semana5/accordion" className="btn bg-secondary-subtle" style={{ marginBottom: '10px', display: 'block' }}>Accordion</Link>
          <Link to="/semana5/messenger" className="btn bg-secondary-subtle" style={{ marginBottom: '10px', display: 'block' }}>Messenger</Link>
          <div className="text-center">
            <Link to="/home" className="btn bg-secondary-subtle mt-5">Voltar</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Semana5;
