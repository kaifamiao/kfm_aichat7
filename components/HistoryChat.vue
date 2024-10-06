<template>
  <div class="history-chat">
    <h2>History Chat</h2>
    <p v-if="selectedChatId">Selected Chat ID: {{ selectedChatId }}</p>
    <p v-else>No chat selected</p>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useChatStore } from '~/stores/chatStore.js';

const chatStore = useChatStore();

const selectedChatId = computed(() => chatStore.selectedChatId);
</script>

<style scoped>
.history-chat {
  padding: 10px;
}
</style>
