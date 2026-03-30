const form = document.querySelector('.formulario');

// form.addEventListener('submit', (e) => {

//   // Impede o comportamento padrão do formulário, que é recarregar a página

//   e.preventDefault();

//   const nome = form.nome.value;
//   const email = form.email.value;
//   const senha = form.senha.value;

//   console.log(nome, email, senha);

// })

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  fetch('url.servidor.com', {
    method: 'POST',
    body: JSON.stringify(formulario)
  })
    .then(resposta => resposta.json())
    .then(dados => console.log(dados))
    .catch(erro => console.error(erro));
});

form.addEventListener('change', (e) => { 
  const nome = form.nome.value;
  const email = form.email.value;
  const senha = form.senha.value;

  alert(`Nome: ${nome}\nEmail: ${email}\nSenha: ${senha}`); 
});