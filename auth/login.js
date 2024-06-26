const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.querySelector(".container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

document.getElementById("signUpForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("signUpName").value;
  const email = document.getElementById("signUpEmail").value;
  const password = document.getElementById("signUpPassword").value;
  const errorElement = document.getElementById("signUpError");

  errorElement.textContent = "";

  if (!validateEmail(email)) {
    errorElement.textContent = "Invalid email address.";
    return;
  }

  if (password.length < 8) {
    errorElement.textContent = "Password must be at least 8 characters.";
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];
  if (users.find((user) => user.email === email)) {
    errorElement.textContent = "Email is already registered.";
    return;
  }

  users.push({ name, email, password: btoa(password) });
  localStorage.setItem("users", JSON.stringify(users));
  alert("Account created successfully! You can now sign in.");
});

document.getElementById("signInForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("signInEmail").value;
  const password = document.getElementById("signInPassword").value;
  const errorElement = document.getElementById("signInError");

  errorElement.textContent = "";

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(
    (user) => user.email === email && user.password === btoa(password)
  );

  if (user) {
    localStorage.setItem("token", btoa(email));

    const attemptedUrl = localStorage.getItem("attemptedUrl");
    if (attemptedUrl) {
      localStorage.removeItem("attemptedUrl");
      window.location.href = attemptedUrl;
    } else {
      window.location.href = "/index.html";
    }
  } else {
    errorElement.textContent = "Invalid email or password.";
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
