import React from 'react';
import Pedido from "./assets/Pedido";
import Cartao from "./assets/Cartao";
import Feedback from "./assets/Feedback";

const App = () => {

  const textoOK = "Já chegou!";
  const textoNOK = "Nao chegou!";

  const funcaoOK = () => {
    alert("Tudo certo!");
  };

  const funcaoNOK = () => {
    alert("Já chegou! Verificaremos o ocorrido");
  };

  const componenteFeedback = (
    <Feedback
      textoOK={textoOK}
      textoNOK={textoNOK}
      funcaoOK={funcaoOK}
      funcaoNOK={funcaoNOK}
    />
  );

  return (
    <div className="container border mt-2">
      <div className="row">

        <div className="col-lg-6 col-xxl-4">
          <Cartao cabecalho={new Date().toDateString()}>
            <Pedido
              data={new Date().toDateString()}
              titulo="SSD"
              descricao="Um SSD de 512Gb"
              icone="hdd"
            />
            {componenteFeedback}
          </Cartao>
        </div>

        <div className="col-lg-6 col-xxl-4">
          <Cartao cabecalho={new Date().toDateString()}>
            <Pedido
              data={new Date().toDateString()}
              titulo="Livro"
              descricao="Harry Potter"
              icone="book"
            />
            {componenteFeedback}
          </Cartao>
        </div>

        <div className="col-lg-6 col-xxl-4">
          <Cartao cabecalho={new Date().toDateString()}>
            <Pedido
              data={new Date().toDateString()}
              titulo="Hipopótamo"
              descricao="Sim, um hipo! :)"
              icone="hippo"
            />
            {componenteFeedback}
          </Cartao>
        </div>

        <div className="col-lg-6 col-xxl-4">
          <Cartao cabecalho={new Date().toDateString()}>
            <Pedido
              data={new Date().toDateString()}
              titulo="Um boneco de neve"
              descricao="Um boneco de neve"
              icone="snowman fa-shake"
            />
            {componenteFeedback}
          </Cartao>
        </div>

        <div className="col-lg-6 col-xxl-4">
          <Cartao cabecalho={new Date().toDateString()}>
            <Pedido
              data={new Date().toDateString()}
              titulo="Câmera"
              descricao="Uma câmera digital"
              icone="camera"
            />
            {componenteFeedback}
          </Cartao>
        </div>

        <div className="col-lg-6 col-xxl-4">
          <Cartao cabecalho={new Date().toDateString()}>
            <Pedido
              data={new Date().toDateString()}
              titulo="Fone de ouvido"
              descricao="Um fone de ouvido sem fio"
              icone="headphones"
            />
            {componenteFeedback}
          </Cartao>
        </div>

      </div>
    </div>
  );
};

export default App;