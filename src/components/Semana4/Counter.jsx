import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <div className="container">
        <h1>{number}</h1>
        <button onClick={() => {
          setNumber(n => n + 1);
          setNumber(n => n + 1);
          setNumber(n => n + 1);
        }}>+3</button>
        <Link to="/semana4" className="btn bg-secondary-subtle mt-5">Voltar</Link>
      </div>
    </>
  )
}
