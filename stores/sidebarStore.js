// stores/sidebarStore.js
import { defineStore } from 'pinia';

export const useSidebarStore = defineStore('sidebar', {
    state: () => ({
        isSidebarVisible: true,
    }),
    actions: {
        toggleSidebar() {
            this.isSidebarVisible = !this.isSidebarVisible;
        },
        setSidebarVisibility(visible) {
            this.isSidebarVisible = visible;
        },
    },
});
