import Interior from "./interior.jpg";
import createReservationForm from "./reservation";

function content() {
  const contentDiv = document.getElementById("content");
  contentDiv.classList.add("content-background");

  const description = document.createElement("p");
  description.classList.add("description-p");
  description.textContent =
    "WackDonald's: The world's premiere dining location";

  const attributeTag = document.createElement("p");
  attributeTag.classList.add("attribute-p");
  attributeTag.innerHTML =
    "Not a real restaurant page. Photo by " +
    '<a href="https://unsplash.com/@ninjason?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">' +
    "Jason Leung</a> on " +
    '<a href="https://unsplash.com/photos/photo-of-pub-set-in-room-during-daytime-poI7DelFiVA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">' +
    "Unsplash</a>";

  const image = new Image();
  image.src = Interior;

  const existingReservationForm = document.getElementById("reservation-form");

  contentDiv.appendChild(image);
  contentDiv.appendChild(attributeTag);
  contentDiv.appendChild(description);

  if (!existingReservationForm) {
    const callToAction = document.createElement("button");
    callToAction.classList.add("reservation-btn");
    callToAction.innerText = "Make a Reservation";
    callToAction.addEventListener("click", () => {
      createReservationForm();
      document.getElementById("reservation-form").style.display = "block";
    });
    contentDiv.appendChild(callToAction);
  }
}

export { content };
