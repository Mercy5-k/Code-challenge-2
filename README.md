# Code Challenge 2

Hello!Welcome to Code Challenge 2 — a little project born out of my love for building useful tools with just the basics.This challenge was about making a functional, user-friendly guest list manager for events. Nothing fancy or over-engineered, just something real that you could open, use, and learn from.It started as a small code challenge — a way to sharpen my core front-end skills — but along the way, it grew some personality and little quirks that make it more than just a list.The goal was simple: build a dynamic guest list manager using nothing but HTML, CSS, and JavaScript.

## 🖼 Preview

Here’s what it looks like in action:

![Guest List Manager Screenshot]![Screenshot](https://github.com/user-attachments/assets/3b3eec4b-78e5-4b0c-a772-762c77b06a8f)


## What It Does

It's more than a list — it's a small, fully interactive app with personality. Here's what it offers:

🧑‍🤝‍🧑 <strong> Add Guests </strong>

* Users can add a name and select a category: Friend, Family, or Colleague.

* Each guest appears with an emoji avatar and category label.

* A timestamp shows when the guest was added, for extra clarity.


✅ <strong> RSVP Status Toggle  </strong>

✅ RSVP Status Toggle
* Guests can toggle their RSVP status between “Attending ✅” and “Not Attending ❌”.

* Each state is styled visually (color-coded and updated button text), adding personality and clarity.

✏️ <strong> Edit & Remove Guests  </strong>

* Guests can be edited via a prompt dialog.

* Remove a guest with a smooth fade-out animation.

* The guest counter and progress bar update automatically.

🌙 <strong> Dark Mode  </strong>

* A toggle button lets users switch between light and dark themes.

* Backgrounds, text, buttons, and list items all adapt for better readability and mood.

🕒 <strong> Live Clock  </strong>

* The current time and day are displayed in real time.

* A subtle UI element that makes the app feel "alive."

📊 <strong> Progress Bar </strong>

* A sleek progress bar visually tracks how close the user is to the 10-guest limit.

* At 10 guests, the form locks down and throws a little surprise…

🎉 <strong> Confetti Celebration </strong>

* When the 10th guest is added, confetti bursts from the top!

* It’s completely unnecessary but makes it 10x more fun.

🔔 <strong> Toast Notifications </strong>

* Actions like “Guest added”, “Guest removed”, and “Name updated” trigger toast messages for quick feedback.

* Toasts fade in/out and don’t interrupt flow.


## Tech Stack
I built this project with a focus on learning and using the browser’s core capabilities without any external libraries:

<strong> HTML </strong> – semantic layout with accessibility in mind

<strong> CSS </strong> – layout, colors, transitions, responsive design, and dark mode theming

<strong> JavaScript </strong> – ES6+ syntax (arrow functions, const/let, template literals), DOM manipulation, event handling, timers, and logic for state management

No package managers, no build tools. The entire app runs client-side, and everything is contained in three files: index.html, style.css, and index.js.

## What I Learned

This challenge helped me get more comfortable with several core front-end skills:

<strong> DOM State Management </strong>

* Creating and updating UI elements without a framework means learning how to track, update, and remove items efficiently using just the DOM.

<strong> Event-Driven Programming </strong>

* I practiced using event listeners for form submission, button clicks, and UI toggles. I learned how to chain and nest them cleanly, and how to avoid unnecessary re-renders.

<strong> CSS Styling and Feedback </strong>

* Animations (like toast messages and fade-outs), dark mode theming, hover effects, and avatars added a lot of personality — and taught me how much detail matters in front-end design.

<strong> Logic and Flow </strong>

* There are conditionals for edge cases (e.g., empty names, hitting the guest limit), and I had to ensure state updates didn’t cause bugs or inconsistencies.

## What I’d Improve or Add Next

This is a solid starting point, but I have a few stretch goals I’d love to tackle when I revisit this project:

* localStorage: Persist guest data across page reloads so the list isn’t lost.

* Search & Filter: Let users filter guests by category or search by name.

* Custom Avatars: Allow users to upload a picture or choose an emoji.

* Export List: Add a button to download the guest list as a .csv or .json.

* Drag & Drop: Let users reorder guests manually for prioritization.

* Better Mobile UX: Currently it's usable on small screens, but there's room for improvement in responsiveness and layout adjustments.

## How to Run the Project
You don’t need anything fancy to run this — just clone the repo and open the HTML file in your browser:

bash
Copy code
git clone https://github.com/Mercy5-k/code-challenge-2.git

cd code-challenge-2
open index.html

Alternatively, view it live here if GitHub Pages is enabled.

 ## Reflections as a Student Developer

This wasn’t just about building something that works — it was about exploring what makes an experience enjoyable to use. I got to think like a user, a designer, and a developer all at once. And even though it’s a small app, it’s packed with real problem-solving and real learning:

* Balancing structure and creativity

* Handling logic without abstraction

* Writing code that gives feedback and feels responsive

It’s projects like this that remind me why I enjoy coding — the immediate, visual payoff of building something that feels alive.

## Thanks for Checking It Out!

If you’re a student  like me or self-learner, I hope this inspires you to build something from scratch, no matter how small. Feel free to fork it, remix it, or even just study how it's structured. Every project like this is a step forward.











