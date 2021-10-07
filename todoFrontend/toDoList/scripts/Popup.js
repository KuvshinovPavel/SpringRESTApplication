export class Popup {

 static openPopup(popup) {
    popup.style.visibility='visible';
    popup.style.opacity='1';
 }

static closePopup(popup){
    popup.style.visibility='hidden';
    popup.style.opacity='0';
 }

}
