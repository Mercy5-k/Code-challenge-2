document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("guest-form");
  const guestList = document.getElementById("guest-list");
  const nameInput = document.getElementById("guest-name");
  const guestCategory = document.getElementById("guest-category");
  const guestCount = document.getElementById("guest-count");
  const progressBar = document.getElementById("progress-bar");

   function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: 'numeric', minute: 'numeric' });
    const day = now.toLocaleDateString(undefined, { weekday: 'long' });
    document.getElementById("clock").textContent = `${day}, ${time}`;
  }
  setInterval(updateClock, 1000);
  updateClock();

 const toggle = document.createElement("button");
  toggle.textContent = "🌓 Toggle Dark Mode";
  toggle.style.marginBottom = "1rem";
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
  document.body.insertBefore(toggle, document.body.firstChild);

let toastTimeout;
  function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  }

   form.addEventListener ("submit", function(event){
    event.preventDefault();

    if ( guestList.children.length >=10) {
        alert("Guest limit of 10 reached!");
         confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
        return;
    }

    const name = nameInput.value.trim();
    const category = guestCategory.value;
    const timestamp = new Date().toLocaleTimeString([], {
      hour: "numeric",
      minute: "numeric",
    });
    
    if (!name) return;

    let emoji = "👤";
    if (category === "Friend") emoji = "👫";
    else if (category === "Family") emoji = "👨‍👩‍👧‍👦";
    else if (category === "Colleague") emoji = "💼";

    const li = document.createElement("li");
    li.classList.add(`category-${category}`);

    const avatar = document.createElement("div");
    avatar.textContent = emoji;
    avatar.className = `avatar avatar-${category.toLowerCase()}`;

    const guestInfo = document.createElement("span");
    guestInfo.textContent = `${name} (${category}) - Added at ${timestamp}`;

    const infoContainer = document.createElement("div");
    infoContainer.style.display = "flex";
    infoContainer.style.alignItems = "center";
    infoContainer.append(avatar, guestInfo);

    const rsvpButton = document.createElement("button");
    rsvpButton.textContent = "RSVP: Not Attending ❌";
    rsvpButton.classList.add("not-attending");
    rsvpButton.addEventListener("click", () => {
      const isAttending = rsvpButton.classList.contains("attending");
      rsvpButton.textContent = `RSVP: ${isAttending ? "Not Attending ❌" : "Attending ✅"}`;
      rsvpButton.classList.toggle("attending");
      rsvpButton.classList.toggle("not-attending");
       rsvpButton.style.backgroundColor = isAttending ? "red" : "green";
      rsvpButton.style.color = "white";
    });

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => {
      const newName = prompt("Edit guest name:", name);
      if (newName) {
        guestInfo.textContent = `${newName} (${category}) - Edited at ${new Date().toLocaleTimeString([], {
          hour: "numeric",
          minute: "numeric",
        })}`;
        showToast("Guest name updated.");
      }
    });

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      li.style.transition = "opacity 0.4s ease";
      li.style.opacity = 0;
      setTimeout(() => {
        li.remove();
        updateCounter();
        showToast("Guest removed.");
      }, 400);
    });

    li.append(infoContainer, rsvpButton, editButton, removeButton);
    guestList.appendChild(li);

    nameInput.value = "";
    updateCounter();
    showToast("Guest added!");
  });

 function updateCounter() {
    const count = guestList.children.length;
    guestCount.textContent = count;
    progressBar.value = count;
  }
});