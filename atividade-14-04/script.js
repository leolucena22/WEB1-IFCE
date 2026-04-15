/*
GERADO COM: GitHub Copilot
TAREFA: Criar menu hambúrguer responsivo, validação de formulário com máscara de telefone, 
        e interatividades dinâmicas para o Bistrô Sabor e Arte
*/

// ===== MENU HAMBÚRGUER =====
/*
GERADO COM: GitHub Copilot
TAREFA: Implementar menu hambúrguer responsivo com animações
*/
document.addEventListener('DOMContentLoaded', function() {
  // Criar elementos do menu hambúrguer dinamicamente
  const header = document.querySelector('.header');
  const nav = document.querySelector('.nav');
  
  // Criar botão do menu se não existir
  if (!document.querySelector('.menu-toggle')) {
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '<span></span><span></span><span></span>';
    menuToggle.setAttribute('aria-label', 'Toggle menu');
    
    header.querySelector('.container').appendChild(menuToggle);
    
    // Event listener do menu hambúrguer
    menuToggle.addEventListener('click', function() {
      menuToggle.classList.toggle('active');
      nav.classList.toggle('active');
    });
  }
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    
    if (menuToggle) {
      menuToggle.classList.remove('active');
      nav.classList.remove('active');
    }
  });
});

// ===== MÁSCARA DE TELEFONE =====
/*
GERADO COM: GitHub Copilot
TAREFA: Aplicar máscara automática em campo de telefone (formato: (XX) XXXXX-XXXX)
*/
function formatPhoneNumber(value) {
  // Remove caracteres não numéricos
  value = value.replace(/\D/g, '');
  
  // Limita a 11 dígitos
  if (value.length > 11) {
    value = value.substring(0, 11);
  }
  
  // Aplica a máscara (XX) XXXXX-XXXX
  if (value.length <= 2) {
    return value;
  } else if (value.length <= 7) {
    return '(' + value.substring(0, 2) + ') ' + value.substring(2);
  } else {
    return '(' + value.substring(0, 2) + ') ' + value.substring(2, 7) + '-' + value.substring(7);
  }
}

const phoneInput = document.querySelector('input[type="tel"]');
if (phoneInput) {
  phoneInput.addEventListener('input', function(e) {
    e.target.value = formatPhoneNumber(e.target.value);
  });
}

// ===== VALIDAÇÃO DE FORMULÁRIO =====
/*
GERADO COM: GitHub Copilot
TAREFA: Implementar validação completa do formulário com mensagens de erro
*/
const form = document.querySelector('.form');

if (form) {
  // Criar elementos de erro se não existirem
  const inputs = form.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    if (!input.nextElementSibling || !input.nextElementSibling.classList.contains('error-message')) {
      const errorDiv = document.createElement('div');
      errorDiv.className = 'error-message';
      input.parentNode.insertBefore(errorDiv, input.nextSibling);
    }
  });

  // Validação em tempo real
  inputs.forEach(input => {
    input.addEventListener('blur', function() {
      validateField(this);
    });

    input.addEventListener('input', function() {
      if (this.classList.contains('form-error')) {
        validateField(this);
      }
    });
  });

  // Validação ao enviar
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    let isValid = true;
    inputs.forEach(input => {
      if (!validateField(input)) {
        isValid = false;
      }
    });

    if (isValid) {
      showSuccessMessage();
      form.reset();
      
      // Remover classes de validação após reset
      setTimeout(() => {
        inputs.forEach(input => {
          input.classList.remove('form-success', 'form-error');
          const errorMsg = input.nextElementSibling;
          if (errorMsg && errorMsg.classList.contains('error-message')) {
            errorMsg.classList.remove('show');
          }
        });
      }, 500);
    }
  });
}

// ===== FUNÇÃO DE VALIDAÇÃO DE CAMPOS =====
/*
GERADO COM: GitHub Copilot
TAREFA: Validar campos individuais com regras específicas
ALTERAÇÕES MANUAIS: Adicionados validadores customizados para email e telefone
*/
function validateField(field) {
  const value = field.value.trim();
  const fieldType = field.getAttribute('type');
  const errorDiv = field.nextElementSibling;
  let isValid = true;
  let errorMessage = '';

  // Remover classes anteriores
  field.classList.remove('form-error', 'form-success');
  if (errorDiv && errorDiv.classList.contains('error-message')) {
    errorDiv.classList.remove('show');
  }

  if (field.tagName === 'INPUT') {
    if (fieldType === 'text') {
      // Validação de Nome
      if (value.length < 3) {
        isValid = false;
        errorMessage = 'Nome deve ter pelo menos 3 caracteres';
      }
    } else if (fieldType === 'tel') {
      // Validação de Telefone
      const phoneDigits = value.replace(/\D/g, '');
      if (phoneDigits.length < 11) {
        isValid = false;
        errorMessage = 'Telefone inválido. Use (XX) XXXXX-XXXX';
      }
    } else if (fieldType === 'email') {
      // Validação de Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isValid = false;
        errorMessage = 'Email inválido';
      }
    } else if (fieldType === 'date') {
      // Validação de Data
      const selectedDate = new Date(value);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (!value) {
        isValid = false;
        errorMessage = 'Data é obrigatória';
      } else if (selectedDate < today) {
        isValid = false;
        errorMessage = 'Selecione uma data futura';
      }
    }
  } else if (field.tagName === 'TEXTAREA') {
    // Validação de Textarea (Mensagem)
    if (value.length < 10) {
      isValid = false;
      errorMessage = 'Mensagem deve ter pelo menos 10 caracteres';
    }
  }

  // Exibir ou ocultar mensagem de erro
  if (!isValid) {
    field.classList.add('form-error');
    if (errorDiv && errorDiv.classList.contains('error-message')) {
      errorDiv.textContent = errorMessage;
      errorDiv.classList.add('show');
    }
  } else {
    field.classList.add('form-success');
  }

  return isValid;
}

// ===== MENSAGEM DE SUCESSO =====

function showSuccessMessage() {
  const form = document.querySelector('.form');
  const successMessage = document.createElement('div');
  successMessage.className = 'sucessMessage';
  successMessage.textContent = '✓ Reserva realizada com sucesso! Em breve entraremos em contato.';

  form.parentNode.insertBefore(successMessage, form);

  // Remover mensagem após 5 segundos
  setTimeout(() => {
    successMessage.style.animation = 'fadeOut 0.5s ease-in-out';
    setTimeout(() => {
      successMessage.remove();
    }, 500);
  }, 5000);
}

// ===== PAGINAÇÃO DE GALERIA =====
/*
GERADO COM: GitHub Copilot
TAREFA: Adicionar interatividade à galeria de imagens com efeito de zoom ao clicar
*/
const galleryImages = document.querySelectorAll('.grid-galeria img');

galleryImages.forEach((img, index) => {
  img.style.cursor = 'pointer';
  
  img.addEventListener('click', function() {
    openImageModal(this.src, this.alt, index);
  });
});

function openImageModal(src, alt, index) {
  // Criar modal se não existir
  let modal = document.getElementById('imageModal');
  
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'imageModal';
    modal.style.cssText = `
      display: none;
      position: fixed;
      z-index: 1000;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
      animation: fadeIn 0.3s ease-in-out;
    `;
    
    modal.innerHTML = `
      <div style="
        margin: auto;
        display: block;
        max-width: 90%;
        max-height: 90%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      ">
        <img id="modalImage" src="" alt="" style="width: 100%; border-radius: 8px;">
      </div>
      <button id="closeModal" style="
        position: absolute;
        top: 20px;
        right: 30px;
        color: white;
        font-size: 40px;
        font-weight: bold;
        cursor: pointer;
        background: none;
        border: none;
      ">&times;</button>
    `;
    
    document.body.appendChild(modal);
    
    document.getElementById('closeModal').addEventListener('click', function() {
      modal.style.display = 'none';
    });
    
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  }
  
  document.getElementById('modalImage').src = src;
  document.getElementById('modalImage').alt = alt;
  modal.style.display = 'block';
}

// ===== SMOOTH SCROLL ADICIONAL =====
/*
GERADO COM: GitHub Copilot
TAREFA: Melhorar experiência de navegação com scroll suave entre seções
*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      const target = document.querySelector(href);
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===== ANIMAÇÃO AO SCROLL =====
/*
GERADO COM: GitHub Copilot
TAREFA: Adicionar animações de fade-in quando elementos entram no viewport
*/
if ('IntersectionObserver' in window) {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.animation = 'fadeInUp 0.8s ease-in-out forwards';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.card, .evento, .depoimento').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });
}