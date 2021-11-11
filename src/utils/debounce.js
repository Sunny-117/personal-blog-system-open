export default function(func, duration = 50) {
    let timer = null;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func(...args);
        }, duration)
    }
}