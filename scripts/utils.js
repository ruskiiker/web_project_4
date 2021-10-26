// Opens popup, adds Escape key event listener. 
export function openPopup(popup) {  
    popup.classList.add('popup_active');  
    document.addEventListener('keydown', 
      handleEscKey)  
  }  
   
  // Closes popup, removes Escape key event listener. 
  export function closePopup(popup) {  
    popup.classList.remove('popup_active');  
    document.removeEventListener('keydown', 
      handleEscKey)  
  }  
   
  // Closes the active popup when pressing Escape. 
  export function handleEscKey(evt) { 
    if (evt.key === 'Escape') { 
      closePopup(document.querySelector('.popup_active')); 
    } 
  } 