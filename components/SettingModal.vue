<template>
  <div class="modal" v-if="isModalOpen">
    <div class="modal-content">
      <h2>Settings</h2>
      <div class="tabs">
        <button
            v-for="tab in tabs"
            :key="tab.id"
            :class="['tab-button', { active: activeTab === tab.id }]"
            @click="setActiveTab(tab.id)"
        >
          {{ tab.label }}
        </button>
      </div>
      <div class="tab-content">
        <div v-if="activeTab === 'system'">
          <h3>系统设置</h3>
          <!-- 系统设置内容 -->
        </div>
        <div v-if="activeTab === 'model'">
          <h3>模型设置</h3>
          <!-- 模型设置内容 -->
        </div>
        <div v-if="activeTab === 'prompt'">
          <h3>提示词设置</h3>
          <!-- 提示词设置内容 -->
        </div>
        <div v-if="activeTab === 'kb'">
          <h3>知识库设置</h3>
          <!-- 知识库设置内容 -->
        </div>
        <div v-if="activeTab === 'agent'">
          <h3>Agent 设置</h3>
          <!-- Agent 设置内容 -->
        </div>
      </div>
      <button @click="closeModal">Close</button>
    </div>
  </div>
</template>

<script setup>
import {computed} from 'vue';
import {useModalStore} from '~/stores/modalStore';

const modalStore = useModalStore();

const isModalOpen = computed(() => modalStore.isModalOpen);
const activeTab = computed(() => modalStore.activeTab);

const tabs = [
  {id: 'system', label: '系统设置'},
  {id: 'model', label: '模型设置'},
  {id: 'prompt', label: '提示词设置'},
  {id: 'kb', label: '知识库设置'},
  {id: 'agent', label: 'Agent 设置'},
];

const closeModal = () => {
  modalStore.closeModal();
};

const setActiveTab = (tab) => {
  modalStore.setActiveTab(tab);
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 500px;
  max-width: 90%;
}

.tabs {
  display: flex;
  margin-bottom: 20px;
}

.tab-button {
  padding: 10px 20px;
  border: none;
  background-color: #f4f4f4;
  cursor: pointer;
  color: #6c757d;
  font-size: 16px;
  border-bottom: 2px solid transparent;
}

.tab-button.active {
  border-bottom-color: #007bff;
}

.tab-content {
  margin-bottom: 20px;
  color: black;
}

h3 {
  margin-top: 0;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
