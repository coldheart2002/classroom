function closeClassroomGenerator() {
  // After generating a classroom, reset input fields and color picker
  document.getElementById("className").value = "";
  document.getElementById("classSchedule").value = "";
  document.getElementById("classInstructor").value = "";
  document.getElementById("colorPicker").value = "#000000"; // Set default color if needed

  classroomGeneratorFormat.style.opacity = 0;
  content.style.opacity = 1;
}

function generateClassroom() {
  // Prompt the user for input
  const className = document.getElementById("className").value;
  const classSchedule = document.getElementById("classSchedule").value;
  const classInstructor = document.getElementById("classInstructor").value;

  if (!className || !classSchedule || !classInstructor) {
    alert("Please fill in all required fields.");
    return;
  }

  // Get the blueprint element of Content
  const blueprintClassroom = document.querySelector(".classroom");

  // Clone the blueprint element, including styles
  const newClassroom = blueprintClassroom.cloneNode(true);

  // Update the content with the provided data
  newClassroom.querySelector(".className").textContent = className;
  newClassroom.querySelector(".classSchedule").textContent = classSchedule;
  newClassroom.querySelector(".classInstructor").textContent = classInstructor;

  // Get the selected color from the color picker input
  const chosenColor = document.getElementById("colorPicker").value;

  // Customize the background color
  newClassroom.querySelector(".classroomHeading").style.backgroundColor =
    chosenColor;

  // Append the new div to the .classroomContainer
  document.querySelector(".classroomContainer").appendChild(newClassroom);

  // Get the blueprint element of Sidebar
  const blueprintSidebarClass = document.querySelector("#sidebarEnrolledList");

  // Clone the blueprint element, including styles
  const newSidebarClass = blueprintSidebarClass.cloneNode(true);

  newSidebarClass.querySelector(".sidebarClassName").textContent = className;
  newSidebarClass.querySelector(".sidebarClassSchedule").textContent =
    classSchedule;
  newSidebarClass.querySelector(".sidebarClassIcon").textContent = className[0];
  newSidebarClass.querySelector(".sidebarClassIcon").style.backgroundColor =
    chosenColor;

  //Append
  sidebarEnrolledClass.appendChild(newSidebarClass);

  // After generating a classroom, reset input fields and color picker
  document.getElementById("className").value = "";
  document.getElementById("classSchedule").value = "";
  document.getElementById("classInstructor").value = "";
  document.getElementById("colorPicker").value = "#000000"; // Set default color if needed

  classroomGeneratorFormat.style.opacity = 0;
  content.style.opacity = 1;
}
console.log(document.querySelector(".classroom"));
console.log(document.querySelector("#sidebarEnrolledClass"));
