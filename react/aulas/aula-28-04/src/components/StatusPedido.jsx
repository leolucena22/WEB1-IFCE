function StatusPedido({ situacao }) {
  return (
    <div style={{
      backgroundColor: 'var(--bg-secondary)',
      border: '1px solid var(--border)',
      borderRadius: '12px',
      padding: '1.5rem',
      textAlign: 'center'
    }}>
      <h2 style={{ fontSize: '1.125rem', fontWeight: '500', color: 'var(--text-secondary)' }}>
        O status do pedido é: <span style={{ color: 'var(--accent)', fontWeight: '700' }}>{situacao}</span>
      </h2>
    </div>
  );
}

export { StatusPedido };
