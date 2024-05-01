import { useEffect, useState } from "react";

function Letreiro() {
    const [texto, setTexto] = useState('');
    const textoOriginal = 'Venha estudar na Fatec';
    const velocidadeDigitacao = 100;

    useEffect(() => {
        let index = 0;
        const intervalo = setInterval(() => {
            const novoTexto = textoOriginal.slice(0, index);
            setTexto(novoTexto);

            index++;

            // Reiniciar o índice quando atingir o comprimento total do texto original
            if (index > textoOriginal.length) {
                index = 0;
            }
        }, velocidadeDigitacao);

        return () => clearInterval(intervalo);
    }, [textoOriginal, velocidadeDigitacao]);

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <p className="lead">{texto}</p>
                </div>
            </div>
        </div>
    );
}

export default Letreiro;
