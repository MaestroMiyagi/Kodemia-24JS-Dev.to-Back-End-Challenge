import { getElement } from "./createPostModule.js";
import { createCardPostHome } from "./createCards.js";
import {isLogged} from "./isLogged.js"



//Filtar por barra de navegación 
let btn = document.getElementById("posts-home")

const values = async ()=>{
    let allPosts = await getElement()
    document.querySelectorAll('#posts-home .card').forEach(card => card.remove())
    for( let post of allPosts.data.posts){
        // let {title} = post
        btn.appendChild(createCardPostHome(post, isLogged))
    }
    document.getElementById('relevant').addEventListener('click', values)
}

const filterforLupita = async ()=>{
    let get = await getElement()
    document.getElementById("search").addEventListener("keyup",(array)=>{
        document.querySelectorAll('#posts-home .card').forEach(card => card.remove())
       let  string = array.target.value
       
        for(let post of get.data.posts){
            let {title} = post
            let lowerTitle = title.toLowerCase()
            if(lowerTitle.includes(string.toLowerCase()) != false){
                btn.appendChild(createCardPostHome(post,isLogged))
            }
        }
    })
}
//Filtrado por Post mas reciente 

const sortByDate = async ()=>{
    let response = await getElement()
    
    let result = Object.keys(response).sort((a,b) => moment(response[b].date).valueOf() - moment(response[a].date).valueOf()) 
    let completeResult = result.reduce( (accum, current) => ({...accum, [current]:response[current]}),{})
    document.getElementById("order-Post").addEventListener("click",()=>{
        document.querySelectorAll('#posts-home .card').forEach(card => card.remove())
        for (let post of completeResult.data.posts ){
            btn.appendChild(createCardPostHome(post, isLogged))
        }
    }) 
}

export{filterforLupita, values,sortByDate}



