<template>
  <main class="main">
    <MainHeader/>
    <MainContent />
    <ChatInput />

  </main>
</template>

<script setup>
import { ref } from 'vue';
import MainHeader from './MainHeader.vue';
import MainContent from './MainContent.vue';
import ChatInput from './ChatInput.vue';

const isSidebarVisible = ref(true);

const toggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value;
};
</script>

<style scoped>
.main {
  flex: 1;
  display: flex;
  flex-direction: column;
  height: calc(var(--vh, 1vh) * 90);
}
</style>
