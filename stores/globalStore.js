// stores/globalStore.js
import { defineStore } from 'pinia';
import { createPersistedState } from 'pinia-plugin-persistedstate';

export const useGlobalStore = defineStore('global', {
    state: () => ({
        selections: {
            currentSelect: 'Chat', // 默认选择 Chat 组件
            selectedModel: null,
            selectedPrompt: null,
            selectedKB: null,
            selectedList: null,
        },
    }),
    actions: {
        setCurrentSelect(component) {
            this.selections.currentSelect = component;
        },
        setSelectedModel(model) {
            this.selections.selectedModel = model;
        },
        setSelectedPrompt(prompt) {
            this.selections.selectedPrompt = prompt;
        },
        setSelectedKB(kb) {
            this.selections.selectedKB = kb;
        },
        setSelectedList(list) {
            this.selections.selectedList = list;
        },
    },
    persist: true
});
