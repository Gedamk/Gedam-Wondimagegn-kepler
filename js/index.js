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

