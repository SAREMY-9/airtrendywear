if (document.readyState == `loading`) {

    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}


function ready() {


    var MenuItems = document.getElementById("MenuItems");
    MenuItems.style.maxHeight == "0px";




    var LogForm = document.getElementById("LogForm");
    var RegForm = document.getElementById("RegForm");
    var Indicator = document.getElementById("Indicator");



    var reg = document.getElementsByClassName('btn-2');
    console.log(reg)
    for (var i = 0; i < reg.length; i++) {
        var regist = reg[i]
        regist.addEventListener('click', registered)
    }

    //start of remove variables

    var removeItems = document.getElementsByClassName('removeButton')
    console.log(removeItems)



    for (var i = 0; i < removeItems.length; i++) {

        var button = removeItems[i]
        button.addEventListener('click', removeCartItems)
    }



}







/*end of ready state checking*/

function menutoggle() {


    if (MenuItems.style.maxHeight == "0px") {

        MenuItems.style.maxHeight = "200px";
    } else {
        MenuItems.style.maxHeight = "0px";
    }
}





function register() {
    RegForm.style.transform = "translateX(0px)";
    LogForm.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(100px)";
}


function login() {
    RegForm.style.transform = "translateX(300px)";
    LogForm.style.transform = "translateX(300px)";
    Indicator.style.transform = "translateX(0px)";
}




function registered(event) {
    var regist = event.target
    alert('You have successfully registered for an On AIR TRENDY account')
}



function removeCartItems(event) {

    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove();
    updateCart();

}




function updateCart() {
    var classRow = document.getElementsByClassName('row')[0]
    var cartRows = document.getElementsByClassName('col-2')


    console.log(classRow)

    var total = 0;
    for (var i = 0; i < cartRows.length; i++) {

        var cartRow = cartRows[i];

        var cartPrice = cartRow.getElementsByClassName('cart-price')[0]
        var cartQuantity = cartRow.getElementsByClassName('cart-quantity')[0]

        console.log(cartPrice, cartQuantity)

        // now we have the elements



        //lets get the actual information from the elements


        var price = parseFloat(cartPrice.innerText.replace('Ksh', '')) // parseFloat turns any string to a number
        console.log(price)

        var quantity = cartQuantity.value


        console.log(price * quantity);
        total = total + (price * quantity)









    }


    document.getElementsByClassName('cart-total-price')[0].innerText = 'Ksh ' + '' +
        total
}











function quantityChanged(event) {
    var input = event.target

    if (isNaN(input.value) || input.value <= 0) {
        input.value + 1
    }
    updateCart()
}






function purchaseClicked(event) {
    alert('Thank you for your purchase.On AIR TRENDY WEAR welcomes you always.Great discounts for our long time customers')
    var cartItems = document.getElementsByClassName('cart-total')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }


    updateCart()

}



var addToCarts = document.getElementsByClassName('addtocart')
for (var i = 0; i < addToCarts.length; i++) {
    var button = addToCarts[i]
    button.addEventListener('click', addToCartClicked)
}


function addToCartClicked(event) {
    var button = event.target;

    var itemTitle = button.parentElement.parentElement
    var title = itemTitle.getElementsByClassName('title-cart')[0].innerText
    var price = itemTitle.getElementsByClassName('cart-price')[0].innerText
    var imageSrc = itemTitle.getElementsByClassName('imagesrc')[0].src
    console.log(title, price, imageSrc)



    addCartItemsToCart(title, price, imageSrc)
    updateCart()

}


function addCartItemsToCart(title, price, imageSrc) {


    var cartRow = document.createElement('div')
    cartRow.classList.add('row')
    var cartItems = document.getElementsByClassName('cart-total')[0]
    var cartItemNames = cartItems.getElementsByClassName('title-cart')

    for (var i = 0; i < cartItemNames.length; i++) {

        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `<div class="row" id="item1">
    <div class="col-2">
        <img class="imagesrc" src="${imageSrc}">
        <div class="title-cart"> ${title} </div>
        <div>
            <label>SIZE</label>
            <select>    
                <option>37</option>
                <option>38</option>
                <option>39</option>
                <option>40</option>
                <option>41</option>
                <option>42</option>
                <option>43</option>
                <option>44</option>
                </select><br>
            <span class="cart-price"> ${price} </span> <br>
            <label>Quantity</label>
            <input class="cart-quantity" type="number" value="1">
            <br>
            
            <button class="removeButton">Remove</button>
        </div>
    </div>
</div>
    `
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('removeButton')[0].addEventListener('click', removeCartItems)
    cartRow.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged)
}