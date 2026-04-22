var home = `
            <style>
                h1 {
                    text-align: center;
                    margin: 35px 0;
                }
            </style>

            <h1>SYSS中一野餐介紹</h1>
            <img src="database/other/syss.png" alt="error:404|School Logo">
            <button type="button" onclick="pageChange('i');titleChange('i');">大坳門資料 📑</button>
            <button type="button" onclick="pageChange('b');titleChange('b');">BBQ 資料 🔥</button>
            <button type="button" onclick="pageChange('m');titleChange('m');">價格參考 💰</button>
            <button type="button" onclick="pageChange('c');titleChange('c');">計算機 📱</button>
            <button type="button" onclick="pageChange('u');titleChange('u');">系統資料及解難 📄</button>
            `;

var intro = `
            <style>
                h1 {
                    margin: 10px 15px;
                }

                h2 {
                    margin: 10px 15px;
                }

                #all {
                    display: grid;
                }

                #sidebar {
                    position: fixed;
                    margin-left: 20px;
                    top: 100px;      /* 建议加个高度定位 */
                    width: 60px;     /* 关键：固定容器宽度，不让它被 hover 撑大 */
                    z-index: 1000;
                }

                /* 文字初始状态：不仅是 display: none，建议用 opacity 配合 transition */
                .hoverShowWords {
                    display: none;   /* 你目前用的这个 */
                    margin-left: 10px;
                    white-space: nowrap;
                }

                /* 按钮悬停逻辑修正 */
                button:hover {
                    width: 200px !important; /* 强制覆盖 main.css 的 100% */
                    display: flex;           /* 悬停时改为弹性布局，让图标文字一行 */
                    align-items: center;
                    justify-content: flex-start;
                    padding-left: 15px;
                }

                /* 悬停时显示文字 */
                button:hover .hoverShowWords {
                    display: inline;
                }
                    
            </style>
            
            <div>
                <h1>大坳門資料📑</h1>
            </div>
            <div id="sidebar">
                <div>
                    <button type="button" onclick="pageChange('h');titleChange('h');">
                        <span>🏠</span>
                        <span class="hoverShowWords">首頁</span>
                    </button>
                </div>
                <div>
                    <button type="button" onclick="pageChange('i');titleChange('i');">
                        <span>📑</span>
                        <span class="hoverShowWords">大坳門資料</span>
                    </button>
                </div>
                <div>
                    <button type="button" onclick="pageChange('b');titleChange('b');">
                        <span>🔥</span>
                        <span class="hoverShowWords">BBQ 資料</span>
                    </button>
                </div>
                <div>
                    <button type="button" onclick="pageChange('m');titleChange('m');">
                        <span>💰</span>
                        <span class="hoverShowWords">價格參考</span>
                    </button>
                </div>
                <div>
                    <button type="button" onclick="pageChange('c');titleChange('c');">
                        <span>📱</span>
                        <span class="hoverShowWords">計算機</span>
                    </button>
                </div>
                <div>
                    <button type="button" onclick="pageChange('u');titleChange('u');">
                        <span>📄</span>
                        <span class="hoverShowWords">系統資料及解難</span>
                    </button>
                </div>
            </div>
            `;

