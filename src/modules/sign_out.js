const logOut = () => {
    let logOutButton = document.getElementById('sign_out')
    logOutButton.addEventListener('click', () => {
        localStorage.removeItem('token')
        window.open('../index.html', '_self')
    })
}

export default logOut;