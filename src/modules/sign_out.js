let logOutButton = document.getElementById('sign_out')


const logOut = () => {
    localStorage.removeItem('token')
    window.open('../index.html', '_self')
}


logOutButton.addEventListener('click', () => {
    logOut()
})