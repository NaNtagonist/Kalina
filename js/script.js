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
    document.addEventListener('DOMContentLoaded', function () {
      const viewer = document.getElementById('imageViewer');
      const viewerImage = document.getElementById('viewerImage');
      const closeBtn = document.querySelector('.close-btn');
      const prevBtn = document.querySelector('.prev-btn');
      const nextBtn = document.querySelector('.next-btn');
      const imageCounter = document.getElementById('imageCounter');
    
      let currentIndex = 0;
      let currentImages = [];
    
      const setupViewer = (slides, imagesArray) => {
        slides.forEach((slide, index) => {
          slide.addEventListener('click', () => {
            currentIndex = index;
            currentImages = imagesArray;
            openViewer();
          });
        });
      };
    
      const clinicSlides = document.querySelectorAll('.viewer-clinic');
      const workSlides = document.querySelectorAll('.viewer-cer');
    
      const clinicImages = Array.from(clinicSlides).map(slide =>
        slide.style.backgroundImage.replace('url("', '').replace('")', '')
      );
      const workImages = Array.from(workSlides).map(slide =>
        slide.style.backgroundImage.replace('url("', '').replace('")', '')
      );
    
      setupViewer(clinicSlides, clinicImages);
      setupViewer(workSlides, workImages);
    
      function openViewer() {
        viewer.classList.add('active');
        viewerImage.src = currentImages[currentIndex];
        updateCounter();
        document.body.style.overflow = 'hidden';
      }
    
      function updateCounter() {
        imageCounter.textContent = `${currentIndex + 1} / ${currentImages.length}`;
      }
    
      function navigate(direction) {
        viewerImage.classList.remove('active-image');
        setTimeout(() => {
          currentIndex =
            direction === 'next'
              ? (currentIndex + 1) % currentImages.length
              : (currentIndex - 1 + currentImages.length) % currentImages.length;
    
          viewerImage.src = currentImages[currentIndex];
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
    
      viewerImage.classList.add('active-image');
    });
    

// Для проявляения кнопки онлайн-записи
const element = document.querySelector('.btn-fixed');
const triggerScrollPosition = 300; // Пиксели, после которых элемент появится

window.addEventListener('scroll', () => {
  if (window.scrollY > triggerScrollPosition) {
    element.classList.add('visible');
  } else {
    element.classList.remove('visible');
  }
});

// Для хедера исчезновение фона при скроле

document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header');
  let lastScrollTop = 0;
  const scrollThreshold = 30; 

  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > scrollThreshold) {
      header.classList.add('scrolled');
    } 
    else if (currentScroll === 0) {
      header.classList.remove('scrolled');
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
});