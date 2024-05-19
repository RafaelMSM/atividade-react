import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Form() {
  const [to, setTo] = useState('Alice');
  const [message, setMessage] = useState('Olá');

  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      alert(`Você disse ${message} para ${to}`);
    }, 5000);
  }

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label>
            Para:{' '}
            <select
              value={to}
              onChange={e => setTo(e.target.value)}>
              <option value="Alice">Alice</option>
              <option value="Bob">Bob</option>
            </select>
          </label>
          <textarea
            placeholder="Message"
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
          <button type="submit">Enviar</button>
        </form>
        <Link to="/semana4" className="btn bg-secondary-subtle mt-5">Voltar</Link>
      </div>
    </>
  );
}
