import React from 'react';
import { Link } from "react-router-dom";

const Semana4 = () => {
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
                    <Link to="/semana4/bucketlist" className="btn bg-secondary-subtle"
                        style={{ marginBottom: '10px', display: 'block' }}>Bucket List</Link>
                    <Link to="/semana4/counter" className="btn bg-secondary-subtle"
                        style={{ marginBottom: '10px', display: 'block' }}>Contador</Link>
                    <Link to="/semana4/counterlist" className="btn bg-secondary-subtle"
                        style={{ marginBottom: '10px', display: 'block' }}>Lista de Contadores</Link>
                    <Link to="/semana4/form" className="btn bg-secondary-subtle"
                        style={{ marginBottom: '10px', display: 'block' }}>Formulário</Link>
                    <Link to="/semana4/form2" className="btn bg-secondary-subtle"
                        style={{ marginBottom: '10px', display: 'block' }}>Formulário 2</Link>
                    <Link to="/semana4/form3" className="btn bg-secondary-subtle"
                        style={{ marginBottom: '10px', display: 'block' }}>Formulário 3</Link>
                    <Link to="/semana4/gallery" className="btn bg-secondary-subtle"
                        style={{ marginBottom: '10px', display: 'block' }}>Galeria</Link>
                    <Link to="/semana4/list" className="btn bg-secondary-subtle"
                        style={{ marginBottom: '10px', display: 'block' }}>Lista</Link>
                    <Link to="/semana4/list2" className="btn bg-secondary-subtle"
                        style={{ marginBottom: '10px', display: 'block' }}>Lista 2</Link>
                    <Link to="/semana4/list3" className="btn bg-secondary-subtle"
                        style={{ marginBottom: '10px', display: 'block' }}>Lista 3</Link>
                    <Link to="/semana4/list4" className="btn bg-secondary-subtle"
                        style={{ marginBottom: '10px', display: 'block' }}>Lista 4</Link>
                    <Link to="/semana4/movingdot" className="btn bg-secondary-subtle"
                        style={{ marginBottom: '10px', display: 'block' }}>Ponto em Movimento</Link>
                    <Link to="/semana4/shapeeditor" className="btn bg-secondary-subtle"
                        style={{ marginBottom: '10px', display: 'block' }}>Editor de Formas</Link>
                    <Link to="/semana4/toolbar" className="btn bg-secondary-subtle"
                        style={{ marginBottom: '10px', display: 'block' }}>Barra de Ferramentas</Link>
                    <div className="text-center">
                        <Link to="/home" className="btn bg-secondary-subtle mt-5">Voltar</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Semana4;
