const cart = document.getElementById('cartDiv');
let cartCounter = 0;
const badge = document.getElementById('badge');
const removeButton = document.querySelector('.cta-select');
removeButton.style.display = "none";

document.querySelector('.cta-add').addEventListener('click', function(){
    cart.style.setProperty('--afterDisplay', 'inline-block');
    cartCounter = cartCounter + 1;
    badge.setAttribute('value', cartCounter);
    if (cartCounter > 0){
        removeButton.style.display = "inline-block";
    }
})

removeButton.addEventListener('click', function(){
    cartCounter = cartCounter - 1;
    badge.setAttribute('value', cartCounter);
    if (cartCounter < 1){
        removeButton.style.display = "none";
        cart.style.setProperty('--afterDisplay', 'none');
    }
})