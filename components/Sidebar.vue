<template>
  <aside class="sidebar" v-if="isSidebarVisible">
    <NewChat />
    <HistoryContainer />
    <Setting />
  </aside>
</template>

<script setup>
import { computed } from 'vue';
import { useSidebarStore } from '~/stores/sidebarStore';
import NewChat from './NewChat.vue';
import HistoryContainer from './HistoryContainer.vue';
import Setting from './Setting.vue';

const sidebarStore = useSidebarStore();
const isSidebarVisible = computed(() => sidebarStore.isSidebarVisible);
</script>

<style scoped>
.sidebar {
  width: 250px;
  background-color: #f4f4f4;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: calc(var(--vh, 1vh) * 90);
}

@media (max-width: 768px) {
  .sidebar {
    width: max-content;

  }
}
</style>
