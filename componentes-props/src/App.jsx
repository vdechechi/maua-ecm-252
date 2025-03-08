import Pedido from "./assets/Pedido";

const App = () => {
  return (
    <div className="container border mt-3 ">

      <div className="row">

        <div className="col-sm-12 col-lg-6 col-xxl-12">
          <Pedido
          
          data = "22/02/2023"
          titulo = "SSD"
          descricao = "Um SSD de 512 gb"
          icone = "hdd"/>
        </div>

        <div className="col-sm-12 col-lg-6 col-xxl-12">
        <Pedido
          
          data = "23/04/2022"
          titulo = "Caminnhão"
          descricao = "Caminhao de Frete"
          icone = "truck"/>
        </div>

        <div className="col-sm-12 col-lg-6 col-xxl-12">
        <Pedido
          
          data = "22/02/2025"
          titulo = "Boneco de neve"
          descricao = "Um boneco de neve"
          icone = "snowman"/>
        </div>

        <div className="col-sm-12 col-lg-6 col-xxl-12">
        <Pedido
          
          data = "21/01/2019"
          titulo = "Camera"
          descricao = "Para registrar todos os momentos"
          icone = "hdd"/>
        </div>

       

    </div>
  </div>

  );
}

export default App;
