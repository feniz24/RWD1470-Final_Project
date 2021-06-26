function validate() {
  let userInput = document.getElementById("userName").value;

  let passInput = document.getElementById("password").value;

  if (userInput == user.name && passInput == user.password) {
    document.getElementById("loginForm").submit();
    window.localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "./info_page.html";
  } else {
    errorMsg = document.getElementById("error_msg");
    errorMsg.style.display = "block";
  }
}
