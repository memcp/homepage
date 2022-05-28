import { technologies } from './technologies.js';

const asideContainer = document.querySelector('aside');
const skillsContainer = document.querySelector('.skills');
const skills = document.querySelectorAll('.skill');

const clearAside = () => {
  asideContainer.innerHTML = '';
};

const showSelectedTechnology = (e) => {
  const title = e.target.querySelector('figcaption.skill__title');
  if (title) {
    clearAside();
    const property = title.innerHTML.toLowerCase();
    asideContainer.insertAdjacentHTML('beforeend', technologies[property]);
  }
};

skills.forEach((skill) => {
  skill.addEventListener('focus', (e) => showSelectedTechnology(e));
  skill.addEventListener('mouseenter', (e) => showSelectedTechnology(e));
});

document.addEventListener('click', (e) => {
  let isClickInsideSkills = skillsContainer.contains(e.target);

  if (!isClickInsideSkills) {
    clearAside();
  }
});

skillsContainer.addEventListener('mouseleave', () => {
  clearAside();
});