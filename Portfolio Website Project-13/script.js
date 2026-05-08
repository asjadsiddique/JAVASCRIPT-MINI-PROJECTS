const AboutSection = document.querySelectorAll(".sub-titles")
const tabContent = document.querySelector(".tab-contents")
const Skills = document.querySelector("#skills")
const Experience = document.querySelector("#experience")
const Education = document.querySelector("#education")
const menuIcon = document.querySelector(".menu-icon")
const closeIcon = document.querySelector(".close-menu")
const sidemenu = document.querySelector("#side-menu")



onload = ()=>{
showtab()
}
function showtab() {
        Skills.classList.add("activecontents")
}
function ShowTabs() {
    const Tab1 = document.querySelector("#tab-1")
Tab1.addEventListener("click",()=>{
    Skills.classList.add("activecontents")
    Experience.classList.remove("activecontents")
    Education.classList.remove("activecontents")
    Tab1.classList.add("active-link")
    Tab2.classList.remove("active-link")
    Tab3.classList.remove("active-link")



})
const Tab2 = document.querySelector("#tab-2")
Tab2.addEventListener("click",()=>{
     Experience.classList.add("activecontents")
    Skills.classList.remove("activecontents")
    Education.classList.remove("activecontents")
    Tab2.classList.add("active-link")
     Tab1.classList.remove("active-link")
    Tab3.classList.remove("active-link")



})
const Tab3 = document.querySelector("#tab-3")
Tab3.addEventListener("click",()=>{
    Education.classList.add("activecontents")
    Skills.classList.remove("activecontents")
     Experience.classList.remove("activecontents")
    Tab3.classList.add("active-link")
     Tab1.classList.remove("active-link")
    Tab2.classList.remove("active-link")


    
})
}
ShowTabs()



document.addEventListener("click", (e) => {
  
  if (e.target.closest(".menu-icon")) {
    console.log("OPEN");
    sidemenu.style.right = "0";
  }

  if (e.target.closest(".close-menu")) {
    console.log("CLOSE");
    sidemenu.style.right = "-150px";
  }

});
