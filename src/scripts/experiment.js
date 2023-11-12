// const sidebarEnrolledClass = document.querySelector("#sidebarEnrolledClass");
// const li = document.createElement("li");
// sidebarEnrolledClass.append(li);

function generateSidebarClass() {
  let sidebarClassName = prompt("Enter Name: ");
  let sidebarClassSchedule = prompt("Enter Schedule: ");
  let logoLabel = sidebarClassName[0];

  // Get the blueprint element
  const blueprintSidebarClass = document.querySelector("#sidebarEnrolledList");

  // Clone the blueprint element, including styles
  const newSidebarClass = blueprintSidebarClass.cloneNode(true);

  newSidebarClass.querySelector(".sidebarClassName").textContent =
    sidebarClassName;
  newSidebarClass.querySelector(".sidebarClassSchedule").textContent =
    sidebarClassSchedule;
  newSidebarClass.querySelector(".sidebarClassIcon").textContent = logoLabel;

  sidebarEnrolledClass.appendChild(newSidebarClass);
}
