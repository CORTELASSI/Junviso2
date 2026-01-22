// Função que gera um valor aleatório para movimento
function getRandomPosition() {
  const maxX = window.innerWidth - 100; 
  const maxY = window.innerHeight - 100;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  return { x: randomX, y: randomY };
}

// Função para mover as opções erradas quando o mouse se aproxima
function moveOption(option) {
  const newPosition = getRandomPosition();

  // Definindo novas variáveis CSS com a posição aleatória
  option.style.setProperty('left', `${newPosition.x}px`);
  option.style.setProperty('top', `${newPosition.y}px`);

  // Adiciona a classe de movimento
  option.classList.add('moving');
}

// Adicionando os eventos de mouse para as opções erradas
document.querySelectorAll('.wrong-option').forEach(item => {
  item.addEventListener('mouseenter', function () {
    moveOption(item); // Faz a opção errada se mover para uma nova posição
  });
});

// Função para verificar as respostas
function verificarRespostas() {
  const pergunta1 = document.querySelector('input[name="pergunta1"]:checked');
  const pergunta2 = document.querySelector('input[name="pergunta2"]:checked');
  const pergunta3 = document.querySelector('input[name="pergunta3"]:checked');
  const messageDiv = document.getElementById("message");

  if (!pergunta1 || !pergunta2 || !pergunta3) {
    messageDiv.innerHTML = "<div id='error-message'>Por favor, responda todas as perguntas.</div>";
    return;
  }

  const respostasCorretas = {
    pergunta1: "certo1",
    pergunta2: "certo2",
    pergunta3: "certo3",
  };

  const respostaCorreta1 = pergunta1.value === respostasCorretas.pergunta1;
  const respostaCorreta2 = pergunta2.value === respostasCorretas.pergunta2;
  const respostaCorreta3 = pergunta3.value === respostasCorretas.pergunta3;

  if (respostaCorreta1 && respostaCorreta2 && respostaCorreta3) {
    messageDiv.innerHTML = "<div id='success-message'>Parabéns! Você respondeu corretamente.</div>";
    setTimeout(() => {
      window.location.href = "pagina2.html"; 
    }, 2000);
  } else {
    messageDiv.innerHTML = "<div id='error-message'>Alguma resposta está incorreta. Tente novamente!</div>";
  }
}
