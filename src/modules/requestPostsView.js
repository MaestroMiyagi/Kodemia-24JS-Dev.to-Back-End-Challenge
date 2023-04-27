import { BASE_URL } from "../constants/urls.js";
const token = localStorage.getItem('token');
const getPostById = async (_id) => {
  let response = await fetch(`${BASE_URL}/posts/${_id}`, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json'
  }
  
  });
  let data = response.json();
  return data;
}

const deleteByid = async (id) => {
  let response = await fetch(
    `${BASE_URL}/posts/${id}`,
     {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, 
      },
      method: 'DELETE'
    });
  let data = await response.json();

  return data;
}

export { getPostById, deleteByid }