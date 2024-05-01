import React, { useEffect } from 'react';

function Data() {
    useEffect(() => {
        verificarData();

        return () => {
            verificarData();

        };
    }, []);

    const verificarData = () => {
        var dias = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
        var meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

        var dataAtual = new Date();
        var dia = dias[dataAtual.getDay()];
        var data = dataAtual.getDate();
        var mes = meses[dataAtual.getMonth()];
        var ano = dataAtual.getFullYear();

        var resposta = `<strong>${dia}, ${data} de ${mes} de ${ano}</strong>`;
        var dataHoje = document.getElementById("dataHoje");

        if (dataHoje) {
            dataHoje.innerHTML = resposta;
        }
    };

    return (
        <>
        <p className="card-text">
            <strong>Data:</strong>
        </p>
        <div id="dataHoje" className="card-text mb-5"></div>
        </>
    );
}

export default Data;
