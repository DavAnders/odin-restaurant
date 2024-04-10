import Interior from "./interior.jpg";

console.log("Setting up webpack");

function content() {
  const contentDiv = document.getElementById("content");

  const description = document.createElement("p");
  description.textContent =
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

  const attributeTag = document.createElement("p");
  attributeTag.innerHTML =
    "Photo by " +
    '<a href="https://unsplash.com/@ninjason?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">' +
    "Jason Leung</a> on " +
    '<a href="https://unsplash.com/photos/photo-of-pub-set-in-room-during-daytime-poI7DelFiVA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">' +
    "Unsplash</a>";

  const image = new Image();
  image.src = Interior;

  contentDiv.appendChild(image);
  contentDiv.appendChild(attributeTag);
  contentDiv.appendChild(description);
}

content();
