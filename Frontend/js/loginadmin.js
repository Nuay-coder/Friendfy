document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = form.username.value.trim();
    const password = form.password.value.trim();

    if (username === "admin" && password === "admin123") {
      window.location.href = "/dashboard";
    } else {
      alert("Invalid username or password");
    }
  });
});
