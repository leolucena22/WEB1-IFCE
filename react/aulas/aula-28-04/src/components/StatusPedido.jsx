function StatusPedido({ situacao }) {
  return (
    <div>
      <h2>
        O status do pedido é: <span>{situacao}</span>
      </h2>
    </div>
  );
}

export { StatusPedido };
