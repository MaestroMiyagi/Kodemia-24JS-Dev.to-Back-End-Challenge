import isExpiredToken from "./modules/isExpiredToken.js";
import { getPostById, deleteByid } from "./modules/requestPostsView.js";

const imgDOM = document.querySelector("#img-post");
const titleDOM = document.querySelector("#title-post");
const nameDOM = document.querySelector("#user-name");
const dateDOM = document.querySelector("#date-post");
const ulDOM = document.querySelector("#tags-list");
const detailsDOM = document.querySelector("#details-post");
const addComentSection = document.querySelector('#add-comment');
const btnDelete = document.querySelector('.btn-delete');
let logged = document.querySelectorAll(".login-card")
let logOut = document.querySelectorAll(".logout-card")
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

if (isExpiredToken(logged, logOut)) {
  btnDelete.addEventListener('click', async (e) => {
    await deleteByid(id);
    window.open('../index.html', '_self');
  });
} else {
  addComentSection.classList.add('d-none');
  btnDelete.classList.add('d-none');
}

const renderPost = async () => {
  let postObject = await getPostById(id);
  let { title, user, date, content, tags, imageUrl } = postObject.data.posts;
  let formatDate = moment(date).format('DD/MM/YYYY');
  let timeAgo = moment(date).fromNow();

  imgDOM.src = imageUrl;
  titleDOM.textContent = title;
  nameDOM.textContent = user.name;
  dateDOM.textContent = `${formatDate} (${timeAgo})`;
  detailsDOM.textContent = content
  btnDelete.id = id;

  tags.forEach(tag => {
    let li = document.createElement('li');
    li.textContent = `#${tag}`;
    ulDOM.appendChild(li);
  })
};
renderPost();