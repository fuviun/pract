document.addEventListener("DOMContentLoaded", () => {
  const doctors = [
    {
      id: 1,
      name: "Кузнецов Александр Вячеславович",
      specialty:
        "Врач-имплантолог, доктор медицинских наук, профессор кафедры клинической стоматологии РязГМУ",
    },
    {
      id: 2,
      name: "Атаян Давид Вагифович",
      specialty:
        "Врач-имплантолог, кандидат медицинских наук, доцент кафедры клинической стоматологии РязГМУ ",
    },
    {
      id: 3,
      name: "Мазлум Махмуд Мохамедович",
      specialty:
        "Врач-имплантолог, ассистент кафедры клинической стоматологии РязГМУ",
    },
    {
      id: 4,
      name: "Синиченков Даниил Сергеевич",
      specialty: "Врач стоматолог-хирург, имплантолог",
    },
    {
      id: 5,
      name: "Романов Сергей Александрович",
      specialty:
        "Врач-имплантолог, ассистент кафедры хирургической стоматологии РязГМУ",
    },
    {
      id: 6,
      name: "Юрис Михаил Владимирович",
      specialty: "Врач стоматолог-хирург",
    },
    {
      id: 7,
      name: "Мишин Дмитрий Николаевич",
      specialty: "Стоматолог-ортопед, кандидат медицинских наук",
    },
    {
      id: 8,
      name: "Санникова Елена Владимировна",
      specialty: "Врач стоматолог-ортопед",
    },
    {
      id: 9,
      name: "Куревлева Алина Витальевна",
      specialty: "Врач стоматолог-ортопед",
    },
    {
      id: 10,
      name: "Илясов Вячеслав Викторович",
      specialty: "Врач стоматолог-ортопед",
    },
    {
      id: 11,
      name: "Дедова Вероника Алексеевна",
      specialty: "Врач стоматолог-ортопед",
    },
  ];

  const sliderTrack = document.getElementById("sliderTrack-doctor");
  const prevBtn = document.querySelector(".slider-btn.back");
  const nextBtn = document.querySelector(".slider-btn.next");

  doctors.forEach((doctor) => {
    const card = document.createElement("div");
    card.className = "doctor-card";
    card.innerHTML = `
      <img src="img/doctor/doc_${doctor.id}.webp" alt="${doctor.name}">
      <h3>${doctor.name}</h3>
      <p>${doctor.specialty}</p>
    `;
    sliderTrack.appendChild(card);
  });

  const slides = sliderTrack.children;
  let currentIndex = 0;
  const slidesPerView = 3;

  function updateSlider() {
    const slideWidth = slides[0].offsetWidth + 15;
    sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  nextBtn.addEventListener("click", () => {
    if (currentIndex < slides.length - slidesPerView) {
      currentIndex++;
      updateSlider();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  window.addEventListener("resize", updateSlider);
  updateSlider();
});
