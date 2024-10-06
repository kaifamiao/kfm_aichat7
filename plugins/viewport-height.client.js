export default defineNuxtPlugin(() => {
    if (process.client) {
        const setVH = () => {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };

        // 初始设置
        setVH();

        // 监听 resize 事件
        window.addEventListener('resize', setVH);
    }
});
