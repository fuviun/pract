document.addEventListener('DOMContentLoaded', () => {
  const sliderTrack = document.getElementById('sliderTrack');
  const prevBtn = document.querySelector('.slider-controls .prev');
  const nextBtn = document.querySelector('.slider-controls .next');
  const slides = sliderTrack.children;
  const slidesPerView = 2;
  const totalSlides = slides.length;
  let currentIndex = 0;

  function updateSlider() {
    const slideWidth = slides[0].offsetWidth + 10;
    sliderTrack.style.transition = 'transform 0.3s ease';
    sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  nextBtn.addEventListener('click', () => {
    if (currentIndex < totalSlides - slidesPerView) {
      currentIndex += slidesPerView;
      if (currentIndex > totalSlides - slidesPerView) currentIndex = totalSlides - slidesPerView;
      updateSlider();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex -= slidesPerView;
      if (currentIndex < 0) currentIndex = 0;
      updateSlider();
    }
  });

  
  let isDragging = false;
  let startX = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;

  sliderTrack.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX;

    const matrix = window.getComputedStyle(sliderTrack).transform;
    prevTranslate = matrix !== 'none' ? parseFloat(matrix.split(',')[4]) : 0;
    currentTranslate = prevTranslate;

    sliderTrack.style.transition = 'none';
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const dx = e.pageX - startX;
    currentTranslate = prevTranslate + dx;
    sliderTrack.style.transform = `translateX(${currentTranslate}px)`;
  });

  document.addEventListener('mouseup', () => {
    if (!isDragging) return;
    isDragging = false;

    const slideWidth = slides[0].offsetWidth + 10;
    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -slideWidth / 4 && currentIndex < totalSlides - slidesPerView) {
      currentIndex += slidesPerView;
      if (currentIndex > totalSlides - slidesPerView) currentIndex = totalSlides - slidesPerView;
    } else if (movedBy > slideWidth / 4 && currentIndex > 0) {
      currentIndex -= slidesPerView;
      if (currentIndex < 0) currentIndex = 0;
    }

    updateSlider();
  });

  // Touch support
  sliderTrack.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].pageX;
    const matrix = window.getComputedStyle(sliderTrack).transform;
    prevTranslate = matrix !== 'none' ? parseFloat(matrix.split(',')[4]) : 0;
    currentTranslate = prevTranslate;
    sliderTrack.style.transition = 'none';
  });

  document.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const dx = e.touches[0].pageX - startX;
    currentTranslate = prevTranslate + dx;
    sliderTrack.style.transform = `translateX(${currentTranslate}px)`;
  });

  document.addEventListener('touchend', () => {
    if (!isDragging) return;
    isDragging = false;

    const slideWidth = slides[0].offsetWidth + 10;
    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -slideWidth / 4 && currentIndex < totalSlides - slidesPerView) {
      currentIndex += slidesPerView;
    } else if (movedBy > slideWidth / 4 && currentIndex > 0) {
      currentIndex -= slidesPerView;
    }

    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex > totalSlides - slidesPerView) currentIndex = totalSlides - slidesPerView;

    updateSlider();
  });

  window.addEventListener('resize', updateSlider);
  updateSlider();
});
