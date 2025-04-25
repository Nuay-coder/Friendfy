  // ตรวจสอบสถานะผู้ใช้งาน
  window.onload = function () {
    fetch('/get-user')
        .then(res => res.json())
        .then(data => {
            const userDisplay = document.getElementById("userDisplay");

            if (data.display_name) {
                userDisplay.innerHTML = `
<div class="profile-info" id="profileBtn">
<span class="display-name">${data.display_name}</span>
<img src="Frontend/image/icon-profile.png" class="profile-img">
</div>
<div class="profile-dropdown" id="profileDropdown">
<a href="/account"><i class="fa-solid fa-user"></i> Account</a>
<a href="/service"><i class="fa-solid fa-briefcase"></i> Service</a>
<a href="/setting"><i class="fa-solid fa-gear"></i> Setting</a>
<a href="/logout"><i class="fa-solid fa-right-from-bracket"></i> Log out</a>
</div>
`;


            } else {
                userDisplay.innerHTML = `
                    <button class="login-btn" onclick="window.location.href='/login'">
                        Log in
                    </button>`;
            }
        })
        .catch(err => {
            console.log("Not logged in");
            const userDisplay = document.getElementById("userDisplay");
            userDisplay.innerHTML = `
                <button class="login-btn" onclick="window.location.href='/login'">
                    Log in
                </button>`;
        });
};

document.addEventListener("click", (e) => {
const profileBtn = document.getElementById("profileBtn");
const dropdown = document.getElementById("profileDropdown");

if (profileBtn && profileBtn.contains(e.target)) {
dropdown.style.display = dropdown.style.display === "flex" ? "none" : "flex";
} else {
if (dropdown) dropdown.style.display = "none";
}
});

function logout() {
    fetch('/logout', { method: 'GET' })
        .then(response => {
            if (response.ok) {
                window.location.href = '/'; // ไปหน้า homepage
            } else {
                console.error('Logout failed');
            }
        })
        .catch(error => {
            console.error('Error during logout:', error);
        });
}