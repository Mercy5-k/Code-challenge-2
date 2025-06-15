document.addEventListener("DOMContentLoaded",() => {
   const form = document.getElementById("guest-form");
   const guestList = document.getElementById("guest-list");
   const nameInput = document.getElementById ("guest-name"); 
   const guestCategory = document.getElementById("guest-category");

   const toggle = document.createElement("button");
toggle.textContent = "Toggle Dark Mode";
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

document.body.prepend(toggle);
   form.addEventListener ("submit", function(event){
    event.preventDefault();

    if ( guestList.children.length >=10) {
        alert("Guest limit of 10 reached!");
        return;
    }
    const name = nameInput.value.trim();
    const category = guestCategory.value;
    const timestamp = new Date().toLocaleTimeString();
    
    if (!name) return;

    const li = document.createElement("li");
    li.classList.add(`category-${category}`);

    const guestInfo = document.createElement("span");
    guestInfo.textContent = `${name} (${category}) - Added at ${timestamp}`;


    const rsvpButton = document.createElement("button");
    rsvpButton.textContent = "RSVP: Not Attending";
    rsvpButton.classList.add("not-attending");
    rsvpButton.addEventListener("click", () => {
      const isAttending = rsvpButton.classList.contains("attending");
      rsvpButton.textContent = `RSVP: ${isAttending ? "Not Attending" : "Attending"}`;
      rsvpButton.classList.toggle("attending");
      rsvpButton.classList.toggle("not-attending");
    });

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => {
      const newName = prompt("Edit guest name:", guestName);
      if (newName) {
        guestInfo.textContent = `${newName} (${category}) - Edited at ${new Date().toLocaleTimeString()}`;
      }
    });

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => li.remove());

    li.append(guestInfo, rsvpButton, editButton, removeButton);
    guestList.appendChild(li);

    nameInput.value = "";
  });
});