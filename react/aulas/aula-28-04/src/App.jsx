import "./App.css";
import Blog from "./components/blog/Blog";
import { CartaoVisita } from "./components/CartaoVisita";
import { PerfilUsuario } from "./components/PerfilUsuario";
import { Produto } from "./components/Produto";
import { StatusPedido } from "./components/StatusPedido";

function App() {
  const nomeEmpresa = "Leo Lucena Tech";
  const url = "https://leolucena22.github.io";

  const nomeAluno = "Leonardo Lucena";
  const urlFotoAluno =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfE8XWOVe86hLGi8m9mgPTsva_KWjTHbT9iQ&s";

  return (
    <div className="container">
      <li>Questão 01</li>
      <CartaoVisita nomeEmpresa={nomeEmpresa} url={url} />

      <br />

      <li>Questão 02</li>
      <StatusPedido situacao={"Recebido"} />

      <br />

      <li>Questão 03</li>
      <Produto nome={"Teclado Gamer"} preco={150} categoria={"Eletrônico"} />

      <br />

      <li>Questão 04</li>
      <PerfilUsuario nomeAluno={nomeAluno} urlFoto={urlFotoAluno} />

      <br />

      <li>Questão 05</li>
      <Blog></Blog>
    </div>
  );
}

export default App;
