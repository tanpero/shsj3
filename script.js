document.addEventListener('DOMContentLoaded', function() {
    // 首先获取所有的产品描述元素
    var productDescriptions = document.querySelectorAll('.product p');
  
    // 为每个产品描述添加鼠标移入和移出的事件监听器
    productDescriptions.forEach(function(description) {
      // 保存原始的描述内容
      description.dataset.originalText = description.textContent;
  
      // 设置初始显示的文本为两行内容
      var twoLines = description.scrollHeight <= 40; // 假设每行的高度为20px
      description.style.overflow = twoLines ? 'visible' : 'hidden';
      description.style.textOverflow = twoLines ? 'clip' : 'ellipsis';
      description.style.display = '-webkit-box';
      description.style.webkitLineClamp = 2;
      description.style.webkitBoxOrient = 'vertical';
  
      // 鼠标移入时显示全部文本
      description.addEventListener('mouseenter', function() {
        description.style.overflow = 'visible';
        description.style.textOverflow = 'clip';
        description.style.webkitLineClamp = 'unset';
      });
  
      // 鼠标移出时恢复两行文本显示
      description.addEventListener('mouseleave', function() {
        description.style.overflow = 'hidden';
        description.style.textOverflow = 'ellipsis';
        description.style.webkitLineClamp = 2;
      });
  
      // 对于移动端，添加点击事件监听器
      description.addEventListener('click', function() {
        // 切换文本显示状态
        var isClamped = description.style.webkitLineClamp === '2';
        description.style.overflow = isClamped ? 'visible' : 'hidden';
        description.style.textOverflow = isClamped ? 'clip' : 'ellipsis';
        description.style.webkitLineClamp = isClamped ? 'unset' : 2;
      });
    });
  });

  
  document.addEventListener('DOMContentLoaded', function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-image');
    const totalSlides = slides.length;
    const slideInterval = 2000; // 自动播放间隔时间（毫秒）
    let slideTimer;

    // 设置所有幻灯片的最大高度
    const maxHeight = Math.max(...Array.from(slides).map(slide => slide.height));
    slides.forEach(slide => {
        slide.style.maxHeight = `${maxHeight}px`; // 设置最大高度
        slide.style.width = 'auto'; // 宽度自适应
    });

    // 显示第一张幻灯片
    slides[0].style.display = 'block';

    // 显示下一张幻灯片的函数
    function showNextSlide() {
        slides[currentSlide].style.display = 'none'; // 隐藏当前幻灯片
        currentSlide = (currentSlide + 1) % totalSlides; // 计算下一张幻灯片的索引
        slides[currentSlide].style.display = 'block'; // 显示下一张幻灯片
    }

    // 开始自动播放
    function startSlideshow() {
        slideTimer = setInterval(showNextSlide, slideInterval);
    }

    // 停止自动播放
    function stopSlideshow() {
        clearInterval(slideTimer);
    }

    // 绑定按钮点击事件
    document.getElementById('nextBtn').addEventListener('click', () => {
        stopSlideshow(); // 停止自动播放
        showNextSlide();
        startSlideshow(); // 重新开始自动播放
    });

    document.getElementById('prevBtn').addEventListener('click', () => {
        stopSlideshow(); // 停止自动播放
        showPrevSlide();
        startSlideshow(); // 重新开始自动播放
    });

    // 开始自动播放
    startSlideshow();

    // 鼠标悬停时停止播放，鼠标移开时继续播放
    const carousel = document.querySelector('.carousel');
    carousel.addEventListener('mouseenter', stopSlideshow);
    carousel.addEventListener('mouseleave', startSlideshow);
});
