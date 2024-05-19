import { useState } from 'react';
import { Link } from 'react-router-dom';

const initialList = [
  { id: 0, title: 'Big Bellies' },
  { id: 1, title: 'Lunar Landscape' },
  { id: 2, title: 'Terracotta Army' },
];

export default function List() {
  const [list, setList] = useState(initialList);

  function handleClick() {
    const nextList = [...list];
    nextList.reverse();
    setList(nextList);
  }

  return (
    <>
      <div className="container">
        <button onClick={handleClick}>
          Reverse
        </button>
        <ul>
          {list.map(artwork => (
            <li key={artwork.id}>{artwork.title}</li>
          ))}
        </ul>
        <Link to="/semana4" className="btn bg-secondary-subtle mt-5">Voltar</Link>
      </div>
    </>
  );
}
