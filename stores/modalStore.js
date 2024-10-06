// stores/modalStore.js
import { defineStore } from 'pinia';

export const useModalStore = defineStore('modal', {
    state: () => ({
        isModalOpen: false,
        activeTab: 'system', // 默认选中系统设置选项卡

    }),
    actions: {
        openModal() {
            this.isModalOpen = true;
        },
        closeModal() {
            this.isModalOpen = false;
        },
        setActiveTab(tab) {
            this.activeTab = tab;
        },
    },
});
