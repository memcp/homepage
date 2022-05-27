import { technologies } from './technologies.js';

const asideContainer = document.querySelector('aside');
const skills = document.querySelectorAll('.skill');
const template = document.createElement('template');

const showSelectedTechnology = (e) => {
  const title = e.target.querySelector('figcaption.skill__title').innerHTML;
  const property = title.toLowerCase();
  asideContainer.insertAdjacentHTML('beforeend', technologies[property]);
}

const clearAside = () => {
  asideContainer.innerHTML = '';
}

skills.forEach((skill) => {
  skill.addEventListener('focus', (e) => showSelectedTechnology(e));
  skill.addEventListener('hover', (e) => showSelectedTechnology(e))
  skill.addEventListener('blur', () => clearAside());
});