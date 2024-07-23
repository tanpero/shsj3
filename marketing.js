const productGrid = document.querySelector('.product-grid');
const productModals = document.querySelectorAll('.modal');

productGrid.addEventListener('click', function(event) {
    if (event.target.classList.contains('button')) {
        const modalId = event.target.dataset.target;
        const productModal = document.querySelector(modalId);
        const productName = event.target.closest('.product').querySelector('img').dataset.name;
        const productPrice = event.target.closest('.product').querySelector('img').dataset.price;
        productModal.querySelector('.modal-title').textContent = productName;
        productModal.querySelector('.modal-description').textContent = `产品名称：${productName}\n价格：${productPrice}\n详细介绍：...`;
        productModal.classList.add('show');
    }
});

productModals.forEach(modal => {
    modal.addEventListener('hidden.bs.modal', function() {
        modal.querySelector('.modal-title').textContent = '';
        modal.querySelector('.modal-description').textContent = '';
    });
});