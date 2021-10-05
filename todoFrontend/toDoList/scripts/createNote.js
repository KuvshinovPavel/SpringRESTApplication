import {createNote} from "./notes.js";
const createButton = document.getElementById('create');
const header = document.getElementById('header-input');
const content = document.getElementById('content-input');
createButton.addEventListener('click',function (e) {

    let note = {
        "noteId": 0,
        "date":  new Date(),
        "header": header.value,
        "text": content.value
    }

    fetch('http://localhost:8080/api/note', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(note)
    }).then(response=>console.log(response));


    createNote(0,header.value,content.value);
    let popup = createButton.closest('.popup')
    popup.style.visibility='hidden';
    popup.style.opacity='0';
    header.value=''
    content.value=''
    e.preventDefault();

})
