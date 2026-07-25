/* js/main.js */
document.addEventListener('DOMContentLoaded', () => {
    // 使用 \n 实现换行，配合 CSS 的 white-space: pre-line 属性
    const fullText = "你叫许故，是一名侦探。这天，你像往常一样，接到了看似寻常的调查委托。但没过多久，你的委托人竟离奇身亡......\n你的平静，即将就此被打破。";
    const storyElement = document.getElementById('storyText');
    const cursorElement = document.getElementById('cursor');
    const startBtn = document.getElementById('startBtn');
    const infoBlock = document.getElementById('infoBlock');
    const contentCard = document.getElementById('contentCard'); // 获取卡片元素

    let index = 0;
    
    // 打字机效果
    function typeWriter() {
        if (index < fullText.length) {
            storyElement.textContent += fullText.charAt(index);
            index++;
            // 随机打字间隔，模拟真实打字机的敲击感
            const delay = Math.random() * 80 + 40; 
            setTimeout(typeWriter, delay);
        } else {
            // 打字结束，隐藏光标
            cursorElement.style.display = 'none';
            // 显示按钮，并带有淡入的视觉效果
            startBtn.style.display = 'block';
            startBtn.style.opacity = '0';
            setTimeout(() => {
                startBtn.style.transition = 'opacity 1s ease';
                startBtn.style.opacity = '1';
                
                // 在此处同步显示底部的信息块
                infoBlock.style.display = 'block';
                setTimeout(() => {
                    infoBlock.style.opacity = '1';
                    // 关键步骤：追加信息块后切换卡片布局状态，保证文字不跑偏且居中
                    contentCard.classList.add('expanded');
                }, 100);
            }, 100);
        }
    }

    // 触发打字机效果
    setTimeout(typeWriter, 600);

    // 点击“开始游戏”，跳转到电脑桌面页面
    startBtn.addEventListener('click', () => {
        window.location.href = 'desktop.html';
    });
});