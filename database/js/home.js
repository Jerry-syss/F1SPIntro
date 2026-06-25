// ==========================================
// 1. 首頁 (Home) - 增加了時間顯示區塊
// ==========================================
var home = `
    <style>
        h1 {
            text-align: center;
            margin: 35px 0 10px 0;
        }
        #time-container {
            text-align: center;
            color: #555;
            font-size: 0.9rem;
            margin-bottom: 20px;
        }
    </style>

    <h1>SYSS 中一野餐介紹</h1>
    <div id="time-container">⏳ 當前時間：<span id="time">載入中...</span></div>
    <img src="database/other/syss.png" alt="error:404|School Logo">
    
    <button type="button" onclick="pageChange('i');titleChange('i');">大坳門資料 📑</button>
    <button type="button" onclick="pageChange('b');titleChange('b');">BBQ 資料 🔥</button>
    <button type="button" onclick="pageChange('m');titleChange('m');">價格參考 💰</button>
    <button type="button" onclick="pageChange('c');titleChange('c');">計算機 📱</button>
    <button type="button" onclick="pageChange('u');titleChange('u');">系統資料及解難 📄</button>
`;

// ==========================================
// 🌟 共享的側邊欄組件 (避免每個頁面重複寫一堆 HTML)
// ==========================================
var sidebarHTML = `
    <div id="sidebar">
        <button type="button" onclick="pageChange('h');titleChange('h');"><span>🏠</span><span class="hoverShowWords">首頁</span></button>
        <button type="button" onclick="pageChange('i');titleChange('i');"><span>📑</span><span class="hoverShowWords">大坳門資料</span></button>
        <button type="button" onclick="pageChange('b');titleChange('b');"><span>🔥</span><span class="hoverShowWords">BBQ 資料</span></button>
        <button type="button" onclick="pageChange('m');titleChange('m');"><span>💰</span><span class="hoverShowWords">價格參考</span></button>
        <button type="button" onclick="pageChange('c');titleChange('c');"><span>📱</span><span class="hoverShowWords">計算機</span></button>
        <button type="button" onclick="pageChange('u');titleChange('u');"><span>📄</span><span class="hoverShowWords">系統解難</span></button>
    </div>
`;

// ==========================================
// 🌟 內嵌的側邊欄專用樣式 (讓所有子頁面共用)
// ==========================================
var subPageStyle = `
    <style>
        .content-box {
            margin-left: 90px;
            padding: 20px;
            max-width: 800px;
        }
        h1 { margin-bottom: 20px; color: #003366; }
        h2 { margin: 20px 0 10px 0; color: #333; font-size: 1.3rem; border-bottom: 2px solid #003366; padding-bottom: 5px; }
        p { line-height: 1.6; color: #444; margin-bottom: 15px; }
        ul { margin-left: 20px; margin-bottom: 15px; line-height: 1.6; color: #444; }
        
        /* 側邊欄優化修正 */
        #sidebar {
            position: fixed;
            left: 15px;
            top: 50px;
            width: 60px;
            z-index: 1000;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        #sidebar button {
            width: 55px !important;
            height: 55px;
            padding: 0;
            margin: 0;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            background: white;
            box-shadow: 0 4px 10px rgba(0,0,0,0.15);
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        #sidebar button span:first-child {
            font-size: 1.4rem;
            flex-shrink: 0;
        }
        .hoverShowWords {
            display: none;
            margin-left: 10px;
            white-space: nowrap;
            font-size: 0.9rem;
            color: white;
        }
        #sidebar button:hover {
            width: 160px !important;
            border-radius: 30px;
            justify-content: flex-start;
            padding-left: 15px;
            background-color: #003366;
        }
        #sidebar button:hover .hoverShowWords {
            display: inline;
        }
        @media screen and (max-width: 600px) {
            .content-box { margin-left: 15px; margin-top: 70px; }
            #sidebar { flex-direction: row; top: 10px; left: 10px; width: calc(100% - 20px); height: 50px; }
            #sidebar button { width: 45px !important; height: 45px; }
            #sidebar button:hover { width: 45px !important; border-radius: 50%; justify-content: center; padding-left: 0; background: white; }
            #sidebar button:hover .hoverShowWords { display: none; }
        }
    </style>
`;

// ==========================================
// 2. 簡介頁面 (Introduction)
// ==========================================
var intro = subPageStyle + sidebarHTML + `
    <div class="content-box">
        <h1>清水灣大坳門資料 📑</h1>
        <p>大坳門位於清水灣郊野公園內，是香港著名的放風箏、野餐及觀星勝地。這裡擁有廣闊的大草地，全海景景致讓人心曠神怡。</p>
        
        <h2>📍 基本資料</h2>
        <ul>
            <li><strong>地點：</strong> 清水灣大坳門清水灣郊野公園</li>
            <li><strong>設施：</strong> 設有燒烤區、洗手間、小食亭、風箏場及觀景台。</li>
            <li><strong>適合活動：</strong> 遠足、放風箏、草地野餐、集體遊戲。</li>
        </ul>

        <h2>🚌 交通指南 (學校出發建議)</h2>
        <p>於將軍澳港鐵站或坑口港鐵站出發：</p>
        <ul>
            <li>搭乘九巴 <strong>91 號</strong> 線（往清水灣方向），在「大坳門」站下車，隨後沿清水灣郊野公園路步行約 20 分鐘即可到達草地。</li>
            <li>或於坑口站搭乘綠色專線小巴 <strong>103M 號</strong>，同樣在大坳門路口下車。</li>
        </ul>
    </div>
`;

// ==========================================
// 3. 燒烤資料 (BBQ)
// ==========================================
var bbq = subPageStyle + sidebarHTML + `
    <div class="content-box">
        <h1>BBQ 燒烤安排 🔥</h1>
        <p>中一級野餐的焦點活動之一就是燒烤聯歡！以下是各組需要注意的物資與場地安排。</p>
        
        <h2>🍖 建議食品清單 (按小組準備)</h2>
        <ul>
            <li><strong>主食類：</strong> 雞翼、豬扒、牛扒、金沙骨、香腸、丸類（牛丸/貢丸/魚蛋）。</li>
            <li><strong>海鮮與蔬菜：</strong> 魷魚、粟米、金菇（配錫紙）、番薯。</li>
            <li><strong>精選推薦：</strong> 棉花糖、麵包（配蜜糖超讚！）。</li>
        </ul>

        <h2>📦 必備核心物資</h2>
        <ul>
            <li>燒烤炭（每組建議 2-3 包）、炭精（起火用）、打火機/火機油。</li>
            <li>燒烤叉（每人一支）、錫紙、紙盤、紙杯、膠叉、紙巾及濕紙巾。</li>
            <li>蜜糖、燒烤汁、刷子。</li>
            <li><strong>環保必備：</strong> 垃圾袋（離開前必須清理乾淨場地）。</li>
        </ul>
    </div>
`;

// ==========================================
// 4. 價格參考 (Money)
// ==========================================
var money = subPageStyle + sidebarHTML + `
    <div class="content-box">
        <h1>野餐預算及價格參考 💰</h1>
        <p>為了方便各組長收費及規劃預算，以下提供市場常見的野餐與燒烤物資參考價格：</p>
        
        <style>
            table { width: 100%; border-collapse: collapse; margin-top: 15px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
            th, td { padding: 12px 15px; text-align: left; border-bottom: 1px solid #ddd; }
            th { background-color: #003366; color: white; }
            tr:hover { background-color: #f9f9f9; }
        </style>

        <table>
            <thead>
                <tr>
                    <th>項目</th>
                    <th>預估單價 (HKD)</th>
                    <th>備註</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>燒烤炭 (5磅裝)</td><td>$35 / 包</td><td>建議每組準備 2 包</td></tr>
                <tr><td>炭精</td><td>$15 / 盒</td><td>起火必備</td></tr>
                <tr><td>蜜糖 (小瓶)</td><td>$25 / 樽</td><td>全級/小組共享</td></tr>
                <tr><td>燒烤叉</td><td>$5 / 支</td><td>可重複使用或買拋棄式</td></tr>
                <tr><td>免洗餐具套裝 (紙盤/杯/叉)</td><td>$30 / 套</td><td>約 10 人份量</td></tr>
                <tr><td>飲品 (罐裝汽水/水)</td><td>$5 - $8 / 罐</td><td>建議每人最少 2 罐</td></tr>
                <tr><td>大包裝雞翼 (約20隻)</td><td>$65 / 袋</td><td>各組主力食品</td></tr>
            </tbody>
        </table>
    </div>
`;

// ==========================================
// 5. 自動計算機 (Calculator) - 具備動態計算功能！
// ==========================================
var calc = subPageStyle + sidebarHTML + `
    <div class="content-box">
        <h1>野餐物資 & 預算計算機 📱</h1>
        <p>輸入你們小組的人數，系統會自動幫你估算大概需要的物資份量以及每人的平均預算！</p>
        
        <style>
            .calc-card { background: white; padding: 20px; border-radius: 15px; box-shadow: 0 4px 10px rgba(0,0,0,0.05); margin-top: 20px; }
            .input-group { margin-bottom: 15px; }
            .input-group label { display: block; margin-bottom: 5px; font-weight: bold; color: #003366; }
            .input-group input { width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 8px; font-size: 1rem; }
            .result-box { background: #eef5fc; padding: 15px; border-radius: 8px; margin-top: 15px; border-left: 5px solid #003366; }
            .result-box p { margin-bottom: 8px; font-size: 1.05rem; }
        </style>

        <div class="calc-card">
            <div class="input-group">
                <label for="peopleCount">請輸入小組人數：</label>
                <input type="number" id="peopleCount" value="6" min="1" max="50" oninput="calculatePicnic()">
            </div>

            <h3>📊 智能估算結果：</h3>
            <div class="result-box">
                <p>🍖 <strong>建議雞翼數量：</strong> <span id="res-wings">18</span> 隻 (每人約 3 隻)</p>
                <p>🥤 <strong>建議飲品數量：</strong> <span id="res-drinks">12</span> 罐 (每人約 2 罐)</p>
                <p>🔥 <strong>建議燒烤炭量：</strong> <span id="res-charcoal">2</span> 包</p>
                <p>💰 <strong>預計小組總花費：</strong> $<span id="res-total">360</span> HKD</p>
                <p>👤 <strong>每人預計夾錢：</strong> $<span id="res-perperson">60</span> HKD</p>
            </div>
        </div>
    </div>

    <script>
        // 這段函數會嵌入並在切換到此頁面時或輸入時調用
        function calculatePicnic() {
            var num = parseInt(document.getElementById('peopleCount').value);
            if (isNaN(num) || num <= 0) {
                num = 0;
            }
            
            // 計算邏輯
            var wings = num * 3;
            var drinks = num * 2;
            var charcoal = Math.ceil(num / 4); // 每 4 人一包炭
            if(charcoal < 1 && num > 0) charcoal = 1;
            
            // 粗略預算：每人基本食物費 $50 + 雜費
            var totalCost = (num * 50) + (charcoal * 35) + 20; 
            if(num === 0) totalCost = 0;
            var perPerson = num > 0 ? Math.round(totalCost / num) : 0;

            // 渲染到網頁
            document.getElementById('res-wings').innerText = wings;
            document.getElementById('res-drinks').innerText = drinks;
            document.getElementById('res-charcoal').innerText = charcoal;
            document.getElementById('res-total').innerText = totalCost;
            document.getElementById('res-perperson').innerText = perPerson;
        }
        // 首次加載運行一次
        setTimeout(calculatePicnic, 100);
    </script>
`;

// ==========================================
// 6. 系統資料及解難 (URL)
// ==========================================
var url = subPageStyle + sidebarHTML + `
    <div class="content-box">
        <h1>系統資料及解難 📄</h1>
        <p>歡迎使用西貢崇真天主教學校（SYSS）中一野餐資訊系統。本網頁為純前端動態單頁面（SPA）架構，旨在為同學提供最流暢快捷的資訊查閱體驗。</p>
        
        <h2>❓ 常見問題與解決方法</h2>
        
        <p><strong>問：為什麼點擊按鈕後網頁完全沒有反應？</strong><br>
        答：本網頁高度依賴 JavaScript 運行。如果你看到了這個頁面，代表 JS 運作正常。如果有同學遇到問題，請確保瀏覽器沒有安裝惡意阻擋腳本的插件，或嘗試使用 Chrome/Safari 瀏覽器打開。</p>

        <p><strong>問：為什麼網頁顯示「Check JS...」後自動跳轉？</strong><br>
        答：這是網頁的防護機制。如果瀏覽器停用了 JavaScript，系統會自動引導同學至 <code>noscript.html</code> 提示頁面。</p>

        <h2>🔗 實用外部連結</h2>
        <ul>
            <li><a href="https://www.afcd.gov.hk/tc_chi/country/cou_vis/cou_vis_cou/cou_vis_cou_cp/cou_vis_cou_cp.html" target="_blank" style="color:#003366; text-decoration:underline;">👉 漁護署 - 清水灣郊野公園官方網頁</a></li>
            <li><a href="https://maps.google.com" target="_blank" style="color:#003366; text-decoration:underline;">👉 Google 地圖 (可搜尋「大坳門風箏場」規劃路線)</a></li>
        </ul>
    </div>
`;