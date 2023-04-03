const changeNav = () => {
  var bodyElement = document.querySelector("body");
  var navElement = document.querySelector("nav");
  //   this.scrollY > 50 ? (navElement.style.backgroundColor = "#fff") : (navElement.style.backgroundColor = "");
  if (this.scrollY > 20) {
    navElement.style.backgroundColor = "#fff";
    navElement.style.boxShadow = "2px 2px 20px #acacac30";
  } else {
    navElement.style.backgroundColor = "";
    navElement.style.boxShadow = "";
  }
};

window.addEventListener("scroll", changeNav, false);
