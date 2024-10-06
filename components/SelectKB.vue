<template>
  <div class="select-kb">
    <select @change="onKBChange" v-model="selectedKB">
      <option value="kb1">KB 1</option>
      <option value="kb2">KB 2</option>
      <option value="kb3">KB 3</option>
    </select>
  </div>
</template>

<script setup>
import { useGlobalStore } from '~/stores/globalStore';
import {computed} from "vue";

const globalStore = useGlobalStore();

const selectedKB = computed({
  get: () => globalStore.selections.selectedKB,
  set: (value) => globalStore.setSelectedKB(value),
});

const onKBChange = (event) => {
  globalStore.setSelectedKB(event.target.value);
};
</script>

<style scoped>
.select-kb {
  margin-right: auto;
  border-color: #007bff; /* 聚焦时改变边框颜色 */

}
</style>
