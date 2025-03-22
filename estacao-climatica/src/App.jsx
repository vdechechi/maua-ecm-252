import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      estacoes: null,
      data: null,
      icone: null,
    };
  }
  estacoes = {
    VERAO: {
      nome: "Verão",
      icone: "sun",
    },
    OUTONO: {
      nome: "Outono",
      icone: "leaf",
    },
    INVERNO: {
      nome: "Inverno",
      icone: "snowflake",
    },
    PRIMAVERA: {
      nome: "Primavera",
      icone: "umbrella",
    },
  };
  obterEstacao = (data, latitude) => {
    const anoAtual = data.getFullYear();
    const d1 = new Date(anoAtual, 5, 21); // 21/06
    const d2 = new Date(anoAtual, 8, 24); // 24/09
    const d3 = new Date(anoAtual, 11, 22); // 22/12
    const d4 = new Date(anoAtual, 2, 21); // 21/03

    const estouNoSul = latitude < 0;

    if (data >= d1 && data < d2) {
      return estouNoSul ? this.estacoes.INVERNO : this.estacoes.VERAO;
    }
    if (data >= d2 && data < d3) {
      return estouNoSul ? this.estacoes.PRIMAVERA : this.estacoes.OUTONO;
    }
    if (data >= d3 || data < d4) {
      return estouNoSul ? this.estacoes.VERAO : this.estacoes.INVERNO;
    }
    return estouNoSul ? this.estacoes.OUTONO : this.estacoes.PRIMAVERA;
  };
  obterLocalizacao = () => {
    navigator.geolocation.getCurrentPosition(
      (posicao) => {
        const dataAtual = new Date();
        const estacao = this.obterEstacao(dataAtual, posicao.coords.latitude);
        const icone = estacao.icone;
        this.setState({
          latitude: posicao.coords.latitude,
          longitude: posicao.coords.longitude,
          estacao: estacao.nome,
          data: dataAtual.toLocaleDateString(),
          icone: icone,
        });
      },
      (erro) => {
        console.log(erro);
      }
    );
  };


  render() {
    return (
      <div className="container mt-2">
        <div className="row">
          <div className="col-12">
            <div className="justify-content-center d-flex">
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-12 col-lg-6 col-xxl-4">
            <div className="card w-100">
              <div className="card-body">
                <div>
                  <div
                    className="d-flex align-items-center rounded mb-2"
                    style={{ height: "6rem" }}
                  >
                    <i className={`fas fa-5x fa-${this.state.icone}`}></i>
                    <p className="w-75 ms-3 text-center fs-1">
                      {this.state.estacao}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-center">
                    {this.state.latitude
                      ? `Coordenadas: ${this.state.latitude}, ${this.state.longitude},
                          Data: ${this.state.data}`
                      : "Clique no botão para saber a estação"}
                  </p>
                </div>
                <button type="button"
                className="btn btn-success w-100 mt-3"
                onClick={this.obterLocalizacao}>Qual a minha estação?</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
