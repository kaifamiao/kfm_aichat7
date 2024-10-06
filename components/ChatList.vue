<template>
  <ul class="chat-list">
    <li v-for="chat in chats" :key="chat.id" @click="selectChat(chat.id)">
      {{ chat.title }}
    </li>
  </ul>
</template>

<script setup>
import {useChatStore} from '~/stores/chatStore.js';
import {useGlobalStore} from "~/stores/globalStore.js";

const chats = Array.from({length: 100}, (_, index) => ({
  id: index + 1,
  title: `Chat ${index + 1}`
}));

const newChatStore = useChatStore();
const globalStore = useGlobalStore();

const selectChat = (id) => {
  newChatStore.selectChat(id);
  globalStore.setCurrentSelect("His")
};
</script>

<style scoped>
.chat-list {
  list-style: none;
  padding: 0;
}

.chat-list li {
  padding: 10px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
}

.chat-list li:hover {
  background-color: #e0e0e0;
}
</style>
