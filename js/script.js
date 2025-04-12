document.getElementById("menuToggle").addEventListener("click", () => {
    document.getElementById("fullMenu").classList.toggle("active");
    });
document.querySelectorAll(".full-menu a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("fullMenu").classList.remove("active");
    });
    });
document.getElementById("menuClose").addEventListener("click", () => {
    document.getElementById("fullMenu").classList.remove("active");
    });
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
      let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
      if (currentScroll > lastScrollTop) {
        // Скролл вниз, прячем хедер
        header.classList.add('hidden');
      } else {
        // Скролл вверх, показываем хедер
        header.classList.remove('hidden');
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // для предотвращения отрицательных значений
    });
    //вьювер 
    document.addEventListener('DOMContentLoaded', function() {
      const slides = document.querySelectorAll('.clinic-slide');
      const viewer = document.getElementById('imageViewer');
      const viewerImage = document.getElementById('viewerImage');
      const closeBtn = document.querySelector('.close-btn');
      const prevBtn = document.querySelector('.prev-btn');
      const nextBtn = document.querySelector('.next-btn');
      const imageCounter = document.getElementById('imageCounter');
      
      let currentIndex = 0;
      const images = Array.from(slides).map(slide => {
        return slide.style.backgroundImage.replace('url("', '').replace('")', '');
      });
      
      // Открытие просмотрщика
      slides.forEach((slide, index) => {
        slide.addEventListener('click', () => {
          currentIndex = index;
          openViewer();
        });
      });
      
      function openViewer() {
        viewer.classList.add('active');
        viewerImage.src = images[currentIndex];
        updateCounter();
        document.body.style.overflow = 'hidden';
      }
      
      function updateCounter() {
        imageCounter.textContent = `${currentIndex + 1} / ${images.length}`;
      }
      
      // Навигация с анимацией
      function navigate(direction) {
        viewerImage.classList.remove('active-image');
        
        setTimeout(() => {
          currentIndex = direction === 'next' 
            ? (currentIndex + 1) % images.length
            : (currentIndex - 1 + images.length) % images.length;
          
          viewerImage.src = images[currentIndex];
          updateCounter();
          
          setTimeout(() => {
            viewerImage.classList.add('active-image');
          }, 50);
        }, 300);
      }
      
      prevBtn.addEventListener('click', () => navigate('prev'));
      nextBtn.addEventListener('click', () => navigate('next'));
      

      viewer.addEventListener('click', (e) => {
        if (e.target === viewer) closeViewer();
      });
      
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeViewer();
        if (e.key === 'ArrowLeft') navigate('prev');
        if (e.key === 'ArrowRight') navigate('next');
      });
      
      function closeViewer() {
        viewer.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
      
      // Инициализация класса для изображения
      viewerImage.classList.add('active-image');
    });