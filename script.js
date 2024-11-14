// Controle de menu mobile
const menuBtn = document.getElementById("menu-btn"); // Botão de menu mobile
const navLinks = document.getElementById("nav-links-mobile"); // Links de navegação do menu
const menuBtnIcon = menuBtn.querySelector("i"); // Ícone do botão de menu (hambúrguer ou X)

// Alterna o estado do menu mobile ao clicar no botão
menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open"); // Adiciona ou remove a classe "open" para exibir/esconder o menu
  const isOpen = navLinks.classList.contains("open"); // Verifica se o menu está aberto
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"
  ); // Alterna o ícone entre hambúrguer e X
});

// Fecha o menu mobile ao clicar em um link
navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open"); // Remove a classe "open" para fechar o menu
  menuBtnIcon.setAttribute("class", "fa-solid fa-bars"); // Define o ícone de volta para o hambúrguer
});

// Configurações gerais do ScrollReveal
const scrollRevealOption = {
  distance: "50px", // Distância do movimento ao revelar o elemento
  origin: "bottom", // Origem do movimento (direção da animação)
  duration: 1000, // Duração da animação em milissegundos
};

// Animação para a imagem "jeep-home" na seção "home-img"
ScrollReveal().reveal(".home-img img", {
  ...scrollRevealOption, // Aplica as configurações padrão
  origin: "right", // Origem do movimento alterada para a direita
  delay: 500, // Atraso de 500ms antes da animação começar
});

// se eu não usar os 3 pontos eu precisaria fazer assim

// // Primeira chamada, com todas as opções definidas manualmente
// ScrollReveal().reveal(".home-conteudo h1", {
//     distance: scrollRevealOption.distance,
//     origin: "right",  // Sobrescreve 'origin' com valor específico
//     duration: scrollRevealOption.duration,
//     delay: 500,
// });

// Animação para o título principal na seção "home-conteudo"
ScrollReveal().reveal(".home-conteudo h1", {
  ...scrollRevealOption, // Aplica as configurações padrão
  origin: "right", // Origem do movimento alterada para a direita
  delay: 1000, // Atraso de 500ms antes da animação começar
});

// Animação para o parágrafo na seção "home-conteudo"
ScrollReveal().reveal(".home-conteudo p", {
  ...scrollRevealOption,
  delay: 1000, // Atraso de 1000ms
  interval: 500, // Animação em intervalos para revelar cada passo de forma sequencial
});

// Animação para cada elemento de passos na seção "aluguel-passos"
ScrollReveal().reveal(".aluguel-passos .passos", {
  ...scrollRevealOption,
  interval: 500, // Animação em intervalos para revelar cada passo de forma sequencial
});

// Animação para a imagem "jeep-home" na seção "home-img"
ScrollReveal().reveal(".servicos-img", {
  ...scrollRevealOption, // Aplica as configurações padrão
  origin: "left", // Origem do movimento alterada para a direita
  delay: 500, // Atraso de 500ms antes da animação começar
});

// Animação para a imagem "jeep-home" na seção "home-img"
ScrollReveal().reveal(".servicos h3", {
  ...scrollRevealOption, // Aplica as configurações padrão
  delay: 1000, // Atraso de 500ms antes da animação começar
});

// Animação para a imagem "jeep-home" na seção "home-img"
ScrollReveal().reveal(".servicos h2", {
  ...scrollRevealOption, // Aplica as configurações padrão
  delay: 1500, // Atraso de 500ms antes da animação começar
});

// Animação para a imagem "jeep-home" na seção "home-img"
ScrollReveal().reveal(".servicos article", {
  ...scrollRevealOption, // Aplica as configurações padrão
  delay: 2000, // Atraso de 500ms antes da animação começar
  interval: 500, // Intervalo para animar cada artigo individualmente
});

// Animação para caixas de conteúdo na seção "experiencia-box"
ScrollReveal().reveal(".experiencia-conteudo .icons-conteudo", {
  duration: 1500, // Duração de 1000ms sem configurações extras
  interval: 750, // Animação em intervalos para conteúdo de experiência
});

// Animação para a imagem mobile na seção "download-img-mobile"
ScrollReveal().reveal(".download-img-mobile img", {
  ...scrollRevealOption,
  delay: 1500, // Atraso de 1500ms para maior fluidez
});

// Animação para o título na seção "download-conteudo"
ScrollReveal().reveal(".download-conteudo h2", {
  ...scrollRevealOption,
  delay: 500, // Atraso de 500ms
  origin: "right", // Origem alterada para a direita
});

// Animação para o parágrafo na seção "download-conteudo"
ScrollReveal().reveal(".download-conteudo p", {
  ...scrollRevealOption,
  delay: 1000, // Atraso de 1000ms para animação mais suave
});

// Animação para o parágrafo na seção "download-conteudo"
ScrollReveal().reveal(".download-imagem img", {
  ...scrollRevealOption,
  delay: 2000, // Atraso de 1000ms para animação mais suave
  origin: "right", // Origem alterada para a direita
});
