const advantage = [
    {
        id: 1,
        advantage: "Операционный блок",
        more: "Две операционных экстренной и плановой хирургии оснащенные передовым и современным оборудованием, где мы можем решать самые сложные медицинские задачи."
    },
    {
        id: 2,
        advantage: "Безопасность пациента",
        more: "Тщательно изучаем информацию о здоровье пациента и просим сдать анализы, чтобы учесть возможные противопоказания и снизить риск возможного отторжения имплантатов."
    },
    {
        id: 3,
        advantage: "Научная степень у 3-х врачей",
        more: "Врачи клиники имеют звания доктора мед наук и кмн, постоянно повышают и совершенствуют свои профессиональные навыки а также являются преподователями на кафедре клинической стоматологии РязГМУ, которая расположена на базе клиники."
    },
    {
        id: 4,
        advantage: "20+ лет опыта в имплантации",
        more: "Основатель Центра Александр Кузнецов самым первым в нашем регионе начал устанавливать импланты еще в 1998 году, что на сегодняшний день позволяет проводить самые сложные операции с предсказуемым результатом."
    },
    {
        id: 5,
        advantage: "Работа с шаблонами и цифровым планированием",
        more: "Такой подход позволяет установить имплантаты в нужное, просчитанное компьютером место, под необходимым углом и на заданную глубину, а собственная зуботехническая лаборатория позволяет сделать этот процесс наиболее быстрым и точным под контролем наших врачей быстрым."
    },
    {
        id: 6,
        advantage: "Операции без костной пластики при критичной артрофии",
        more: "Опыт наших врачей позволяет проводить операции без костной пластики (каждый случай рассматривается индивидуально), что позволяет сократить время и расходы пациента на установку имплантатов.",
    }
];

const container = document.getElementById('advantages');

advantage.forEach(item => {
  const div = document.createElement('div');
  div.className = 'item';

  div.innerHTML = `
    <div class="item-header">
      <strong>${item.advantage}</strong>
      <span class="arrow">→</span>
    </div>
    <div class="more">${item.more}</div>
  `;

  const arrow = div.querySelector('.arrow');
  const more = div.querySelector('.more');

  div.querySelector('.item-header').addEventListener('click', () => {
    more.classList.toggle('open');
    arrow.classList.toggle('open');
  });

  container.appendChild(div);
});