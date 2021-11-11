import eventBus from "@/eventBus";
import defaultGif from "@/assets/default.gif";
import debounce from "@/utils/debounce";

let imgs = [];

function setImage(img) {
    img.dom.src = defaultGif;
    const rect = img.dom.getBoundingClientRect();
    const min = -rect.height || -100;
    const max = document.documentElement.clientHeight;
    if (rect.top >= min && rect.top <= max) {
        const image = new Image();
        image.onload = function() {
            img.dom.src = img.src;
        }
        image.src = img.src;
        imgs = imgs.filter(i => i != img);
    }

}

function setImages() {
    for (const img of imgs) {
        setImage(img);
    }

}

eventBus.$on('mainScroll', debounce(setImages, 50))
export default {
    inserted(el, bindings) {
        imgs.push({
            dom: el,
            src: bindings.value
        });
        setImages();
    },
    unbind(el) {
        imgs = imgs.filter(i => i.dom != el);
    }
}