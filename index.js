import { projects } from './projects.js'


const projectsContainer = document.querySelector('.projects');
const leftSwitch = document.querySelector('.page-switching__left');
const rightSwitch = document.querySelector('.page-switching__right');
const maxPage = projects[projects.length - 1].page;
let currentPage = 1;

const getItems = (page) => {
  return projects.filter(item => item.page === page);
}

const getProjectTemplate = (project) => {
  const {
    title,
    description,
    demoURL,
    sourceURL,
    badges
  } = project;

  const getBadgesSectionElement = (badges) => {
    let section = document.createElement('div');
    section.className = 'tech-stack';

    badges.forEach(badge => {
      const badgeElement = document.createElement('span');
      badgeElement.className =  `${badge}-badge`;
      badgeElement.textContent = badge;
      section.append(badgeElement)
    })

    return section;
  }

  const projectContainerElement = document.createElement('div');
  projectContainerElement.className = 'project-container';

  const projectElement = document.createElement('div');
  projectElement.className = 'project';

  const projectTitleElement = document.createElement('div');
  projectTitleElement.className = 'project-title title-font';
  projectTitleElement.textContent = title;

  const buttonDemoElement = document.createElement('button');
  buttonDemoElement.className = 'button-primary demo';

  const demoLinkElement = document.createElement('a');
  demoLinkElement.href = demoURL;
  demoLinkElement.target = '_blank';
  demoLinkElement.textContent = 'demo';

  const sourceLinkElement = document.createElement('a');
  sourceLinkElement.href = sourceURL;
  sourceLinkElement.target = '_blank';

  const imageElement = document.createElement('img');
  imageElement.className = 'github-image';
  imageElement.src = 'img/github.svg';

  const projectDescriptionElement = document.createElement('div');
  projectDescriptionElement.className = 'project-description';
  projectDescriptionElement.textContent = description;

  projectElement.append(projectTitleElement)
  buttonDemoElement.appendChild(demoLinkElement);
  projectElement.append(buttonDemoElement);
  sourceLinkElement.append(imageElement);
  projectElement.append(sourceLinkElement)

  projectContainerElement.append(projectElement);
  projectContainerElement.append(projectDescriptionElement);
  projectDescriptionElement.append(getBadgesSectionElement(badges))

  return projectContainerElement;
}

const render = (items) => {
  const headerElement = document.createElement('h4');
  headerElement.textContent = 'Projects';
  projectsContainer.append(headerElement)

  for (let item of items) {
    const projectElement = getProjectTemplate(item);
    projectsContainer.append(projectElement);
  }

}

const clearContainer = () => projectsContainer.textContent = '';

const initialize = () => {
  const items = getItems(currentPage);
  render(items);
}

initialize();

leftSwitch.addEventListener('click', () => {
  const nextPage = --currentPage;

  if (nextPage < 1) {
    currentPage++;
    return;
  }

  const previousItems = getItems(nextPage);
  clearContainer();
  render(previousItems);
});

rightSwitch.addEventListener('click', () => {
  const nextPage = ++currentPage

  if (nextPage > maxPage) {
    currentPage--;
    return;
  }

  const nextItems = getItems(nextPage);
  clearContainer();
  render(nextItems);
});