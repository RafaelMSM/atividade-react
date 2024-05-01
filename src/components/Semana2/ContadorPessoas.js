import React, { useState } from 'react';

function ContadorPessoas() {
  const [menCount, setMenCount] = useState(0);
  const [womenCount, setWomenCount] = useState(0);

  const handleMenDecrease = () => {
    if (menCount > 0) {
      setMenCount(prevCount => prevCount - 1);
    }
  };

  const handleMenIncrease = () => {
    setMenCount(prevCount => prevCount + 1);
  };

  const handleWomenDecrease = () => {
    if (womenCount > 0) {
      setWomenCount(prevCount => prevCount - 1);
    }
  };

  const handleWomenIncrease = () => {
    setWomenCount(prevCount => prevCount + 1);
  };

  return (
    <div className="container">
      <h1>Total de Pessoas</h1>
      <button onClick={() => { setMenCount(0); setWomenCount(0); }}>
        <img src="https://emojicdn.elk.sh/🔄" alt="Reiniciar" width="30" />
      </button>
      <div id="counter">
        <p>Total: <span className="count-value">{menCount + womenCount}</span></p>
        <div className="count-container">
          <img src="https://emojicdn.elk.sh/👨" alt="Homem" />
          <p>Homens</p>
          <span className="count-value">{menCount}</span>
          <button onClick={handleMenDecrease}>-</button>
          <button onClick={handleMenIncrease}>+</button>
        </div>
        <div className="count-container">
          <img src="https://emojicdn.elk.sh/👩" alt="Mulher" />
          <p>Mulheres</p>
          <span className="count-value">{womenCount}</span>
          <button onClick={handleWomenDecrease}>-</button>
          <button onClick={handleWomenIncrease}>+</button>
        </div>
      </div>
    </div>
  );
}

export default ContadorPessoas;
