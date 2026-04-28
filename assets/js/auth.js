const form = document.getElementById("loginForm");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user === "admin" && pass === "aegis123") {
      localStorage.setItem("auth", "true");
      window.location.href = "dashboard.html";
    } else {
      alert("Access Denied");
    }
  });
}

if (window.location.pathname.includes("dashboard.html")) {
  if (localStorage.getItem("auth") !== "true") {
    window.location.href = "login.html";
  }
}
