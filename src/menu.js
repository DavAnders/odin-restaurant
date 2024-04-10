function createMenuContent() {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";

  const menuItem1 = document.createElement("div");
  menuItem1.textContent = "Menu Item 1";
  contentDiv.appendChild(menuItem1);

  const menuItem2 = document.createElement("div");
  menuItem2.textContent = "Menu Item 2";
  contentDiv.appendChild(menuItem2);
}

export default createMenuContent;
