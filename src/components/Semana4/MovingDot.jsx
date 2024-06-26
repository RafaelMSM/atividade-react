import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });

  return (
    <>
      <div className="container">
        <div
          onPointerMove={e => {
            setPosition({
              x: e.clientX,
              y: e.clientY
            });
          }}
          style={{
            position: 'relative',
            width: '100vw',
            height: '100vh',
          }}>
          <div style={{
            position: 'absolute',
            backgroundColor: 'red',
            borderRadius: '50%',
            transform: `translate(${position.x}px, ${position.y}px)`,
            left: -10,
            top: -10,
            width: 20,
            height: 20,
          }} />
        </div>
        <Link to="/semana4" className="btn bg-secondary-subtle mt-5">Voltar</Link>
      </div>
    </>
  );
}
