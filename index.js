//condicional para login y log out
import { filterforLupita, values, sortByDate } from "./src/modules/filter.js"
import isExpiredToken from "./src/modules/isExpiredToken.js"
import logOut from "./src/modules/sign_out.js"

let logged = document.querySelectorAll(".login-card")
let logout = document.querySelectorAll(".logout-card")

isExpiredToken(logged, logout)
values()
filterforLupita()
sortByDate()
logOut()