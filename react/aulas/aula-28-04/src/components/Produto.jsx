import "./card-produto.css";

function Produto({ nome, preco, categoria }) {
  return (
    <div className="card-produto">
      <ul>
        <li>Nome: {nome}</li>
        <li>Preço: R$ {preco}</li>
        <li>Categoria: {categoria}</li>
      </ul>
    </div>
  );
}

export { Produto };
