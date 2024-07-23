// 获取所有产品元素
const products = document.querySelectorAll('.product');

// 循环遍历产品元素，添加点击事件
products.forEach(product => {
    // 获取产品信息
    const productName = product.querySelector('img').getAttribute('data-name');
    const productPrice = product.querySelector('img').getAttribute('data-price');

    // 添加点击事件
    product.addEventListener('click', function() {
        // 获取模态框元素
        const modal = document.querySelector(`#productModal${product.querySelector('.button').getAttribute('data-target').replace('#', '')}`);

        // 设置模态框标题
        modal.querySelector('.modal-title').textContent = productName;

        // 设置模态框图片
        modal.querySelector('.modal-img').src = product.querySelector('img').src;

        // 设置模态框描述
        modal.querySelector('.modal-description').textContent = product.querySelector('.product-info').querySelector('p').textContent;
    });
});