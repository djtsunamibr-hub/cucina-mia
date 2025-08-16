import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Cucina Mia</h1>
        <p>Benvenuto! Sua cozinha começa aqui.</p>
      </header>
      <nav className="menu">
        <button>+ Nova Receita</button>
        <button>Ver Minhas Receitas</button>
        <button>Dicas da Cucina</button>
        <button>Categorias</button>
      </nav>
    </div>
  );
}

export default App;
