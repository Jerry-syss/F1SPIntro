var all = document.getElementById('all');
var titleBox = ["Home", "Introduction", "BBQ", "Money", "Calculator", "URL", "NoScript"];

window.onload = function() {
    // 获取URL参数的函数
    const urlParams = new URLSearchParams(window.location.search);
    // 获取参数名为 p 的值
    const p = urlParams.get('p');

    if(p) {
        pageChange(p);
        titleChange(p);
    }
    else {
        pageChange("null");
        titleChange("null");
    }
}

var titleChange = (page) => {
    if(page === "h") {
        document.title = titleBox[0];
    }
    if(page === "i") {
        document.title = titleBox[1];
    }
    if(page === "b") {
        document.title = titleBox[2];
    }
    if(page === "m") {
        document.title = titleBox[3];
    }
    if(page === "c") {
        document.title = titleBox[4];
    }
    if(page === "u") {
        document.title = titleBox[5];
    }
    if(page == "null") {
        document.title = titleBox[0];
    }
};

var pageChange = (page) => {
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
};