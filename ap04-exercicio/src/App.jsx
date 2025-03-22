import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ListaComentarios from './assets/components/ListaComentarios';

function App() {
  return (
    <div className="container mt-5">
      <ListaComentarios />
    </div>
  );
}

export default App;