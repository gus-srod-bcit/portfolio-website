import { projects as matchingProjects, categories } from '../data/projectData.js';

function displayProjects(matchingProjects)
{
    const projectContainer = document.querySelector("#results");
    const template = document.querySelector("#project-template");

    matchingProjects.forEach(project => {
        const projectInstance = template.content.cloneNode(true);

        projectInstance.querySelector(".project-img").src = project.img;
        projectInstance.querySelector(".project-title").textContent = project.name;
        projectInstance.querySelector(".project-desc").textContent = project.desc;
        projectInstance.querySelector(".project-tools").textContent = project.tools;

        projectContainer.appendChild(projectInstance);
        categories.MAIN;
    })
}

function prepareFilters()
{
    const searchbar = document.querySelector("#project-search");
}

function setup()
{
    displayProjects(matchingProjects);
}

setup();