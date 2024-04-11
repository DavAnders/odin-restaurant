function createReservationForm() {
  const contentDiv = document.getElementById("content");

  const reservationForm = document.createElement("div");
  reservationForm.setAttribute("id", "reservation-form");
  reservationForm.style.display = "none";

  const heading = document.createElement("h2");
  heading.textContent = "Reservation Form";

  const form = document.createElement("form");

  const dateLabel = document.createElement("label");
  dateLabel.textContent = "Date:";
  dateLabel.setAttribute("for", "date");
  const dateInput = document.createElement("input");
  dateInput.setAttribute("type", "date");
  dateInput.setAttribute("id", "date");
  dateInput.setAttribute("name", "date");
  dateInput.setAttribute("required", true);

  const emailLabel = document.createElement("label");
  emailLabel.textContent = "What is your email?";
  emailLabel.setAttribute("for", "email");
  const emailInput = document.createElement("input");
  emailInput.setAttribute("type", "email");
  emailInput.setAttribute("id", "email");
  emailInput.setAttribute("name", "email");
  emailInput.setAttribute("required", true);

  const reasonLabel = document.createElement("label");
  reasonLabel.textContent = "Tell us why you deserve to eat here:";
  reasonLabel.setAttribute("for", "reason");
  const reasonTextarea = document.createElement("textarea");
  reasonTextarea.setAttribute("id", "reason");
  reasonTextarea.setAttribute("name", "reason");
  reasonTextarea.setAttribute("rows", "4");
  reasonTextarea.setAttribute("cols", "50");
  reasonTextarea.setAttribute("required", true);

  const submitBtn = document.createElement("input");
  submitBtn.setAttribute("type", "submit");
  submitBtn.setAttribute("value", "Submit");

  form.appendChild(dateLabel);
  form.appendChild(dateInput);
  form.appendChild(document.createElement("br"));
  form.appendChild(emailLabel);
  form.appendChild(emailInput);
  form.appendChild(document.createElement("br"));
  form.appendChild(reasonLabel);
  form.appendChild(document.createElement("br"));
  form.appendChild(reasonTextarea);
  form.appendChild(document.createElement("br"));
  form.appendChild(submitBtn);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const date = formData.get("date");
    const email = formData.get("email");
    const reason = formData.get("reason");

    console.log("Reservation Details:");
    console.log("Date:", date);
    console.log("Email:", email);
    console.log("Reason:", reason);

    event.target.reset();
    reservationForm.style.display = "none";

    alert(
      "Thank you for your reservation request! Our highly selective committee will review your submission and determine if you're worthy of dining with us. We'll get back to you... eventually."
    );
  });

  reservationForm.appendChild(heading);
  reservationForm.appendChild(form);

  contentDiv.appendChild(reservationForm);
}

export default createReservationForm;
