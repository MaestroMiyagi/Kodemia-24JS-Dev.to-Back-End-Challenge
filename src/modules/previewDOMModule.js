let previewDOM = (imagenSrc, titulo, tags, content) => {
    let divContainer = document.createElement("div")
    divContainer.classList.add("card", "border", "p-3")
    //divContainer.setAttribute("style","height: 5rem;")

    let image = document.createElement("img")
    imagenSrc !== undefined ? image.setAttribute("src", imagenSrc) : image.setAttribute("src", "")
    image.classList.add("card-img-top")

    let divBody = document.createElement("div")
    divBody.classList.add("card-body")

    let title = document.createElement("h1")
    title.classList.add("card-title")
    titulo !== undefined ? title.innerText = titulo : title.innerText = ""

    let tagsDiv = document.createElement("div")
    if (tags !== undefined && tags.length > 0) {
        tags.split(" ").forEach((tag) => {
            const small = document.createElement("small");
            small.classList.add('mx-1', 'py-0', 'px-2', 'rounded-2', 'tag-prev')
            small.textContent = `#${tag}`
            tagsDiv.appendChild(small)
        })
    } else {
        tagsDiv.textContent = ''
    }
    tagsDiv.classList.add("card-text")

    let parrafoContent = document.createElement("p")
    parrafoContent.classList.add("card-text")
    content !== undefined ? parrafoContent.innerText = content : parrafoContent.innerText = ""

    divBody.append(title, tagsDiv, parrafoContent)
    divContainer.append(image, divBody)

    return divContainer
}

export { previewDOM }