import { BASE_URL } from "../constants/urls.js"
let formButton = document.getElementById('form__button')
let fields = document.querySelectorAll("#login-form .form-control")
let credentials = {}

fields.forEach(field => {
  field.addEventListener("keyup", (event) => {
    let property = event.target.name
    let value = event.target.value
    credentials[property] = value
  })
})

function validateFields(data) {
  if (!data.email || !data.password) {
    fields.forEach(field => {
      field.value
        ? field.classList.remove("is-invalid")
        : field.classList.add("is-invalid")
    })
    return false;
  }
  return true;
}

formButton.addEventListener("click", async () => {
  if (!validateFields(credentials)) return alert('Please complete the fields');
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    const userLoggined = await response.json();
    await localStorage.setItem('token', userLoggined.data.token);
    window.open('../index.html', '_self');
  } catch (error) {

    alert('Oops! Something went wrong, try again')
  }
})