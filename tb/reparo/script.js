// Seleciona o container onde as imagens serão dispostas
const circleContainer = document.getElementById('circle-container');

// Número total de imagens (13) ao redor
const totalImages = 13;

// Aumenta o raio da circunferência
const radius = 300; // Raio maior para uma circunferência maior

// Coordenadas da imagem central (centrão)
const centerX = 300; // Ajuste com base no tamanho do container
const centerY = 300; // Ajuste com base no tamanho do container

// Ângulo inicial para cada imagem
let angleStep = (2 * Math.PI) / totalImages;
let currentAngle = 0;

// Array para armazenar as imagens
const images = [];

// Flag para controle da rotação (se está ativa ou não)
let isRotating = true;

// Lista de caminhos das imagens únicas (representando coisas diferentes)
const imagePaths = [
    'icons8-jwt-48.png',   
    'banco.png',       
    'bootstrap.png',   
    'css.png',
    'figma.png',    
    'git.png',     
    'github.png',      
    'html.png',      
    'javascript.png',   
    'nodejs.png',  
    'reagir.png', 
    '-css.png',      
    'docker.png'    
];

// Função para criar as imagens ao redor da circunferência
function createImagesAroundCircle() {
    for (let i = 0; i < totalImages; i++) {
        const img = document.createElement('img');
        img.src = imagePaths[i]; // Define o caminho de cada imagem
        img.alt = `Imagem ${i + 1}`;
        img.classList.add('circle-img'); // Adiciona uma classe para estilo
        circleContainer.appendChild(img);
        images.push({ img, angle: i * angleStep });

        // Adiciona eventos de mouse para pausar e retomar a rotação
        img.addEventListener('mouseenter', () => stopRotation());
        img.addEventListener('mouseleave', () => startRotation());
    }
}

// Função para rotacionar as imagens em um círculo horizontal ao redor do centrão
function rotateImages() {
    if (isRotating) {
        images.forEach((imageObj) => {
            const { img, angle } = imageObj;

            // Atualiza a posição de cada imagem, ajustando para uma rotação horizontal
            const x = centerX + radius * Math.cos(angle + currentAngle) - 25; // Movimento horizontal
            const y = centerY + (radius / 4) * Math.sin(angle + currentAngle) - 25; // Movimento vertical

            img.style.left = `${x}px`;
            img.style.top = `${y}px`;
        });

        // Incrementa o ângulo para criar a rotação
        currentAngle += 0.006; // Ajuste a velocidade da rotação alterando este valor
    }

    // Chama o próximo quadro de animação
    requestAnimationFrame(rotateImages);
}

// Função para parar a rotação
function stopRotation() {
    isRotating = false;
}

// Função para iniciar a rotação
function startRotation() {
    isRotating = true;
}

// Chama a função para criar as imagens
createImagesAroundCircle();

// Inicia a rotação
rotateImages();
const swiper = new Swiper('.slider-wrapper', {
    
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  breakpoints:{
    0: {
        slidesPerView: 1
    },
    620: {
        slidesPerView: 2
    },
    1024: {
        slidesPerView: 3
    }
  }

  });
