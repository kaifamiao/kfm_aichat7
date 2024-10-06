<template>

  <div class="chat-input-container">
    <div class="chat-input-wrapper">
    <SelectList class="select"/>
      <textarea
          v-model="message"
          @keydown.enter.prevent="sendMessage"
          placeholder="发送消息..."
          rows="1"
          class="chat-input"
          ref="textareaRef"
      ></textarea>
      <button @click="sendMessage" class="send-button" :disabled="!message.trim()">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" class="h-4 w-4 m-1 md:m-0" stroke-width="2">
          <path d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z" fill="currentColor"></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'




import {  onMounted, nextTick } from 'vue';

const message = ref('');
const textareaRef = ref(null);

const sendMessage = () => {
  if (message.value.trim()) {
    console.log('Sending message:', message.value);
    // 这里添加发送消息的逻辑
    message.value = '';
    resizeTextarea();
  }
};

const resizeTextarea = () => {
  const textarea = textareaRef.value;
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 'px';
};

onMounted(() => {
  nextTick(() => {
    resizeTextarea();
  });
});
</script>

<style scoped>
.select {
  padding: 1rem 1rem 1.5rem;
  list-style-type: none; /* 移除默认的列表样式 */
  background-color: white;
}


.chat-input-container {
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem 1rem 1.5rem;
  background-color: #ffffff;
  border-top: 1px solid #e5e5e5;
}

.chat-input-wrapper {
  display: flex;
  align-items: center;
  max-width: 48rem;
  margin: 0 auto;
  background-color: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 0.75rem;
  box-shadow: 0 0 15px rgba(0,0,0,0.1);
}

.chat-input {
  flex-grow: 1;
  padding: 0.75rem;
  border: none;
  background-color: transparent;
  resize: none;
  outline: none;
  font-size: 1rem;
  line-height: 1.5;
  max-height: 200px;
  overflow-y: auto;
}

.send-button {
  padding: 0.5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #10a37f;
}

.send-button:disabled {
  color: #d9d9e3;
  cursor: default;
}

.send-button svg {
  width: 1.25rem;
  height: 1.25rem;
}
</style>
