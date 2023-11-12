let sidebarIcons = document.querySelectorAll(".sidebarIcons");
let arrowRight = document.querySelector(".arrowRight");
let middleSidebarIcons = document.querySelector(".middleSidebarIcons");
let sidebar = document.querySelector(".sidebar");
console.log(sidebarIcons.length);
let content = document.querySelector(".content");
let addClassroom = document.querySelector(".addClassroom");
let classroomGeneratorFormat = document.querySelector(
  ".classroomGeneratorFormat"
);
let enrolledClass = document.querySelector(".enrolledClass");

addClassroom.addEventListener("click", () => {
  classroomGeneratorFormat.style.opacity = 1;
  content.style.opacity = 0.3;
});

sidebar.addEventListener("mouseover", () => {
  sidebar.style.width = "300px";
  enrolledClass.style.display = "flex";
  arrowRight.style.transform = "rotate(90deg)";
});
sidebar.addEventListener("mouseout", () => {
  enrolledClass.style.display = "none";
  sidebar.style.width = "";
  arrowRight.style.transform = "rotate(0)";
});
