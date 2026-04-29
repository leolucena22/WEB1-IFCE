import "./card.css";

function CartaoVisita({ nomeEmpresa, url }) {
  return (
    <div className="card">
      <h1>{nomeEmpresa}</h1>
      <p>Visite nosso site 👇️</p>
      <a href={url} className="link">
        Acessar
      </a>
    </div>
  );
}

export { CartaoVisita };
