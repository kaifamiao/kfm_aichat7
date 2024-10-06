<template>
  <div class="select-prompt">
    <select @change="onPromptChange" v-model="selectedModel">
      <option value="prompt1">Prompt 1</option>
      <option value="prompt2">Prompt 2</option>
      <option value="prompt3">Prompt 3</option>
    </select>
  </div>
</template>

<script setup>
import { useGlobalStore } from '~/stores/globalStore';
import {computed} from "vue";

const globalStore = useGlobalStore();

const selectedModel = computed({
  get: () => globalStore.selections.selectedPrompt,
  set: (value) => globalStore.setSelectedPrompt(value),
});

const onPromptChange = (event) => {
  globalStore.setSelectedPrompt(event.target.value);
};
</script>

<style scoped>
.select-prompt {
  margin-right: auto;
}
</style>
