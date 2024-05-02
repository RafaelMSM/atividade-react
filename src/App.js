import React, { useState, useEffect } from 'react';

const DateTimeComponent = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formatDateTime = (dateTime) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        return new Intl.DateTimeFormat('pt-BR', options).format(dateTime);
    };

    return (
        <div>{formatDateTime(currentDateTime)}</div>
    );
};

export const Typewriter = ({ text }) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            setDisplayText(prevText => {
                if (index === text.length) {
                    index = 0;
                    return '';
                }
                return prevText + text[index++];
            });
        }, 100);

        return () => {
            clearInterval(intervalId);
        };
    }, [text]);

    return <div id="letreiro">{displayText}</div>;
};

const App = () => {
    const [dateTimeRendered, setDateTimeRendered] = useState(false);

    useEffect(() => {
        setDateTimeRendered(true);
    }, []);

    const verificarPalindromo = () => {
        const texto = prompt("Digite uma palavra ou frase:");
        if (texto !== null) {
            const textoSemEspacos = texto.replace(/\s/g, '').toLowerCase();
            const textoReverso = textoSemEspacos.split('').reverse().join('');
            const mensagem = (textoSemEspacos === textoReverso) ? "É um palíndromo!" : "Não é um palíndromo!";
            alert(mensagem);
        }
    };

    const voltarParaIndex = () => {
        // Implemente a navegação para a página inicial, se necessário
    };

    const abrirGitHub = () => {
        // Implemente a lógica para abrir o GitHub, se necessário
    };

    return (
        <div>
            <h2>Semana 1</h2>
            <h3>Exercícios 1 e 2</h3>
            {dateTimeRendered && <Typewriter text="Conheça a Fatec" />}
            <DateTimeComponent />
            <button onClick={() => alert(new Date())}>Exibir Data Atual</button>
            <button onClick={() => verificarPalindromo()}>Verificar Palíndromo</button>
            <button onClick={() => voltarParaIndex()}>Voltar para o Index</button>
            <button onClick={() => abrirGitHub()}>GitHub</button>
        </div>
    );
};

export default App;
