import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="container">
            <div className="card ms-5 me-5 border border-info-subtle card-style" style={{marginTop: '50px'}}>
                <div className="card-header border border-info-subtle bg-info-subtle">
                    <h1>Trabalho de Laboratório de Engenharia</h1>
                </div>
                <div className="card-body">
                    <p className="card-text text-home">Este é um projeto que estou desenvolvendo durante as aulas de Laboratório
                        de Engenharia de Software (Os exercícios estão sendo atualizados por semana). Sinta-se à vontade
                        para me acompanhar os próximos capítulos desta saga de aprendizado 😄🚀 <br/><br/>❌ Por favor,
                        respeite os direitos autorais deste trabalho e evite qualquer forma de cópia não autorizada.❌
                    </p>
                </div>
            </div>
            <div className="card ms-5 me-5 border border-info-subtle card-style" style={{marginTop: '50px'}}>
                <div className="card-header border border-info-subtle bg-info-subtle">
                    <h1>Manual</h1>
                </div>
                <div className="card-body">
                    <p className="card-text text-home">Este projeto conta com um painel de navegação que você pode utilizar para
                        acessar os exercícios feitos por mim até o momento e testa-los da melhor maneira possível
                        😄🚀 <br/><br/>⚠️ Todos os exercícios possuem botões para voltar a tela anterior, use-os sempre
                        que quiser retornar a pagina anterior ⚠️</p>
                </div>
            </div>
            <div className="card ms-5 me-5 mb-5 border border-info-subtle card-style" style={{marginTop: '50px'}}>
                <div className="card-header border border-info-subtle bg-info-subtle">
                    <h1>Acesso ao Projeto</h1>
                </div>
                <div className="card-body">
                    <Link to="/selecao-exercicios/semana1" className="btn bg-info-subtle"
                          style={{left: '10%', top: '130px', position: 'absolute'}}>Exercícios Semana 1</Link><br/><br/><br/>
                    {/* Adicionando o link para o Atividade1 */}
                    <Link to="/atividade1" className="btn bg-info-subtle"
                          style={{left: '10%', top: '160px', position: 'absolute'}}>Atividade 1</Link>
                </div>
            </div>
        </div>
    )
}

export default Home;
