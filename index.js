var all = document.getElementById('all');

window.onload = function() {
    // 获取URL参数的函数
    const urlParams = new URLSearchParams(window.location.search);
    // 获取参数名为 p 的值
    const p = urlParams.get('p');

    if(p) {
        pageChange(p);
    }
    else {
        pageChange("null");
    }
}

function pageChange(page) {
    if(page === "h") {
        all.innerHTML = home;
    }
    if(page === "i") {
        all.innerHTML = intro;
    }
    if(page === "b") {
        all.innerHTML = bbq;
    }
    if(page === "m") {
        all.innerHTML = money;
    }
    if(page === "c") {
        all.innerHTML = calc;
    }
    if(page === "u") {
        all.innerHTML = url;
    }
    if(page == "null") {
        all.innerHTML = home;
    }
}