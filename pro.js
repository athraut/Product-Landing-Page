const navBar = document.getElementById("nav-bar")
const navBtn = document.querySelector(".material-symbols-rounded")

function touchMenu() {
  if (navBar.style.display == "none") {
    navBar.style.display = "block"
    navBtn.textContent = "close"
  } else {
    navBar.style.display = "none"
    navBtn.textContent = "menu"
  }
}

function changeLayout() {
  if (window.innerWidth >= 792) {
    navBar.style.display = "block"
    navBtn.textContent = "menu"
  } else {
    navBar.style.display = "none"
  }

  if (window.innerWidth > window.innerHeight || window.innerWidth < window.innerHeight) {
    navBtn.textContent = "menu"
  }
}