document.addEventListener('DOMContentLoaded', () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.querySelector('.cart-items');
    
    cartItems.forEach(photo => {
        const item = document.createElement('div');
        item.classList.add('cart-item');
        item.innerHTML = `
            <img src="${photo}" alt="Foto no Carrinho">
        `;
        cartContainer.appendChild(item);
    });
});
