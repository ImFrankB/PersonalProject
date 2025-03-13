document.addEventListener("DOMContentLoaded", function () {
    fetch("socialAccounts.html")
      .then(response => response.text())
      .then(data => {
        document.querySelector(".social-accounts").innerHTML = data;
      });
  });