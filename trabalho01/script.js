// Trocar imagens ao passar o mouse

document.addEventListener('DOMContentLoaded', () => {
  const allBoxImgs = document.querySelectorAll('.box-img img');

  allBoxImgs.forEach((img) => {
    const originalSrc = img.src;
    const hoverSrc = img.getAttribute('data-hover');

    if (hoverSrc) {
      img.addEventListener('mouseenter', () => {
        img.src = hoverSrc;
      });
      img.addEventListener('mouseleave', () => {
        img.src = originalSrc;
      });
    }
  });

  // Busca e realce de itens

  const form = document.querySelector('.busca form');
  const input = document.querySelector('.busca input');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const termo = input.value.trim().toLowerCase();

    document.querySelectorAll('section li').forEach((item) => {
      item.classList.remove('resultado-busca');

      const titulo = item.querySelector('h1');
      if (termo && titulo && titulo.textContent.toLowerCase().includes(termo)) {
        item.classList.add('resultado-busca');
        item.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });

  // Modo de leitura

  const btnLeitura = document.getElementById('btn-leitura');

  if (btnLeitura) {
    let ativo = false;

    btnLeitura.addEventListener('click', () => {
      ativo = !ativo;
      document.querySelectorAll('p, li, a').forEach((el) => {
        el.style.fontSize = ativo ? '20px' : '16px';
      });
      btnLeitura.textContent = ativo ? 'Modo de Leitura: ON' : 'Modo de Leitura: OFF';
    });
  }
});

// Modo escuro

const btnTema = document.getElementById('btn-tema');

if (btnTema) {
  btnTema.addEventListener('click', () => {
    document.body.classList.toggle('tema-escuro');

    if (document.body.classList.contains('tema-escuro')) {
      btnTema.textContent = '☀️';
    } else {
      btnTema.textContent = '🌙';
    }
  });
}