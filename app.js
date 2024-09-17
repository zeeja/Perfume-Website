// Example: Add a message when a product is added to the cart
document.querySelectorAll('.product').forEach((product) => {
    product.addEventListener('click', () => {
        alert('Product added to cart!');
    });
});
