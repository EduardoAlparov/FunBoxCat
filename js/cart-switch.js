window.onload = () => {
    document.body.classList.remove('preload');
}
// https://es6console.com/ - скомпеллировано здесь для поддерджки IE11
'use strict';
// click on cart

var carts = document.querySelectorAll('.cart__body');

if (carts.length > 0) {
    var _loop = function (i) {
        var cart = carts[i];

        cart.addEventListener('click', function (e) {
            cart.parentNode.classList.toggle('cart_default');
            cart.parentNode.classList.toggle('cart_selected');
            cart.classList.toggle('cart__body_default');

            if (cart.parentNode.classList.contains('cart_selected')) {
                cart.addEventListener('mouseout', function mouseOut(event) {
                    if (cart.contains(event.target)) {
                        cart.classList.toggle('cart__body_selected-hover-text');
                        cart.classList.toggle('cart__body_selected');
                    }
                    cart.removeEventListener('mouseout', mouseOut);
                });
            } else {
                cart.classList.remove('cart__body_selected-hover-text');
                cart.classList.remove('cart__body_selected');
            }
        });
    };

    for (var i = 0; i < carts.length; i++) {
        _loop(i);
    }
}
//  click on button
var cartButtons = document.querySelectorAll('.cart__button');

if (cartButtons.length > 0) {
    for (var i = 0; i < cartButtons.length; i++) {
        var btn = cartButtons[i];

        btn.addEventListener('click', function (e) {
            e.target.closest('.cart').classList.toggle('cart_default');
            e.target.closest('.cart').classList.toggle('cart_selected');
            e.target.closest('.cart').firstElementChild.classList.toggle('cart__body_default');
            e.target.closest('.cart').firstElementChild.classList.toggle('cart__body_selected');
            e.target.closest('.cart').firstElementChild.classList.toggle('cart__body_selected-hover-text');
        });
    }
}

// hover on button
if (cartButtons.length > 0) {
    for (var i = 0; i < cartButtons.length; i++) {
        var btn = cartButtons[i];

        btn.addEventListener('mouseover', function (e) {
            e.target.closest('.cart').querySelector('.cart__body').classList.add('cart__body_hover');
            e.target.addEventListener('mouseout', function (e) {
                e.target.closest('.cart').querySelector('.cart__body').classList.remove('cart__body_hover');
            });
        });
    };
}
