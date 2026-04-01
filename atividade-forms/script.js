const dataEvento = document.querySelector('#data');
const form = document.querySelector('form');
const nomeInput = document.querySelector('#nome');
const emailInput = document.querySelector('#email');
const tipoIngresso = document.querySelector('#tipo-ingresso');

// Adiciona área para mensagem de erro do e-mail
let emailError = document.createElement('div');
emailError.style.color = 'red';
emailError.style.fontSize = '0.9rem';
emailError.style.marginTop = '4px';
emailInput.insertAdjacentElement('afterend', emailError);

// Define a data mínima para o evento como a data atual
const dataHoje = new Date();
const ano = dataHoje.getFullYear();
const mes = String(dataHoje.getMonth() + 1).padStart(2, '0');
const dia = String(dataHoje.getDate()).padStart(2, '0');
const dataHojeFormatada = `${ano}-${mes}-${dia}`;

dataEvento.min = dataHojeFormatada;

// Validação para o nome completo e e-mail válido
function validarNome(nome) {
  const palavras = nome.trim().split(/\s+/);
  return palavras.length > 2;
}

function validarEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Função para verificar se a data é um final de semana
function isFinalDeSemana(dataString) {
  const data = new Date(dataString);
  const diaSemana = data.getDay(); // 0 = domingo, 6 = sábado
  return diaSemana === 0 || diaSemana === 6;
}

// Validação do e-mail
emailInput.addEventListener('input', () => {
  if (!validarEmail(emailInput.value)) {
    emailError.textContent = 'E-mail inválido.';
  } else {
    emailError.textContent = '';
  }
});

// Validação do formulário no submit
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Sempre intercepta o submit
  let valido = true;
  if (!validarNome(nomeInput.value)) {
    alert('Digite o nome completo (mínimo 3 palavras).');
    nomeInput.focus();
    valido = false;
  }

  // Validação do e-mail
  if (!validarEmail(emailInput.value)) {
    emailError.textContent = 'E-mail inválido.';
    emailInput.focus();
    valido = false;
  } else {
    emailError.textContent = '';
  }

  // Regra do ingresso VIP
  if (tipoIngresso.value === 'vip') {
    if (!isFinalDeSemana(dataEvento.value)) {
      alert('O ingresso VIP só pode ser selecionado para datas de final de semana (sábado ou domingo).');
      dataEvento.focus();
      valido = false;
    }
  }

  if (!valido) {
    return;
  }

  // Adiciona os dados na tabela
  const tabela = document.getElementById('tabela-dados');
  const novaLinha = document.createElement('tr');

  novaLinha.innerHTML = `
    <td>${nomeInput.value}</td>
    <td>${emailInput.value}</td>
    <td>${dataEvento.value}</td>
    <td>${tipoIngresso.options[tipoIngresso.selectedIndex].text}</td>
    <td><button type="button" class="btn-excluir">Excluir</button></td>
  `;

  // Adiciona evento de exclusão à nova linha
  novaLinha.querySelector('.btn-excluir').addEventListener('click', function() {
    novaLinha.remove();
  });

  tabela.appendChild(novaLinha);

  // Limpa o formulário
  form.reset();
  emailError.textContent = '';
  // Reaplica data mínima após reset
  dataEvento.min = dataHojeFormatada;
});