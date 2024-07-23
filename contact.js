const feedbackForm = document.querySelector('#feedback form');

feedbackForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // 获取表单数据
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // 发送表单数据到服务器
    // 使用 AJAX 或其他方式发送数据

    // 显示反馈信息
    alert(`感谢您的反馈！\n姓名：${name}\n邮箱：${email}\n留言：${message}`);

    // 清空表单
    feedbackForm.reset();
});