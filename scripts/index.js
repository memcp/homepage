import { technologies } from './technologies.js';

const asideContainer = document.querySelector('aside');
const skills = document.querySelectorAll('.skill');
const template = document.createElement('template');

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
  skill.addEventListener('mouseleave', () => clearAside());
});