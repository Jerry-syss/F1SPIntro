var all = document.getElementById('all');
var home = `<style>
                h1 {
                    text-align: center;
                    font-size: 1.8rem;
                    color: #003366; /* School Navy Blue */
                    margin: 20px 0;
                    margin-top: 45px;
                }

                img {
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                    max-width: 180px;
                    height: auto;
                    margin-bottom: 30px;
                    filter: drop-shadow(0 5px 15px rgba(0,0,0,0.1));
                }

                /* Unified Button Styling */
                button {
                    display: block;
                    width: 100%;
                    max-width: 500px;
                    margin: 10px auto;
                    padding: 15px;
                    border-radius: 12px;
                    border: none;
                    cursor: pointer;
                    font-size: 1.1rem;
                    font-weight: 600;
                    transition: all 0.3s ease;
                    background-color: white;
                    color: #003366;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
                    border: 1px solid rgba(0, 0, 0, 0.05);
                }

                /* Hover Effects - Shared by all buttons */
                button:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
                    background-color: #003366;
                    color: white;
                }

                /* Active Click Effect */
                button:active {
                    transform: translateY(-1px);
                }
                    
                @media screen and (max-width: 600px) {
                h1 {
                    font-size: 1.4rem;
                }
                button {
                    width: 90%;
                }
            }
            </style>

            <h1>歡迎使用 SYSS 中一野餐 URL</h1>
            <img src="./syss.png" alt="error>404|School Logo">
            <button type="button" onclick="window.location.href='mater/mater.html'">大拗門資料 📑</button>
            <button type="button" onclick="window.location.href='bbq/bbq.html'">BBQ 資料 🔥</button>
            <button type="button" onclick="window.location.href='money/money.html'">價格參考 💰</button>
            <button type="button" onclick="window.location.href='calc/calc.html'">計算機 📱</button>
            <button type="button" onclick="window.location.href='url/url.html'">系統資料及解難 📄</button>
            `;

window.onload = function() {
    // 获取URL参数的函数
    const urlParams = new URLSearchParams(window.location.search);
    // 获取参数名为 p 的值
    const p = urlParams.get('p'); 

    // 如果 price 存在，填入输入框
    pageChange(p);
}

function pageChange(page) {
    if(page === "h") {
        all.innerHTML = home;
    }
}