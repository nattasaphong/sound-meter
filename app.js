const API_URL = "YOUR_GAS_URL";

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({
      action: "login",
      email: email,
      password: password
    })
  })
  .then(res => res.json())
  .then(data => {
    if (data.status === "success") {
      localStorage.setItem("role", data.role);
      window.location.href = "internal.html";
    } else {
      alert("ผิดพลาด");
    }
  });
}

function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}
