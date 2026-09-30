const Email = document.getElementById("Email");
const password = document.getElementById("password");

const submit = document.getElementById("submit");

const arr = [];

function generateToken() {
  return Math.random(0,10000).toString();
}
submit.addEventListener("click", () => {
  if (!Email.value || !password.value) alert("Please fill all fields");
  else {
    let users = JSON.parse(localStorage.getItem("user") ?? "[]");
    if (users.length > 0) {
      let user = users.filter((user) => user.email == Email.value);
      if (user.length > 0) {
        let obj = user[0];
        if (obj.password == password.value) {
          localStorage.setItem(
            "currUser",
            JSON.stringify({
              email: Email.value,
              password: password.value,
              token: generateToken(),
            })
          );
        }
      }else{
        // alert('error');
      }
    }else{
      // alert('error');
    }
  }
  window.location.href = "../Shopping/index.html"; 
});

function transfer() {
  window.location.href = "../Profile/index.html";
}
