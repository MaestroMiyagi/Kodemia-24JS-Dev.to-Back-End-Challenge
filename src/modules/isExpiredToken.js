
const isExpiredToken = (logged, logout) => {
  let token = localStorage.getItem("token");
  let tokenInfo;
  token ? tokenInfo = token.split('.')[1] : null;
  tokenInfo ? tokenInfo = JSON.parse(atob(tokenInfo)) : tokenInfo = false; 
  if (tokenInfo && tokenInfo.exp > moment().unix()) {
    logged.forEach(item => item.classList.add('d-none'))
  } else {
    logout.forEach(item => item.classList.add("d-none"))
    localStorage.removeItem('token')
  }
}

export default isExpiredToken;