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
  "Frontend: HTML, CSS, JavaScript (in progress)",
  "Version Control: Git, GitHub",
  "IT Support: Google IT Support, Comptia A+ (completed training)",
  "Software: Antivirus, iOS, Android OS",
  "Hardware: Desktops, Laptops, Printers",
  "Networking: Virtualization, Basic Security Concepts"
];

const skillsList = document.getElementById("skills-list");

skills.forEach(skill => {
  const li = document.createElement("li");
  li.textContent = skill;
  skillsList.appendChild(li);
});

