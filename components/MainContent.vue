<template>
  <div class="main-content">
    <h1>MainDefault</h1>{{isChatVisible}}
    <Chat v-if="isChatVisible" />
    <HistoryChat v-else />
    isModalOpen:{{isModalOpen}}
    <div class="info">
      currentSelect:
      {{currentSelect}}
    </div>
  </div>
</template>

<script setup>
import Chat from './Chat.vue';
import HistoryChat from './HistoryChat.vue';
import {useModalStore} from "~/stores/modalStore.js";
import {computed} from "vue";
import {useChatStore} from "~/stores/chatStore.js";

const chatStore = useChatStore();
const isChatVisible = computed(() => chatStore.isChatVisible);


const modalStore = useModalStore();

const isModalOpen = computed(() => modalStore.isModalOpen);

import { useGlobalStore } from '~/stores/globalStore';

const globalStore = useGlobalStore();

const currentSelect = computed(() => globalStore.selections);

</script>

<style scoped>
.main-content {
  flex: 1;
  padding: 10px;
  overflow-y: auto;
}
</style>
