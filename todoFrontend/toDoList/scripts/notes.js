


















function getListOfNotes(){
    fetch('http://localhost:8080/api/note')
        .then(response => response.json())
        .then(json =>json.forEach(x=>createNote(x.noteId,x.header,x.text,x.date)))
}



export function createNote(id,header,text,date  = new Date()){


    let main=document.querySelector('main');


    let row = document.createElement('div');
    row.classList.add('row');

    let column = document.createElement('div');
    column.classList.add('column');

    let card = document.createElement('div');
    card.classList.add('card');

    let cardCont = document.createElement('div');
    cardCont.classList.add('card-content');

    let options=document.createElement('div');
    options.classList.add('options')

    let optionDelete=document.createElement('a');
    optionDelete.classList.add('option');
    optionDelete.classList.add('delete');
    optionDelete.href='#';
    optionDelete.innerText='Delete';
    optionDelete.addEventListener('click',(e)=>{
        let note = e.target.closest('.row');

        fetch('http://localhost:8080/api/note/' + id, {
            method: 'DELETE',
        }).then(response  => console.log(response));

        note.remove();
        e.preventDefault();
    })
    let noteId = document.createElement('span')
     noteId.classList.add('hidden-span');
    noteId.innerText=id;

    let optionEdit=document.createElement('a');
    optionEdit.classList.add('option');
    optionEdit.classList.add('edit');
    optionEdit.href='#'
    optionEdit.innerText='Edit'


    let h2 = document.createElement('h2');
    h2.innerText=header;

    let p = document.createElement('p')
    p.innerText=text;

    let dateEl=document.createElement('p');

    date= new Date(date);
    dateEl.innerText=''+date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();

    optionDelete.append(noteId);
    options.append(optionDelete);
    options.append(optionEdit);

    cardCont.append(h2);
    cardCont.append(p);
    cardCont.append(dateEl);
    cardCont.append(options);

    card.append(cardCont);

    column.append(card);

    row.append(column);

    main.append(row);



}

getListOfNotes();
