import "./App.css";
import { Soma } from "./soma";
import Tchau from "./texto";

function App() {
  const nome = "Leonardo";
  const sobrenome = "Lucena";
  //const nomeCompleto = nome + " " + sobrenome;

  return (
    <>
      <Tchau nome={nome} sobrenome={sobrenome} />
      <Soma num1={5} num2={10} />
    </>
  );
}

export default App;
