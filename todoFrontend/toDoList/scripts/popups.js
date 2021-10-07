import {Popup} from "./Popup.js";

const popupLinks = document.querySelectorAll('.popup-link');

if(popupLinks.length>0) {
    for (let i = 0; i < popupLinks.length; i++) {
        const popupLink=popupLinks[i];
        popupLink.addEventListener("click",(e)=> {
            const popupName = popupLink.dataset.ref;
            const current  =document.getElementById(popupName);
            Popup.openPopup(current);
            e.preventDefault();
        })

    }
}

const closeElems = document.querySelectorAll('.popup-close') ;
if (closeElems.length>0) {
    for (let i = 0; i < closeElems.length; i++) {
        const el = closeElems[i];
        el.addEventListener("click",(e)=>{
            Popup.closePopup(el.closest('.popup'));
            e.preventDefault()
        })
    }
}


