const logo = document.getElementById("logo");

logo.addEventListener("mouseover", function () {
  logo.src = "images/logo/white_logo.svg";
});

logo.addEventListener("mouseout", function () {
  logo.src = "images/logo/logo.svg";
});
