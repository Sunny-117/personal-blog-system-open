import getComponentRootDom from './getComponentRootDom.js';
import styles from '@/styles/showMessage.module.less';
import Icon from "@/components/Icon";
export default function(options) {
    const content = options.content || '成功了';
    const type = options.type || 'success';
    const duration = options.duration || 2000;
    const container = options.container || document.body;

    const div = document.createElement('div');
    const iconDom = getComponentRootDom(Icon, { type });

    div.innerHTML = `<span class=${styles.icon}>${iconDom.outerHTML}</span><span>${content}</span>`;
    div.className = `${styles.message} ${styles['message-' + type]}`;

    if (options.container) {
        if (getComputedStyle(container).position == 'static') {
            container.style.position = 'relative';
        }
    }
    container.appendChild(div);

    div.clientHeight; //这句话会导致重构，强制渲染一遍

    div.style.opacity = 1;
    div.style.transform = 'translate(-50%, -50%)'

    setTimeout(() => {
        div.style.opacity = 0;
        div.style.transform = 'translate(-50%, -50%) translateY(-25px)';
        div.addEventListener('transitionend', function() {
                div.remove();
            }, { once: true }) //once代表这个函数只执行一次
    }, duration)


}