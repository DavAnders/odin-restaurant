function createMenuContent() {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";

  const menuContainer = document.createElement("div");
  menuContainer.setAttribute("id", "menu-container");
  contentDiv.appendChild(menuContainer);

  const menuItemsHeader = document.createElement("h2");
  menuItemsHeader.textContent = "Menu Items";
  menuContainer.appendChild(menuItemsHeader);

  const menuItemsSection = document.createElement("div");
  menuItemsSection.setAttribute("id", "menu-items");
  menuContainer.appendChild(menuItemsSection);

  const menuItem1 = document.createElement("div");
  menuItem1.setAttribute("id", "menu-item-1");
  menuItem1.classList.add("menu-item");
  menuItemsSection.appendChild(menuItem1);

  const item1Image = document.createElement("div");
  item1Image.classList.add("menu-item-image2");
  menuItem1.appendChild(item1Image);

  const item1Header = document.createElement("h3");
  item1Header.textContent = "Big Wack";
  menuItem1.appendChild(item1Header);

  const item1Description = document.createElement("p");
  item1Description.textContent =
    "A delicious parody of the Big Mac? No, the Big Wack is a mouthwatering burger with double beef patties, special sauce, lettuce, cheese, pickles, and onions, all served on a sesame seed bun. It's the perfect choice for burger lovers who want a unique twist on a classic favorite.";
  menuItem1.appendChild(item1Description);

  const menuItem2 = document.createElement("div");
  menuItem2.setAttribute("id", "menu-item-2");
  menuItem2.classList.add("menu-item");
  menuItemsSection.appendChild(menuItem2);

  const item2Image = document.createElement("div");
  item2Image.classList.add("menu-item-image");
  menuItem2.appendChild(item2Image);

  const item2Header = document.createElement("h3");
  item2Header.textContent = "Wack Nuggets";
  menuItem2.appendChild(item2Header);

  const item2Description = document.createElement("p");
  item2Description.textContent =
    "Wack Nuggets are bite-sized pieces of tender and juicy chicken, coated in a crispy and flavorful breading. They are perfect for snacking or as a side dish. Whether you dip them in your favorite sauce or enjoy them plain, Wack Nuggets are a delicious and satisfying option for chicken lovers.";
  menuItem2.appendChild(item2Description);

  // Create drinks section
  const drinksSection = document.createElement("div");
  drinksSection.setAttribute("id", "drinks");
  contentDiv.appendChild(drinksSection);

  const drinksHeader = document.createElement("h2");
  drinksHeader.textContent = "Drinks";
  drinksSection.appendChild(drinksHeader);

  const drink1 = document.createElement("div");
  drink1.setAttribute("id", "drink-1");
  drinksSection.appendChild(drink1);

  const drink1Header = document.createElement("h3");
  drink1Header.textContent = "Soda";
  drink1.appendChild(drink1Header);

  const drink2 = document.createElement("div");
  drink2.setAttribute("id", "drink-2");
  drinksSection.appendChild(drink2);

  const drink2Header = document.createElement("h3");
  drink2Header.textContent = "Coffee";
  drink2.appendChild(drink2Header);

  // Create sides section
  const sidesSection = document.createElement("div");
  sidesSection.setAttribute("id", "sides");
  contentDiv.appendChild(sidesSection);

  const sidesHeader = document.createElement("h2");
  sidesHeader.textContent = "Sides";
  sidesSection.appendChild(sidesHeader);

  const side1 = document.createElement("div");
  side1.setAttribute("id", "side-1");
  sidesSection.appendChild(side1);

  const side1Header = document.createElement("h3");
  side1Header.textContent = "Fries";
  side1.appendChild(side1Header);

  const side2 = document.createElement("div");
  side2.setAttribute("id", "side-2");
  sidesSection.appendChild(side2);

  const side2Header = document.createElement("h3");
  side2Header.textContent = "Apple Slices";
  side2.appendChild(side2Header);
}

export default createMenuContent;
