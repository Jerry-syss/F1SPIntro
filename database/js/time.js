function showTime() {
    var element = document.getElementById('time');
    // 如果當前頁面沒有 id="time" 的元素（例如切換到了其他子頁面），就直接退出函數，防止報錯
    if (!element) return; 

    var nowTime_GMT = new Date();
    // 修正：移除 +1，恢復正常本地時間
    var nowHour = nowTime_GMT.getHours(); 
    
    // 格式化時間字串，只取我們想要的部分
    var timeString = nowTime_GMT.toLocaleTimeString('zh-Hant', { hour12: false });
    var dateString = nowTime_GMT.toLocaleDateString('zh-Hant');
    var fullDisplay = dateString + " " + timeString;

    var words = "";
    if (nowHour >= 4 && nowHour < 6)   { words = "清晨 "; }
    else if (nowHour >= 6 && nowHour < 11)  { words = "早上 "; }
    else if (nowHour >= 11 && nowHour < 14) { words = "中午 "; }
    else if (nowHour >= 14 && nowHour < 18) { words = "下午 "; }
    else if (nowHour >= 18 && nowHour < 23) { words = "晚上 "; }
    else { words = "深夜 "; }

    element.textContent = words + fullDisplay;
}

// 執行與定時器
showTime();
setInterval(showTime, 1000);