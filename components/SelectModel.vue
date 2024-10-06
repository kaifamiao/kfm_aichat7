<template>
  <div class="select-model">
    <select @change="onModelChange"  v-model="selectedModel">
      <option value="model1">Model 1</option>
      <option value="model2">Model 2</option>
      <option value="model3">Model 3</option>
    </select>
  </div>
</template>

<script setup>
import {computed} from 'vue';
import {useGlobalStore} from '~/stores/globalStore';

const globalStore = useGlobalStore();

const selectedModel = computed({
  get: () => globalStore.selections.selectedModel,
  set: (value) => globalStore.setSelectedModel(value),
});

const onModelChange = (event) => {
  selectedModel.value = event.target.value;
  globalStore.setSelectedModel(selectedModel.value)
};
</script>

<style scoped>
.select-model {
  margin-right: auto;

}
</style>
