let opts=document.getElementById('select-sorting').options;
let main =document.querySelector('main')
let sorts = new Map();



sorts.set("asc",sortAscend);
sorts.set("desc",sortDescend);
sorts.set("dateAsc",sortByDateAsc);
sorts.set("dateDesc",sortByDateDesc);


let arrFromOpts=[...opts];
arrFromOpts.forEach(opt=>{opt.onclick=()=>{
    sortByValue(opt.value)
}})


function sortByValue(value) {
    for (let key of sorts.keys()) {
        if(key === value){
            sorts.get(key).call();
        }
    }
}
function sortAscend() {
    let rows = document.querySelectorAll('.row');


    let sorted = Array.from(rows);

    sorted.sort((a,b)=>{
        return a.children[0].children[0].children[0].children[0].innerText>b.children[0].children[0].children[0].children[0].innerText;
    })
    main.innerHTML='';
    for (let i = 0; i < sorted.length; i++) {
        main.append(sorted[i]);
    }
}


function sortDescend() {
    let rows = document.querySelectorAll('.row');


    let sorted = Array.from(rows);

    sorted.sort((a,b)=>{
        return a.children[0].children[0].children[0].children[0].innerText>b.children[0].children[0].children[0].children[0].innerText;
    }).reverse();
    main.innerHTML='';
    for (let i = 0; i < sorted.length; i++) {
        main.append(sorted[i]);
    }
}

function sortByDateAsc() {
    let rows = document.querySelectorAll('.row');


    let sorted = Array.from(rows);

    sorted.sort((a,b)=>{
        let d1 = new Date(a.children[0].children[0].children[0].children[2].innerText);
        let d2= new Date(b.children[0].children[0].children[0].children[2].innerText);

        return d1-d2;
    });
    main.innerHTML='';
    for (let i = 0; i < sorted.length; i++) {
        main.append(sorted[i]);
    }
}
function sortByDateDesc() {
    let rows = document.querySelectorAll('.row');


    let sorted = Array.from(rows);

    sorted.sort((a,b)=>{
        let d1 = new Date(a.children[0].children[0].children[0].children[2].innerText);
        let d2= new Date(b.children[0].children[0].children[0].children[2].innerText);
        return d1-d2;
    }).reverse();
    main.innerHTML='';
    for (let i = 0; i < sorted.length; i++) {
        main.append(sorted[i]);
    }
}
