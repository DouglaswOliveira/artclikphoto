document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const photo = button.getAttribute('data-photo');
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(photo);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Foto adicionada ao carrinho!');
    });
});
