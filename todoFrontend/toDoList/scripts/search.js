import {createNote} from "./notes.js";

let searchBtn = document.getElementById('search-button');
let searchInput = document.getElementById('search-input');
searchBtn.addEventListener('click',(e)=>{
    main.innerHTML='';
    fetch('http://localhost:8080/api/note/'+searchInput.value)
        .then(response=>response.json())
        .then(json=>json.forEach(x=>createNote(x.noteId,x.header,x.text,x.date)));
    e.preventDefault()
})
