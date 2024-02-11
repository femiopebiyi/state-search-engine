import { states } from "./state.js";

const search = document.querySelector('input')
const matchList = document.querySelector('.display')

function searchState (stateInput){

    let matches =  states.filter((state)=>{
        let regex =  new RegExp(`^${stateInput}`, "gi");
        if(!state.match(regex)){
            matchList.innerHTML = ""
        }
        return state.match(regex)
    })

    if (search.value === ""){
        matches = "femi"
    }

    html(matches)
    
}


function html (match){
    if(match.length > 0){
        let html =  match.map((item)=>{
            return `<li>${item}</li>`
        }).join("")

        matchList.innerHTML = html
    }
}

search.addEventListener('input', ()=>{
    if(search.value === ''){
        matchList.innerHTML = ''
    }
    searchState(search.value)
})

