const formLogin = document.querySelector(".login-form");

formLogin.addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.currentTarget.elements;
  const data = {
    email: form.email.value,
    password: form.password.value,
  };
  if (data.email === "" || data.password === "") {
    alert("Fill all gaps!");
  } else {
    console.log(data);
    formLogin.reset();
  }
});
