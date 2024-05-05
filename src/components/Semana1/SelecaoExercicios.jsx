import {Link} from 'react-router-dom';
function SelecaoExercicios() {
    return (
        <>
            <div className="card ms-5 me-5 mt-5 border border-info-subtle">
                <div className="card-header border border-info-subtle bg-info-subtle">
                    Semana 1
                </div>
                <div className="card-body">
                    <h5 className="card-title">Exercício 1</h5>
                    <p className="card-text">
                        Faça as alterações necessárias no projeto criado para
                        incluir o exemplo da aula passada (Data e hora) como
                        um novo componente dentro da sua aplicação.
                    </p>
                    <a href="/exercicio1" className="btn bg-info-subtle">Acessar</a>
                </div>
            </div>
            <div className="card ms-5 me-5 mt-5 border border-info-subtle">
                <div className="card-header border border-info-subtle bg-info-subtle">
                    Semana 1
                </div>
                <div className="card-body">
                    <h5 className="card-title">Exercício 2</h5>
                    <p className="card-text">
                        Implemente um componente react com um letreiro que simule a digitação do texto Conheça a Fatec de forma
                        que a digitação fique em looping.
                    </p>
                    <Link to="/exercicio2" className="btn bg-info-subtle">Acessar</Link>
                </div>
            </div>
            <Link to="/home" className="btn bg-info-subtle mt-5 ms-5">Voltar</Link>
        </>
    )
}

export default SelecaoExercicios;