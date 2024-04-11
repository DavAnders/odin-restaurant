import { content } from "./content";
import createMenuContent from "./menu";
import createAboutContent from "./about";

console.log("Setting up webpack");

function switchTab(tabName) {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";

  switch (tabName) {
    case "home":
      content();
      break;
    case "menu":
      createMenuContent();
      break;
    case "about":
      createAboutContent();
      break;
    default:
      content();
  }
}
const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const aboutBtn = document.getElementById("about-btn");

homeBtn.addEventListener("click", () => switchTab("home"));
menuBtn.addEventListener("click", () => switchTab("menu"));
aboutBtn.addEventListener("click", () => switchTab("about"));

content();
