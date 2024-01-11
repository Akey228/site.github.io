const productsBtn = document.querySelectorAll('.product_btn');
const cartProductsList = document.querySelector('.cart-content_list');
const cart = document.querySelector('.cart');
const cartQuantity = document.querySelectorAll('.cart_quantuly');
const fullPrice = document.querySelectorAll('.fullprice');
let price = 0;

const randomId = () => {
	return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

const priceWithoutSpaces = (str) => {
	return str.replace(/\s/g, '');
};

const normalPrice = (str) => {
	return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
};

const plusFullPrice = (currentPrice) => {
	return price += currentPrice;
};

const minusFullPrice = (currentPrice) => {
	return price -= currentPrice;
};

const printQuantity = () => {
	let productsListLength = cartProductsList.querySelector('.simplebar-content').children.length;
	cartQuantity.textContent = productsListLength;
	productsListLength > 0 ? cart.classList.add('active') : cart.classList.remove('active');
};

const printFullPrice = () => {
	fullPrice.textContent = `${normalPrice(price)} ₽`;
};

const generateCartProduct = (img, title, price, id) => {
	return `
    
	<li class="cart-content_item">
		<article class="cart-content_product cart-product" data-id="${id}">
			<img src="${img}" alt="iphone14" class="cart-product_img">
			<div class="cart-product_text">
				<h3 class="cart-product_title">${title}</h3>
				<span class="cart-product_price">${price} ₽</span>
			</div>
			<button class="cart-product_delete" aria-label="Удалить товар"></button>
		</article>
	</li>

	`;
};

const deleteProducts = (productParent) => {
	let id = productParent.querySelector('.cart-product').dataset.id;
	document.querySelector(`.product[data-id="${id}"]`).querySelector('.product_btn').disabled = false;
	
	let currentPrice = parseInt(priceWithoutSpaces(productParent.querySelector('.price').textContent));
	minusFullPrice(currentPrice);
	printFullPrice();
	productParent.remove();

	printQuantity();
};

productsBtn.forEach(el => {
	el.closest('.product').setAttribute('data-id', randomId());
	el.addEventListener('click', (e) => {
		let self = e.currentTarget;
		let parent = self.closest('.product');
		let id = parent.dataset.id;
		let img = parent.querySelector('.tovar1_imgclass').getAttribute('src');
		let title = parent.querySelector('.tovar1_name').textContent;
		let priceString = priceWithoutSpaces(parent.querySelector('.tovar1_price').textContent);
		let priceNumber = parseInt(priceWithoutSpaces(parent.querySelector('.tovar1_price').textContent));

		plusFullPrice(priceNumber);

		printFullPrice();

		cartProductsList.querySelector('.simplebar-content').insertAdjacentHTML('afterbegin', generateCartProduct(img, title, priceString, id));
		printQuantity();

		
		self.disabled = true;
	});
});

cartProductsList.addEventListener('click', (e) => {
	if (e.target.classList.contains('.cart-product_delete')) {
		deleteProducts(e.target.closest('.cart-content_item'));
	}
});