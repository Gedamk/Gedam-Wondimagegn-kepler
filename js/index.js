// ===== Footer =====
const body = document.querySelector('body');
const footer = document.createElement('footer');
body.appendChild(footer);

// Copyright
const today = new Date();
const thisYear = today.getFullYear();
const copyright = document.createElement('p');
copyright.innerHTML = `&copy; Gedam Wondimagegn ${thisYear}`;
footer.appendChild(copyright);

// ===== Add Dynamic Skills =====
const skills = [
  "JavaScript",
  "HTML",
  "CSS",
  "Git & GitHub",
  "VSCode",
  "Remote Support",
  "Asset Management"
];

const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement('li');
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}
