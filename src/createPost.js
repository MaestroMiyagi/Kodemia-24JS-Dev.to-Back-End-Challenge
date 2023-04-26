import { createPost } from "./modules/createPostModule.js";

//import {storage, ref, uploadBytesResumable, getDownloadURL} from "./modules/firebase.js"

import { previewDOM } from "./modules/previewDOMModule.js";

let fields = document.querySelectorAll("form .form-control")
let data = {}

fields.forEach((field) => {
    field.addEventListener("keyup", (event) => {
        let property = event.target.name
        let value = event.target.value
        data = { ...data, [property]: value }
    })
})


let btnSendForm = document.querySelector("#btn-send")

const validFields = (data) => {
    let { imageUrl, title, content, tags, authorId } = data;
    if (!imageUrl || !title || !content || !tags || !authorId) {
        return false;
    }
    return true;
}

btnSendForm.addEventListener("click", async () => {
    const authorDataString = await localStorage.getItem('token').split('.')[1];
    const { _id } = await JSON.parse(atob(authorDataString));
    data["tags"] = await data["tags"].split(' ');
    data["authorId"] = await _id;
    if (validFields(data)) { 
        const postCreated = await createPost(data)
        console.log(postCreated);
        window.open("../index.html","_self")
    } else {
        alert("Full the field")
    }
})

let btnModal = document.querySelector("#modal-leave")

btnModal.addEventListener('click', () => {
    window.open("../index.html", "_self")
})

//Opciones de editar y preview
let anchorEdit = document.querySelector("#a-edit")
let anchorPreview = document.querySelector("#a-preview")

document.getElementById("preview").style.display = "none"

anchorEdit.addEventListener("click", () => {
    document.getElementById("edit").style.display = "block"
    document.getElementById("preview").style.display = "none"
    data = { ...data }
})

anchorPreview.addEventListener("click", () => {
    document.getElementById("preview").style.display = "block"
    document.getElementById("edit").style.display = "none"
    data = { ...data }

    let previewContent = document.querySelector("#preview-content")
    previewContent.innerHTML = ""

    let { imageUrl, title, content, tags } = data
    previewContent.appendChild(previewDOM(imageUrl, title, tags, content))
})