let FirstName = document.getElementById("FirstName");
let LastName = document.getElementById("LastName");
let CodeStackEmail = document.getElementById("CodeStackEmail");
let PersonalEmail = document.getElementById("PersonalEmail");
let GenerateBtn = document.getElementById("GenerateBtn");
let nameHistory = document.getElementById("nameHistory");
let previousNames = new Array(5).fill("");

function getStudentsData() {
  return fetch("../data/data.json").then((response) => response.json());
}

function getRandomStudent() {
  getStudentsData().then((students) => {
    const randomNum = Math.floor(Math.random() * students.length);
    const randomName =
      students[randomNum].FirstName + " " + students[randomNum].LastName;
    console.log(randomNum);
    FirstName.innerText = students[randomNum].FirstName;
    LastName.innerText = students[randomNum].LastName;
    CodeStackEmail.innerText = students[randomNum].CodeStackEmail;
    PersonalEmail.innerText = students[randomNum].PersonalEmail;
    updateNameHistory(randomName);
  });
}

function updateNameHistory(randomName) {
  for (let i = previousNames.length - 1; i > 0; i--) {
   previousNames[i] = previousNames[i-1];
    }
    previousNames[0] = randomName
    addNameHistory();
  }

  function addNameHistory() {
    nameHistory.innerText = "";
    for (let i = 0; i < previousNames.length; i++) {
        if (previousNames[i]) {
            const listItem = document.createElement("li");
            listItem.textContent = previousNames[i];
            nameHistory.appendChild(listItem);
        }
    }
}

GenerateBtn.addEventListener("click", getRandomStudent);
