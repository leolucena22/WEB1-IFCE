function Post({ titulo }) {
  return (
    <div style={{
      backgroundColor: 'var(--bg-secondary)',
      border: '1px solid var(--border)',
      borderRadius: '8px',
      padding: '1rem',
      transition: 'transform 0.2s ease'
    }}>
      <h3 style={{ fontSize: '1rem', fontWeight: '500', color: 'var(--text-primary)' }}>{titulo}</h3>
    </div>
  );
}

export { Post };
