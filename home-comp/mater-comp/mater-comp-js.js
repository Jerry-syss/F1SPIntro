function showTime()
{
    var nowTime_GMT = new Date();
    var nowTime = nowTime_GMT.toString().replace(/\sGMT.*$/,"");
    var nowHour = nowTime_GMT.getHours() + 1;
    if(nowHour > 3 && nowHour <= 6)
    {
        var words = "清晨 ";
        document.getElementById('time').innerHTML = words + nowTime;
    }
    if(nowHour > 6 && nowHour <= 10)
    {
        var words = "早上 ";
        document.getElementById('time').innerHTML = words + nowTime;
    }
    if(nowHour > 10 && nowHour <= 13)
    {
        var words = "中午 ";
        document.getElementById('time').innerHTML = words + nowTime;
    }
    if(nowHour > 13 && nowHour <= 18)
    {
        var words = "下午 ";
        document.getElementById('time').innerHTML = words + nowTime;
    }
    if(nowHour > 18 && nowHour <= 23)
    {
        var words = "晚上 ";
        document.getElementById('time').innerHTML = words + nowTime;
    }
    if(nowHour > 23 && nowHour <= 3)
    {
        var words = "深夜 ";
        document.getElementById('time').innerHTML = words + nowTime;
    }
}
showTime();
setInterval(function(){
	showTime();
},1000);
