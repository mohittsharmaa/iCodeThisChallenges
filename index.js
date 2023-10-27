// Add JavaScript code here
const following_btn = document.querySelector(".following_btn");
let following = true;

following_btn.addEventListener("click", () => {
    if (following) {
        following_btn.innerText = "Unfollow"
    }
    else {
        following_btn.innerText = "Following"
    }
    following = !following
})
