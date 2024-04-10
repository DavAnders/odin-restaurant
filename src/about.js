function createAboutContent() {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";

  const aboutHeader = document.createElement("h1");
  aboutHeader.innerText = "About Us";
  contentDiv.appendChild(aboutHeader);

  const aboutContent = document.createElement("p");
  aboutContent.innerText =
    "Indulge in a culinary journey like no other at our illustrious " +
    "establishment, where every dish is a masterpiece crafted with passion " +
    "and precision. Immerse yourself in an ambiance of elegance and " +
    "sophistication as you savor the exquisite flavors of our culinary " +
    "creations, each bite a symphony of taste sensations that will transport " +
    "you to gastronomic paradise. From the moment you enter, you'll be " +
    "greeted with warmth and hospitality, ensuring that every moment of your " +
    "dining experience is nothing short of extraordinary. Come and discover " +
    "the epitome of culinary excellence at our acclaimed restaurant, where " +
    "every meal is a celebration of the senses and a feast for the soul. " +
    "Prepare to be dazzled, delighted, and utterly enchanted as you embark on " +
    "a culinary adventure you'll never forget. Welcome to a world of culinary " +
    "perfection - welcome to WackDonald's.";
  contentDiv.appendChild(aboutContent);
}

export default createAboutContent;
