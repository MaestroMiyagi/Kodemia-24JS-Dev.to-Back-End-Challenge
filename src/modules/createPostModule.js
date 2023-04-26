import { BASE_URL } from '../constants/urls.js'

const createPost = async (postData) => {
    let response = await fetch( `${BASE_URL}/posts`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
     let data = await response.json()
     return data
}

const getElement = async () => {
    let response = await fetch(`${BASE_URL}/posts`);
    let data = await response.json();
    return data;
}

export{ createPost, getElement}