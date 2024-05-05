import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Home.css';

const Home = () => {
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
                    <Link to="/exercicio1" className="btn bg-secondary-subtle"
                        style={{ marginBottom: '10px', display: 'block' }}>Exercícios Semana 1.1</Link>
                    <Link to="/exercicio2" className="btn bg-secondary-subtle"
                        style={{ marginBottom: '10px', display: 'block' }}>Exercícios Semana 1.2</Link>
                    <Link to="/exercicio3" className="btn bg-secondary-subtle"
                        style={{ marginBottom: '10px', display: 'block' }}>Exercícios Semana 2</Link>
                </div>
            </div>
        </div>
    )
}

export default Home;
