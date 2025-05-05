document.addEventListener('DOMContentLoaded', () => { 
  const all = [
    {
        button_a: "All-on-4",
        button_b: "Как было до",
        before: "img/case/salaev_before.webp",
        after: "img/case/salaev_after.webp",
    },
    {
        button_a: "All-on-6",
        button_b: "Как было до",
        before: "img/case/lichachevo_before.webp",
        after: "img/case/lichachevo_after.webp",
    },
    {
        button_a: "All-on-6",
        button_b: "Как было до",
        before: "img/case/klochko_before.webp",
        after: "img/case/klochko_after.webp",
    },
    {
        button_a: "All-on-4",
        button_b: "Как было до",
        before: "img/case/case_4_before.webp",
        after: "img/case/case_4_after.webp",
    }
  ];

  const container = document.getElementById('sliders');

  all.forEach(({ id, button_a, button_b, after, before }) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'case-container';

    wrapper.innerHTML = `
      <div class="case-wrapper">
        <img class="before" src="${before}" alt="before ${id}">
        <img class="after" src="${after}" alt="after ${id}">
        <div class="buttons-container">
          <button class="toggle-btn toggle-btn-before">${button_b}</button> 
          <button class="toggle-btn toggle-btn-after">${button_a}</button>
        </div>
      </div>
    `;

    const buttons = wrapper.querySelectorAll('.toggle-btn');
    const beforeImage = wrapper.querySelector('.before');
    const afterImage = wrapper.querySelector('.after');

    afterImage.style.opacity = '1';
    
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        buttons.forEach((btn) => {
          btn.classList.remove('active');
        });
        button.classList.add('active');

        if (button.classList.contains('toggle-btn-before')) {
          beforeImage.style.opacity = '0';
          afterImage.style.opacity = '1';
        } else {
          beforeImage.style.opacity = '1';
          afterImage.style.opacity = '0';
        }
      });
    });

    container.appendChild(wrapper);
  });
});