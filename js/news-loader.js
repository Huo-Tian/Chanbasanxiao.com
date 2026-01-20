// news-loader.js
document.addEventListener('DOMContentLoaded', function () {
    // 1. 定义一个函数：获取新闻数据
    function fetchNews() {
        return fetch('news-data.json')
            .then(response => response.json())
            .catch(err => {
                console.error('加载新闻数据失败:', err);
                return []; // 如果出错，返回空数组防止报错
            });
    }

    // 2. 定义一个函数：生成首页的新闻列表 (只显示前3条)
    function renderIndexNews(newsData) {
        const container = document.getElementById('news-list');
        if (!container) return;

        // 只取前3条
        const latestNews = newsData.slice(0, 3);

        container.innerHTML = latestNews.map(item => `
            <li>
                <strong>[${item.category}]</strong>
                <a href="news.html">
                    ${item.title}
                </a>
                <span style="color:#999;"> (${item.date})</span>
            </li>
        `).join('');
    }

    // 3. 定义一个函数：生成新闻页的全部列表
    function renderNewsPage(newsData) {
        const container = document.getElementById('all-news-container');
        if (!container) return;

        container.innerHTML = newsData.map(item => `
            <article class="news-item card">
                <h3>${item.title}</h3>
                <p class="date" style="color:#00bcd4;"><strong>📅 发布日期：</strong> ${item.date}</p>
                <p>${item.content}</p>
            </article>
        `).join('');
    }

    // 4. 核心逻辑：判断当前是哪个页面，并执行对应渲染
    const currentPage = window.location.pathname.split('/').pop();

    fetchNews().then(newsData => {
        // 如果是首页
        if (currentPage === 'index.html' || currentPage === '') {
            renderIndexNews(newsData);
        }
        // 如果是新闻页
        else if (currentPage === 'news.html') {
            renderNewsPage(newsData);
        }
    });
});