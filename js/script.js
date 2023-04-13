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

let alert = document.getElementById("warning");

let formMessage = document.getElementById("formMesage");
let submitForm = document.getElementById("submit-form");

// const setNotifTimer = () => {
//   alert.innerHTML = ``;
// };

const handleGetFormData = () => {
  var obj = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    city: document.getElementById("city").value,
    zipCode: document.getElementById("zip-code").value,
    message: document.getElementById("message").value,
    status: document.getElementById("status").checked,
  };
  return obj;
};

const isNumber = (string) => {
  if (isNaN(string) == false) {
    return true;
  } else {
    return false;
  }
};

const checkboxIsChecked = () => {
  if (document.getElementById("status").checked == true) {
    return true;
  } else {
    return false;
  }
};

const validateFormData = (obj) => {
  if (obj != null && isNumber(obj.zipCode) && checkboxIsChecked()) {
    return true;
  } else return false;
};

const submit = () => {
  if (validateFormData(handleGetFormData()) == false) {
    return (warning.innerHTML = `<div class = "notif notif-danger text-center">Periksa form anda sekali lagi</div>`);
  } else {
    let { city, email, message, name, status, zipCode } = handleGetFormData();
    return (warning.innerHTML = `<div class = "notif notif-success text-center">Terimakasih <b>${name}</b>, kami akan menghubungi anda lebih lanjut</div>`);
  }
};

submitForm.addEventListener("click", (e) => {
  e.preventDefault();
  submit();
});
