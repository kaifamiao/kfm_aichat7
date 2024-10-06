<template>
  <header class="main-header">
    <span @click="toggleSidebar" class="toggle-sidebar-button">
      {{ isSidebarVisible ? '《' : '》' }}

    </span>
    <SelectModel />
    <SelectPrompt />
    <SelectKB />
  </header>
</template>

<script setup>
import { useSidebarStore } from '~/stores/sidebarStore';
import SelectModel from './SelectModel.vue';
import SelectPrompt from './SelectPrompt.vue';
import SelectKB from './SelectKB.vue';
import {computed} from "vue";

const sidebarStore = useSidebarStore();

const toggleSidebar = () => {
  sidebarStore.toggleSidebar();
};
const isSidebarVisible = computed(() => sidebarStore.isSidebarVisible);
</script>

<style scoped>
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f4f4f4;
}

.toggle-sidebar-button {
  display: block;
}



@media (max-width: 768px) {
  .toggle-sidebar-button {
    display: block;
  }
}
</style>
