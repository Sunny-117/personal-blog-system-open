import styles from './loading.module.less';
import loadingUrl from "@/assets/loading.gif";

function isExist(el) {
    return el.querySelector('img[data-role=loading]');
}

function createImg() {
    const img = document.createElement('img');
    img.src = loadingUrl;
    img.style.width = 30 + 'px';
    img.style.height = 30 + 'px';
    img.className = styles.loading;
    img.dataset.role = 'loading';
    return img;
}
export default function(el, binding) {
    const curImg = isExist(el);
    if (binding.value) {
        if (!curImg) {
            const img = createImg();
            el.appendChild(img);
        }
    } else {
        if (curImg) {
            curImg.remove();
        }
    }
}