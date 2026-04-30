function PerfilUsuario({ urlFoto, nomeAluno }) {
  return (
    <div style={{
      backgroundColor: 'var(--bg-secondary)',
      border: '1px solid var(--border)',
      borderRadius: '12px',
      padding: '2rem',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem'
    }}>
      <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--text-primary)' }}>Perfil do usuário</h2>
      <p style={{ color: 'var(--text-secondary)' }}>Olá {nomeAluno}</p>
      <img 
        src={urlFoto} 
        alt={`Foto de ${nomeAluno}`} 
        style={{ 
          width: '120px', 
          height: '120px', 
          borderRadius: '50%', 
          objectFit: 'cover',
          border: '3px solid var(--accent)'
        }} 
      />
    </div>
  );
}

export { PerfilUsuario };
