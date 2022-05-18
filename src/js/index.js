/*
 OBJETIVO 1 -> quando passar o mouse em cima do personagem
 temos que :
    colocar a classe selecionado no personagem que passamos em cima
    para adicionar animação nele.

    retirar a classe selecionado do personagem que estava
    selecionado.

 OBJETIVO 2 -> quando passar o mouse em cima trocar a
      IMAGEM E NOME DOS PERSONAGENS SELECIONADO

      - alterar a imagem do jogador 1
      - alterar o nome do jogador 1

*/

//  OBJETIVO 1

// querySelector busca todos os elementos com o nome indicado no ( ) e o . do .personagem indica que é uma classe. assim como
//  o # indicaria um id.

const personagens = document.querySelectorAll('.personagem')

// forEach = para cada.. para cada (personagens) dentro dessa lista const '.personagem' quero fazer uma função
//  => {  }

personagens.forEach((personagem) => {

    const idSelecionado = personagem.attributes.id.value;

    if (idSelecionado === 'angemon') return;

    personagem.addEventListener('mouseenter', () => {
        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado')
        personagem.classList.add('selecionado')


        // OBJETIVO 2




        const imagemJogador1 = document.getElementById('personagem-jogador-1');
        imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;

        const nomeJogador1 = document.getElementById('nome-jogador-1')
        const nomeSelecionado = personagem.getAttribute('data-name')
        nomeJogador1.innerHTML = `${nomeSelecionado}`
    })
})

var x = document.getElementById("myAudio");

function enableMute() { 
  x.muted = !myAudio.muted;
} 

// function disableMute() { 
//   x.muted = false;
// }
 

