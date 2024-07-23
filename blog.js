const blogGrid = document.querySelector('.blog-grid');
const blogModals = document.querySelectorAll('.modal');

blogGrid.addEventListener('click', function(event) {
    if (event.target.classList.contains('button')) {
        const modalId = event.target.dataset.target;
        const blogModal = document.querySelector(modalId);
        const blogTitle = event.target.closest('.blog-item').querySelector('h3').textContent;
        blogModal.querySelector('.modal-title').textContent = blogTitle;
        blogModal.querySelector('.modal-description').textContent = `博客文章内容...`;
        blogModal.classList.add('show');
    }
});

blogModals.forEach(modal => {
    modal.addEventListener('hidden.bs.modal', function() {
        modal.querySelector('.modal-title').textContent = '';
        modal.querySelector('.modal-description').textContent = '';
    });
});