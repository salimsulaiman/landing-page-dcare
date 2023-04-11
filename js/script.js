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

let formMessage = document.getElementById("formMessage");
let name = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");

let alert = document.getElementById("alert");

const setNotifTimer = () => {
  alert.innerHTML = ``;
};
const isEmpty = (name, email, message) => {
  if (name == "" || email == "" || message == "") {
    alert.innerHTML = `<p class="notif notif-danger" id="notif">Harap isi semua field yang disediakan</p>`;
    setInterval(setNotifTimer, 6000);
  } else {
    console.log(name);
    console.log(email);
    console.log(message);
    formMessage.reset();
    alert.innerHTML = `<p class="notif notif-success" id="notif">Halo <b>${name}</b>, Pesanmu terkirim, kami akan menanggapi lebih lanjut terkait pertanyaan anda</p>`;
    setInterval(setNotifTimer, 6000);
  }
};

formMessage.addEventListener("submit", (e) => {
  e.preventDefault();

  isEmpty(name.value, email.value, message.value);
});
