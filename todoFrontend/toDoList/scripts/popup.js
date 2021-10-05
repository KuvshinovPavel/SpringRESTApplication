const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');
const timeout=500;
let unlock  = true;

if(popupLinks.length>0) {
    for (let i = 0; i < popupLinks.length; i++) {
        const popupLink=popupLinks[i];
        popupLink.addEventListener("click",(e)=> {
            const popupName = popupLink.dataset.ref;
            const current  =document.getElementById(popupName);
            openPopup(current);
            e.preventDefault();
        })

    }
}


const closeElems = document.querySelectorAll('.popup-close') ;
if (closeElems.length>0) {
    for (let i = 0; i < closeElems.length; i++) {
        const el = closeElems[i];
        el.addEventListener("click",(e)=>{
            closePopup(el.closest('.popup'));
            e.preventDefault()
        })
    }
}

function openPopup(popup) {
    popup.style.visibility='visible';
    popup.style.opacity='1';
}

function closePopup(popup){
    popup.style.visibility='hidden';
    popup.style.opacity='0';
}
