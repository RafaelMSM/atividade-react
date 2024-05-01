import React from 'react';
import ContadorPessoas from './ContadorPessoas';

function Atividade1() {
  return (
    <div>
      <h1>Página da Atividade 1</h1>
      <ContadorPessoas />
      <button onClick={() => { window.location.href = "index.html"; }}>
        Voltar para o Index
      </button>
    </div>
  );
}

export default Atividade1;
