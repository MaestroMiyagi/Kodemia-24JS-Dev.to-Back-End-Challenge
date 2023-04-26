
const isExpiredToken = (logged, logout) => {
  const token = localStorage.getItem("token").split('.')[1];
  const { exp } = JSON.parse(atob(token));
  if (exp > moment().unix()) {
    logged.forEach(item => item.classList.add("d-none"))
  } else {
    logout.forEach(item => item.classList.add("d-none"))
    localStorage.removeItem('token')
  }
}

export default isExpiredToken;