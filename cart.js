var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight == "0px ";


function menutoggle() {


    if (MenuItems.style.maxHeight == "0px ") {

        MenuItems.style.maxHeight = "200px ";
    } else {
        MenuItems.style.maxHeight = "0px ";
    }
}



/*


function reset() {
    document.getElementById('cart-info').remove();
}

*/

/*
var cartInfo = document.getElementById('cart-info');
console.log(cartInfo);
for (var i = 0; i < cartInfo.length; i++) {



    var remove = cartInfo[i];




}


*/


/*

function subTotal() {

    var price = document.getElementById('price');
    console.log(price);

    var quantity = document.getElementById('quantity');
    console.log(quantity);


    var subTotal = price * quantity;
    console.log(subTotal);
}

subTotal();
*/





var removeItems = document.getElementsByClassName('removeitem')
console.log(removeItems)


for (var i = 0; i < removeItems.length; i++) {

    var button = removeItems[i]
    button.addEventListener('click', removeCartItem)
}


function removeCartItem(event) {

    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}



/*
   //updating cart total

   function updatedCart() {


       var classRow = document.getElementsByClassName('items-container')[0]

       var cartRows = document.getElementsByClassName('cart-rows')
       for (var i = 0; i < cartRows.length; i++) {

           var cartRow = cartRows[i]


           var cartPrice = cartRow.getElementsByClassName('cart-price')[0]
           var quantity = cartRow.getElementsByClassName('quantity')[0]

           console.log(cartPrice, quantity)
           var price = parseFloat(cartPrice.innerText.replace('Ksh', ''))
       }

   }

*/


/*

function updateCartTotal() {

    var cartItemsContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemsContainer.getElementsByClassName('cart-rows')[0]
    console.log(cartItemsContainer)


    for (var i = 0; i < cartItemsContainer.length; i++) {

        var cartRow = cartRows[i]

        var cartPrice = cartRow.getElementsByClassName('cart-price')[0]
        var quantity = cartRow.getElementsByClassName('quantity')[0]


    }
}
var price = document.getElementsByClassName('cart-price')
console.log(price)*/