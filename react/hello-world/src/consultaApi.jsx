import { useState, useEffect } from "react";

function Chamada() {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/leolucena22")
      .then((res) => res.json())
      .then((data) => setDados(data));
  }, []);
  return (
    <div>
      {dados ? (
        <>
          <h2>{dados.name}</h2>
          <p>{dados.bio}</p>
          <img src={dados.avatar_url} alt="avatar" width={100} />
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}

export { Chamada };
