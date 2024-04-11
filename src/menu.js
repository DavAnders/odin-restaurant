import createHoursSection from "./hours";

function createMenuContent() {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";

  const menuItem1 = document.createElement("div");
  contentDiv.appendChild(menuItem1);

  const item1Header = document.createElement("h1");
  item1Header.textContent = "Big Wack";
  menuItem1.appendChild(item1Header);

  const item1Description = document.createElement("p");
  item1Description.textContent =
    "A delicious parody of the Big Mac? No, the Big Wack is a mouthwatering burger with double beef patties, special sauce, lettuce, cheese, pickles, and onions, all served on a sesame seed bun. It's the perfect choice for burger lovers who want a unique twist on a classic favorite.";
  menuItem1.appendChild(item1Description);

  const menuItem2 = document.createElement("div");
  contentDiv.appendChild(menuItem2);

  const item2Header = document.createElement("h1");
  item2Header.textContent = "Wack Nuggets";
  menuItem2.appendChild(item2Header);

  const item2Description = document.createElement("p");
  item2Description.textContent =
    "Wack Nuggets are bite-sized pieces of tender and juicy chicken, coated in a crispy and flavorful breading. They are perfect for snacking or as a side dish. Whether you dip them in your favorite sauce or enjoy them plain, Wack Nuggets are a delicious and satisfying option for chicken lovers.";
  menuItem2.appendChild(item2Description);

  const hoursSection = createHoursSection();
  contentDiv.appendChild(hoursSection);
}

export default createMenuContent;
