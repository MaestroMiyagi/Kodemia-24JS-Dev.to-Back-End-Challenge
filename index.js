//condicional para login y log out
import { filterforLupita, values, sortByDate } from "./src/modules/filter.js"

let logged = document.querySelectorAll(".login-card")
let logOut = document.querySelectorAll(".logout-card")


if (localStorage.getItem("token")) {
  logged.forEach(item => item.classList.add("d-none"))
} else {
  logOut.forEach(item => item.classList.add("d-none"))
}

values()
filterforLupita()
sortByDate()