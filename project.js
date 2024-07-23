const caseButtons = document.querySelectorAll('.case-item .button');

caseButtons.forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault();
    // 获取跳转目标地址，并跳转到相应页面
    const target = this.getAttribute('href');
    window.location.href = target;
  });
});

// 示例：实现媒体报道页面跳转
const mediaButtons = document.querySelectorAll('.media-item .button');

mediaButtons.forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault();
    // 获取跳转目标地址，并跳转到相应页面
    const target = this.getAttribute('href');
    window.location.href = target;
  });
});