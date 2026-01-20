// 自动更新年份和导航高亮
document.addEventListener('DOMContentLoaded', function() {
    // 1. 更新年份
    const yearElements = document.querySelectorAll('#year');
    const currentYear = new Date().getFullYear();
    yearElements.forEach(el => {
        el.textContent = currentYear;
    });

    // 2. 导航高亮
    const navLinks = document.querySelectorAll('nav a');
    const currentPath = window.location.pathname.split('/').pop();

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});