import "./App.css";
import { Chamada } from "./consultaApi";
import { Contador } from "./contador";
import { Potencia } from "./potencia";
import { Soma } from "./soma";
import { Subtracao } from "./subtracao";
import Tchau from "./texto";

function App() {
  const nome = "Leonardo";
  const sobrenome = "Lucena";
  //const nomeCompleto = nome + " " + sobrenome;

  return (
    <div>
      <Tchau nome={nome} sobrenome={sobrenome} />
      <Soma num1={5} num2={10} />
      <Subtracao num3={10} num4={5} />
      <Potencia num4={2} num5={2} />
      <Contador />
      <Chamada />
    </div>
  );
}

export default App;
