import { getPostById, deleteByid } from "./modules/requestPostsView.js";
import { isLogged } from "./modules/isLogged.js";


const imgDOM = document.querySelector("#img-post"); 
const titleDOM = document.querySelector("#title-post"); 
const nameDOM = document.querySelector("#user-name"); 
const dateDOM = document.querySelector("#date-post"); 
const ulDOM = document.querySelector("#tags-list"); 
const detailsDOM = document.querySelector("#details-post");
const addComentSection = document.querySelector('#add-comment');
const btnDelete = document.querySelector('#btn-delete'); 
//const navLogged = document.querySelector('#nav-logged');
//const navNoLogged = document.querySelector('#nav-no-logged');

if (!isLogged()) {
  addComentSection.classList.add('d-none');
  btnDelete.classList.add('d-none');
} else {
  //navLogged.classList.remove('d-none');
  //navNoLogged.classList.add('d-none');
  btnDelete.addEventListener('click', async () => {
    await deleteByid(id);
    window.open('../index.html', '_self');
  });
}

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

const renderPost = async () => {
  let postObject = await getPostById(id);
  console.log(postObject.data.posts)
  let { title, user, date, content } = postObject.data.posts;
  let formatDate = moment(date).format('DD/MM/YYYY');
  let timeAgo = moment(date).fromNow();

  imgDOM.src = 'https://picsum.photos/200/100';
  titleDOM.textContent = title;
  nameDOM.textContent = user;
  dateDOM.textContent = `${formatDate} (${timeAgo})`;
  detailsDOM.textContent = content
  //Hashtags DOM
  // tags.split(/[,\s]+/).forEach(tag => {
  //   let li = document.createElement('li');
  //   li.textContent = `#${tag}`;
  //   ulDOM.appendChild(li);
  // })
};

renderPost();


let logged = document.querySelectorAll(".login-card")
let logOut = document.querySelectorAll(".logout-card")

const token = () => {
    let getToken = localStorage.getItem("token")
    getToken ? logged.forEach(item => item.classList.add("d-none")) : logOut.forEach(item => item.classList.add("d-none"))
}

token()