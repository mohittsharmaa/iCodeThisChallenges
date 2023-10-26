// Add JavaScript code here
const bell_popup = document.querySelector(".bell_notification")
const profile_avatar = document.querySelector(".profile__picture")
const bell = document.querySelector(".bell__icon")
const lower_part = document.querySelector(".lower__div")
const upper_part = document.querySelector(".upper__div")
let show_panel = true
let notifications_allowed = true;


bell.addEventListener("click", () => {
    if (notifications_allowed) {
        
        bell_popup.style.display = "grid"; // Show the div
        bell_popup.textContent = "Notifications have been turned off.";
        setTimeout(() => {
            bell_popup.style.display = "none";
        },2000)
    } else {
        bell_popup.style.display = "grid"; // Show the div
        bell_popup.textContent = "Notifications have been turned on.";
        setTimeout(() => {
            bell_popup.style.display = "none";
        }, 2000)
    }
    notifications_allowed = !notifications_allowed
});

profile_avatar.addEventListener("click", () => {
    if (show_panel) {
        lower_part.style.display = "none";
        upper_part.style.display = "flex";
        upper_part.style.alignItems = "center";
        upper_part.style.justifyContent = "center";
    }
    else {
        lower_part.style.display = "block"
        upper_part.style.alignItems = "";
        upper_part.style.justifyContent = "";
    }
    show_panel = !show_panel
})
