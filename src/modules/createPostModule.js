



import { BASE_URL } from "../constants/urls.js";

const token = localStorage.getItem('token');
const createPost = async (postData) => {

    try {
        let response = await fetch(
            `${BASE_URL}/posts`, {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
        let data = await response.json()
        return data

    } catch (error) {
        alert('Something went wrong');
    }

}

const getElement = async () => {
    let response = await fetch(`${BASE_URL}/posts`);
    let data = await response.json();
    return data;

export { createPost, getElement }