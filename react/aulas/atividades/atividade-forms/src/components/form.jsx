import { useState } from "react";
import "../App.css";

function Formulario() {
  const [dados, setDados] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  const [erros, setErros] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setDados({ ...dados, [name]: value });
  }

  function validar() {
    let novosErros = {};

    if (!dados.nome) {
      novosErros.nome = "Nome é obrigatório";
    }

    if (!dados.email) {
      novosErros.email = "Email é obrigatório";
    } else if (!dados.email.includes("@")) {
      novosErros.email = "Email inválido";
    }

    if (!dados.senha) {
      novosErros.senha = "Senha é obrigatória";
    } else if (dados.senha.length < 6) {
      novosErros.senha = "Senha deve ter no mínimo 6 caracteres";
    }

    return novosErros;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const errosValidados = validar();
    setErros(errosValidados);

    if (Object.keys(errosValidados).length === 0) {
      alert("Formulário enviado com sucesso!");
      console.log(dados);
    }
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={dados.nome}
            onChange={handleChange}
            className={erros.nome ? "error" : ""}
          />
          {erros.nome && <p className="error-msg">{erros.nome}</p>}
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={dados.email}
            onChange={handleChange}
            className={erros.email ? "error" : ""}
          />
          {erros.email && <p className="error-msg">{erros.email}</p>}
        </div>

        <div className="form-group">
          <label>Senha:</label>
          <input
            type="password"
            name="senha"
            value={dados.senha}
            onChange={handleChange}
            className={erros.senha ? "error" : ""}
          />
          {erros.senha && <p className="error-msg">{erros.senha}</p>}
        </div>

        <button className="submit-btn" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Formulario;
