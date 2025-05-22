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
// ===== Handle Message Form Submission =====
const messageForm = document.forms["leave_message"];

messageForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form field values
  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;

  console.log(usersName, usersEmail, usersMessage); // For testing

  // Select the message section and list
  const messageSection = document.getElementById("messages");
  const messageList = messageSection.querySelector("ul");

  // Create new message list item
  const newMessage = document.createElement("li");
  newMessage.innerHTML = `
    <a href="mailto:${usersEmail}">${usersName}</a>
    <span>: ${usersMessage}</span>
  `;

  // Create remove button
  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";

  removeButton.addEventListener("click", function () {
    const entry = removeButton.parentNode;
    entry.remove();

    // Hide message section if empty
    if (messageList.children.length === 0) {
      messageSection.style.display = "none";
    }
  });

  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  // Show the message section
  messageSection.style.display = "block";

  // Reset the form
  messageForm.reset();
});

//===== Fetch and Display GitHub projects =====
const GITHUB_USERNAME = 'Gedamk';
const projectSection = document.getElementById('projects');
const projectList = projectSection.querySelector('ul');

const desiredRepos = ['Gedam-Wondimagegn-kepler', 'TheDogAPI'];

fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`)
  .then(response => {
    if (!response.ok) {
      throw new Error("GitHub API request failed");
    }
    return response.json();
  })
  .then(repositories => {
    const filteredRepos = repositories.filter(repo => desiredRepos.includes(repo.name));
    for (let i = 0; i < filteredRepos.length; i++) {
      const repo = filteredRepos[i];
      const projectItem = document.createElement('li');
      const projectLink = document.createElement('a');
      projectLink.href = repo.html_url;
      projectLink.innerText = repo.name;
      projectLink.target = '_blank';
      projectItem.appendChild(projectLink);
      projectList.appendChild(projectItem);
    }
  })
  .catch(error => {
    const errorMessage = document.createElement('li');
    errorMessage.innerText = "Unable to load projects at this time.";
    projectList.appendChild(errorMessage);
    console.error("Error fetching GitHub repos:", error);
  });


