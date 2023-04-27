let formButton = document.getElementById('form__button')
let fields = document.querySelectorAll("form .form-control")
let profileName = document.getElementById("profile_name")
let bio = document.getElementById("profile_bio")
let newData = {}

const token = localStorage.getItem("token")

const tokenSession = () => {
    token? null : window.open('../index.html', '_self')
}
tokenSession()

const getTokenPayload = (token) => {
    const splited = token.split(".")
    const payload = atob(splited[1])
    const payloadParsed = JSON.parse(payload)
    return payloadParsed
}

const populateData = async () =>{
try {
    const userData = getTokenPayload(token)
    let response = await fetch(
        `http://localhost:8080/users/${userData._id}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        let responseJson = await response.json()
        localStorage.setItem("data", JSON.stringify(responseJson.data))
        profileName.textContent = responseJson.data.name
        bio.textContent = responseJson.data.bio
        return responseJson
} catch (error) {
    alert('Opss! someting went wrong')
}
}
populateData()

fields.forEach(field => {
    field.addEventListener("change", (event) => {
        let property = event.target.name
        let value = event.target.value
        newData[property] = value
    })
})



const newDataPatch = async (newData) => {
    try {
        const userData = getTokenPayload(token)
        let response = await fetch(
            `http://localhost:8080/users/${userData._id}`, {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newData)
        })
        let data = await response.json()
        return data
    } catch  (error) {
        alert('Opsss something went wrong')
    }
}


formButton.addEventListener("click", () => {
    newDataPatch(newData)
    window.open('../index.html', '_self')
})

/////////////

let logOutButton = document.getElementById('sign_out')


logOutButton.addEventListener('click', () => {
    localStorage.removeItem('token')
    window.open('../index.html', '_self')
})