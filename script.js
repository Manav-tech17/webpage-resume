const formPage = document.getElementById("formPage");
const resumePage = document.getElementById("resumePage");
const form = document.getElementById("resumeForm");

window.addEventListener("load", () => {
  const saved = JSON.parse(localStorage.getItem("resumeData"));
  if (saved) showResume(saved);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    education: document.getElementById("education").value,
    skills: document.getElementById("skills").value,
    experience: document.getElementById("experience").value,
  };
  localStorage.setItem("resumeData", JSON.stringify(data));
  showResume(data);
});

function showResume(d) {
  document.getElementById("rName").textContent = d.name;
  document.getElementById("rEmail").textContent = d.email;
  document.getElementById("rPhone").textContent = d.phone;
  document.getElementById("rEducation").textContent = d.education;
  document.getElementById("rExperience").textContent = d.experience;
  document.getElementById("rSkills").innerHTML = d.skills
    .split(",")
    .map(s => `<li>${s.trim()}</li>`)
    .join("");
  formPage.style.display = "none";
  resumePage.style.display = "flex";
}

document.getElementById("editBtn").addEventListener("click", () => {
  resumePage.style.display = "none";
  formPage.style.display = "flex";
});
