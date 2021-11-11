let routeTitle = '',
    siteTitle = '';

function setTitle() {
    if (!routeTitle && !siteTitle) {
        document.title = '加载中...';
    } else if (routeTitle && !siteTitle) {
        document.title = routeTitle;
    } else if (siteTitle && !routeTitle) {
        document.title = siteTitle;
    } else {
        document.title = routeTitle + '-' + siteTitle;
    }
}

export default {
    setRoute(title) {
        routeTitle = title;
        setTitle();
    },
    setSite(title) {
        siteTitle = title;
        setTitle();
    }
}