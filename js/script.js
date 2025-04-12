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
    
    