
    function toggleMenu() {
      document.getElementById('nav-links').classList.toggle('active');
    }

    // Banner Carousel
    const slides = document.querySelector('.slides');
    let index = 0;
    setInterval(() => {
      index = (index + 1) % 4;
      slides.style.transform = `translateX(-${index * 100}%)`;
    }, 4000);

    // Brand Carousel
    // const brandSlides = document.querySelector('.brand-slides');
    // let brandIndex = 0;
    // setInterval(() => {
    //   brandIndex = (brandIndex + 1) % 4;
    //   brandSlides.style.transform = `translateX(-${brandIndex * 100}%)`;
    // }, 3000);