const first = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const Email = document.getElementById("Email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const submit = document.getElementById("submit");

const arr = [];

submit.addEventListener("click", () => {
  if (
    !first.value ||
    !lastName.value ||
    !Email.value ||
    !password.value ||
    !confirmPassword.value
  ) {
    alert("Please fill all fields");
    return;
  }

  if (password.value !== confirmPassword.value) {
    alert("Confirm password did not match");
    return;
  }


  let users = JSON.parse(localStorage.getItem("about user") ?? "[]") 

  let filteredUsers = users.filter((user) => user.email === Email.value);

  if (filteredUsers.length > 0) {
    alert("User already exists!");
  } else {
    users.push({
      email: Email.value,
      userrPassword: confirmPassword.value,
      createdAt: new Date(),
    });

    localStorage.setItem("about user", JSON.stringify(users));

    first.value ="";
    lastName.value ="";
    Email.value ="";
    password.value ="";
    confirmPassword.value ="";

    alert("Form submitted successfully");

    window.location.href = "../Profile/index.html";
  }
  alert("Form submitted successfully");
});

