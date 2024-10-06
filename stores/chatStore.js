// stores/newChatStore.js
import { defineStore } from 'pinia';

export const useChatStore = defineStore('chat', {
    state: () => ({
        isChatVisible: false,
        selectedChatId: null,
    }),
    actions: {
        showChat() {
            this.isChatVisible = true;
        },
        hideChat() {
            this.isChatVisible = false;
        },
        selectChat(chatId) {
            this.selectedChatId = chatId;
            this.hideChat(); // 隐藏 Chat 组件
        },
    },
    // 如果你想要持久化存储，可以添加以下配置
    persist: true
});
