window.addEventListener('DOMContentLoaded', function() {
    let products = document.querySelectorAll('.product'),
        buttons = document.querySelectorAll('button')
        open = document.querySelector('.open');

        function createCart() {
            let cart = document.createElement('div'),
                field = document.createElement('div'),
                heading = document.createElement('h2'),
                closeBtn = document.createElement('button');

            cart.classList.add('cart');
            field.classList.add('cart-field');
            closeBtn.classList.add('close');

            heading.textContent = "В нашей корзмне";
            closeBtn.textContent = "Закрыть";

            document.body.appendChild(cart);
            cart.appendChild(heading);
            cart.appendChild(field);
            cart.appendChild(closeBtn);
        }

    createCart();

    let field = this.document.querySelector('.cart-field'),
        cart = this.document.querySelector('.cart'),
        closeBtn = this.document.querySelector('close');

        function openCart() {
            cart.computedStyleMap.display = 'block';
        }
        function closeCart() {
            cart.computedStyleMap.display = 'none';
        }

        openBtn.open.addEventListener('click', openCart);
        closeBtn.open.addEventListener('click', closeCart);
});

