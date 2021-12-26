document.addEventListener("DOMContentLoaded", () => {
    
    let items = document.querySelector('#count');
    let itemsTotal = document.querySelector('.count-total');
    let cartBtn = document.querySelector('.cartbtn');
    let cartContainer = document.querySelector('.cart-container');
    let emptyCart = document.querySelector('.empty-cart');
    let cartItems = document.querySelector('.itemsList');
    let checkoutBtn = document.querySelector('.checkout-btn');

    items.classList.add('hide');
    cartContainer.classList.add('hide');
    checkoutBtn.classList.add('hide');

    let count = 0;
    
    document.addEventListener('click', (e) => {

        if(e.target.className === "add-camera") {

            addToCart();
            const itemDetails = document.querySelector('#camera');
            itemAdded(itemDetails, "camera");
        }
        if(e.target.className === "add-headphone") {

            addToCart();
            const itemDetails = document.querySelector('#headphone');
            itemAdded(itemDetails, "headphone");
        }
        if(e.target.className === "add-mouse") {

            addToCart();
            const itemDetails = document.querySelector('#mouse');
            itemAdded(itemDetails, "mouse");
        }
        if(e.target.className === "add-cocacola") {

            addToCart();
            const itemDetails = document.querySelector('#coca-cola');
            itemAdded(itemDetails, "cocacola");
        }
        if(e.target.className === "add-shampo") {

            addToCart();
            const itemDetails = document.querySelector('#shampo');
            itemAdded(itemDetails, "shampo");
        }
        if(e.target.className === "add-shoe") {

            addToCart();
            const itemDetails = document.querySelector('#shoe');
            itemAdded(itemDetails, "shoe");
        }
        if(e.target.className === "add-watch") {

            addToCart();
            const itemDetails = document.querySelector('#watch');
            itemAdded(itemDetails, "watch");
        }
        if(e.target.className === "add-bag") {

            addToCart();
            const itemDetails = document.querySelector('#bag');
            itemAdded(itemDetails, "bag");
        }
        if(e.target.className === "add-mobile") {

            addToCart();
            const itemDetails = document.querySelector('#mobile');
            itemAdded(itemDetails, "mobile");
        }
    });

    function addToCart() {

        emptyCart.classList.add('hide');
        items.classList.add('show');
        items.innerHTML = "";
        itemsTotal.innerHTML = "";
        count++;
        items.append(count);
        itemsTotal.append(count);
        checkoutBtn.classList.add('show');
    }

    document.addEventListener('mouseover', (e) => {
        if(e.target.className === "cart-img") {
            
            cartContainer.classList.toggle('show');
        }
    });

    function itemAdded(item, name) {

        var itemTitle = item.getElementsByTagName("h3")[0].innerHTML;
        var itemDes = item.getElementsByTagName("p")[0].innerHTML;

        html = "";
        html += '<span type="button">'+ '<img class="'+ name +'-remove-btn" src="images/cross.png"></img>' +'</span>';
        html += '<img src="./images/'+ name +'.jpeg">';
        html += '<h5>' + itemTitle + '</h5>';
        html += '<p>' + itemDes + '</p>';

        const itemsCont = document.createElement('div');
        itemsCont.className = name;
        itemsCont.innerHTML = html;

        cartItems.appendChild(itemsCont);
        console.log(itemsCont);

        document.addEventListener('click', (e) => {
            
            if(e.target.className === "camera-remove-btn") {

                var camera = document.querySelector('.camera');
                camera.remove();
                removeFromCart();
            }
            if(e.target.className === "headphone-remove-btn") {

                var headphone = document.querySelector('.headphone');
                headphone.remove();
                removeFromCart();
            }    
            if(e.target.className === "mouse-remove-btn") {

                var mouse = document.querySelector('.mouse');
                mouse.remove();
                removeFromCart();
            }
            if(e.target.className === "cocacola-remove-btn") {

                var cocacola = document.querySelector('.cocacola');
                cocacola.remove();
                removeFromCart();
            }
            if(e.target.className === "shampo-remove-btn") {

                var shampo = document.querySelector('.shampo');
                shampo.remove();
                removeFromCart();
            }
            if(e.target.className === "shoe-remove-btn") {

                var shoe = document.querySelector('.shoe');
                shoe.remove();
                removeFromCart();
            }
            if(e.target.className === "watch-remove-btn") {

                var watch = document.querySelector('.watch');
                watch.remove();
                removeFromCart();
            }
            if(e.target.className === "bag-remove-btn") {

                var bag = document.querySelector('.bag');
                bag.remove();
                removeFromCart();
            }
            if(e.target.className === "mobile-remove-btn") {

                var mobile = document.querySelector('.mobile');
                mobile.remove();
                removeFromCart();                
            }
        });

        function removeFromCart() {

            items.innerHTML = "";
            itemsTotal.innerHTML = "";
            count--;
            items.append(count);
            itemsTotal.append(count);

            if(itemsTotal.innerHTML === "0" && items.innerHTML === "0") {

                items.classList.remove('show');
                emptyCart.classList.remove('hide');
                checkoutBtn.classList.remove('show');
            }
        }
    }
});
