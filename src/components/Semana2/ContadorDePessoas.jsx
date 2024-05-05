import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importando o componente Link do React Router
import './ContadorDePessoas.css'; // Importando o arquivo CSS para estilos personalizados

function ContadorDePessoas() {
    const [menCount, setMenCount] = useState(0);
    const [womenCount, setWomenCount] = useState(0);

    const increaseMenCount = () => {
        setMenCount(prevCount => prevCount + 1);
    };

    const decreaseMenCount = () => {
        if (menCount > 0) {
            setMenCount(prevCount => prevCount - 1);
        }
    };

    const increaseWomenCount = () => {
        setWomenCount(prevCount => prevCount + 1);
    };

    const decreaseWomenCount = () => {
        if (womenCount > 0) {
            setWomenCount(prevCount => prevCount - 1);
        }
    };

    const resetCounts = () => {
        setMenCount(0);
        setWomenCount(0);
    };

    const totalPeople = menCount + womenCount;

    return (
        <div className="container">
            <h1 className="title">Total de Pessoas: {totalPeople}</h1>
            <div className="counter">
                <div className="count-container">
                    <img src="https://emojicdn.elk.sh/👨" alt="Homem" />
                    <p>Homens</p>
                    <div className="button-container">
                        <button onClick={decreaseMenCount}>-</button>
                        <span className="count-value">{menCount}</span>
                        <button onClick={increaseMenCount}>+</button>
                    </div>
                </div>
                <div className="count-container">
                    <img src="https://emojicdn.elk.sh/👩" alt="Mulher" />
                    <p>Mulheres</p>
                    <div className="button-container">
                        <button onClick={decreaseWomenCount}>-</button>
                        <span className="count-value">{womenCount}</span>
                        <button onClick={increaseWomenCount}>+</button>
                    </div>
                </div>
            </div>
            <button className="reset-button" onClick={resetCounts}>Reiniciar Contadores</button>
            <Link to="/home" className="btn bg-secondary-subtle mt-5">Voltar</Link>
        </div>
    );
}

export default ContadorDePessoas;
