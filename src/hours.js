function createHoursSection() {
  const hoursContainer = document.createElement("div");
  hoursContainer.setAttribute("id", "hours-container");

  const hoursHeader = document.createElement("div");
  hoursHeader.setAttribute("id", "hours-header");
  hoursHeader.textContent = "Hours of Operation";
  hoursContainer.appendChild(hoursHeader);

  const hoursBody = document.createElement("div");
  hoursBody.setAttribute("id", "hours-body");
  hoursContainer.appendChild(hoursBody);

  const hoursList = document.createElement("ul");
  hoursBody.appendChild(hoursList);

  const hoursItems = [
    "Monday: 12pm - 12am",
    "Tuesday: 12pm - 12am",
    "Wednesday: 12pm - 12am",
    "Thursday: 12pm - 12am",
    "Friday: 12pm - 12am",
    "Saturday: 12pm - 12am",
    "Sunday: 12pm - 12am",
  ];

  hoursItems.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    hoursList.appendChild(listItem);
  });

  return hoursContainer;
}

export default createHoursSection;
