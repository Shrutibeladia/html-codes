function calculatePrice(){
    // const checkin = new Date(document.getElementById('checkin').value);
    // const checkout = new Date(document.getElementById('checkout').value);
    // const avaiblity = document.getElementById('room').value;
    const roomtype=document.getElementById('roomtype').value;
    const nights = parseInt(document.getElementById('night').value);
    const priceDisplay = document.getElementById('price'); 

    const roomPrices = {
        deluxac:3000,
        deluxnonac:2500,
        roomac:2000,
        familyac:3500
    };

    if(!roomtype || isNaN(nights) || nights<= 0){
        priceDisplay.textContent="please select valid room type";
        return;
    }
    const totalPrice = roomPrices[roomtype]*nights;
    priceDisplay.textContent=`total price for ${nights} nights(s) : rs${totalPrice}`;
}