window.onload = function()
{
    const ua = navigator.userAgent.toLowerCase();
    const isMobile =
        /iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(ua)
        || window.innerWidth < 768;
    if (isMobile)
    {
        window.location.href = "../home-phone/home-phone.html";//phone
    }
    else
    {
        window.location.href = "../home-comp/home-comp.html";//computer
    }
};
