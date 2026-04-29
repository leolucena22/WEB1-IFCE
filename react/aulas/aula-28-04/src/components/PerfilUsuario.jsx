function PerfilUsuario({ urlFoto, nomeAluno }) {
  return (
    <div>
      <h2>Perfil do usuário</h2>
      <p>Olá {nomeAluno}</p>
      <img src={urlFoto} alt={`Foto de ${nomeAluno}`} />
    </div>
  );
}

export { PerfilUsuario };
