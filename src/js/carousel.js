document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const carousel = document.querySelector('.carousel');

    // Definir a lista de imagens com seus IDs e srcs
    const images = [
        {
            'id': '4',
            'src': './src/assets/images/feedback-04.webp',
        },
        {
            'id': '5',
            'src': './src/assets/images/feedback-05.webp',
        },
        {
            'id': '6',
            'src': './src/assets/images/feedback-06.webp',
        },
        {
            'id': '7',
            'src': './src/assets/images/feedback-07.webp',
        },
        {
            'id': '8',
            'src': './src/assets/images/feedback-08.webp',
        },
        {
            'id': '9',
            'src': './src/assets/images/feedback-09.webp',
        },
        {
            'id': '10',
            'src': './src/assets/images/feedback-10.webp',
        },
        {
            'id': '11',
            'src': './src/assets/images/feedback-11.webp',
        },
        {
            'id': '12',
            'src': './src/assets/images/feedback-12.webp',
        },
        {
            'id': '13',
            'src': './src/assets/images/feedback-13.webp',
        },
        {
            'id': '14',
            'src': './src/assets/images/feedback-14.webp',
        },
        {
            'id': '15',
            'src': './src/assets/images/feedback-15.webp',
        },
        {
            'id': '16',
            'src': './src/assets/images/feedback-16.webp',
        },
        {
            'id': '17',
            'src': './src/assets/images/feedback-17.webp',
        },
        {
            'id': '18',
            'src': './src/assets/images/feedback-18.webp',
        },
    ];

    // Criar elementos de imagem e adicioná-los ao carrossel
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.classList.add('img');
        imgElement.id = image.id;
        imgElement.src = image.src;
        carousel.appendChild(imgElement);
    });

    const slides = carousel.querySelectorAll('.img');

    let currentIndex = 0;
    const totalSlides = slides.length;

    function goToSlide(index) {
        if (index < 0) {
            index = totalSlides - 1;
        } else if (index >= totalSlides) {
            index = 0;
        }
        currentIndex = index;
    }

    function nextSlide() {
        goToSlide(currentIndex + 1);
        updateSlide();
    }

    function prevSlide() {
        goToSlide(currentIndex - 1);
        updateSlide();
    }

    function updateSlide() {
        slides.forEach((slide, index) => {
            if (index >= currentIndex && index < currentIndex + 3) {
                slide.style.display = 'block';
                if (index === currentIndex) {
                    slide.style.boxShadow = '0 0 64px 0 rgba(54, 32, 36, 0.5)';
                } else {
                    slide.style.boxShadow = 'none';
                }
            } else {
                slide.style.display = 'none';
            }
        });
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    updateSlide(); // Chamar a função inicialmente para exibir os primeiros slides
});
