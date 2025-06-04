const footer = document.createElement('footer');
document.body.appendChild(footer);
const thisYear = new Date().getFullYear();
footer.innerHTML = `<p>&copy; Gedam Wondimagegn ${thisYear}</p>`;

// Dynamic Skills
const skills = [
  "Frontend: HTML, CSS, JavaScript (in progress)",
  "Version Control: Git, GitHub",
  "IT Support: Google IT Support, Comptia A+ (completed training)",
  "Software: Antivirus, iOS, Android OS",
  "Hardware: Desktops, Laptops, Printers",
  "Networking: Virtualization, Basic Security Concepts"
];
skills.forEach(skill => {
  const li = document.createElement("li");
  li.textContent = skill;
  document.getElementById("skills-list").appendChild(li);
});

// Form submission with Edit & Remove
const messageForm = document.forms["leave_message"];
messageForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = event.target.usersName.value;
  const email = event.target.usersEmail.value;
  const message = event.target.usersMessage.value;

  const messageSection = document.getElementById("messages");
  const messageList = messageSection.querySelector("ul");
  const newMessage = document.createElement("li");
  const messageSpan = document.createElement("span");

  messageSpan.innerHTML = `<a href="mailto:${email}">${name}</a>: ${message}`;
  newMessage.appendChild(messageSpan);

  // Edit button
  const editButton = document.createElement("button");
  editButton.textContent = "edit";
  editButton.addEventListener("click", () => {
    const newText = prompt("Edit your message:", message);
    if (newText && newText.trim() !== "") {
      messageSpan.innerHTML = `<a href="mailto:${email}">${name}</a>: ${newText}`;
    }
  });

  // Remove button
  const removeButton = document.createElement("button");
  removeButton.textContent = "remove";
  removeButton.addEventListener("click", () => {
    newMessage.remove();
    if (messageList.children.length === 0) {
      messageSection.style.display = "none";
    }
  });

  newMessage.appendChild(editButton);
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  messageSection.style.display = "block";
  messageForm.reset();
});

<<<<<<< HEAD
//===== Fetch and Display GitHub projects =====
=======
// Fetch GitHub projects
>>>>>>> lesson-13
const GITHUB_USERNAME = 'Gedamk';
const desiredRepos = ['Gedam-Wondimagegn-kepler', 'TheDogAPI'];
const projectList = document.querySelector('#projects ul');

fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`)
<<<<<<< HEAD
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
=======
  .then(res => res.json())
  .then(repos => {
    repos
      .filter(repo => desiredRepos.includes(repo.name))
      .forEach(repo => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = repo.html_url;
        a.target = "_blank";
        a.textContent = repo.name;
        li.appendChild(a);
        projectList.appendChild(li);
      });
>>>>>>> lesson-13
  })
  .catch(() => {
    const li = document.createElement('li');
    li.textContent = "Failed to load GitHub projects.";
    projectList.appendChild(li);
  });



