<template>
  <div class="select-list">
    <select @change="onListChange" v-model="selectedModel">
      <option value="list1">List 1</option>
      <option value="list2">List 2</option>
      <option value="list3">List 3</option>
    </select>
  </div>
</template>

<script setup>
import { useGlobalStore } from '~/stores/globalStore';
import {computed} from "vue";

const globalStore = useGlobalStore();
const selectedModel = computed({
  get: () => globalStore.selections.selectedList,
  set: (value) => globalStore.setSelectedList(value),
});
const onListChange = (event) => {
  globalStore.setSelectedList(event.target.value);
};
</script>

<style scoped>
.select-list {
  margin-right: 10px;
}
select {
  appearance: none; /* 移除默认的下拉箭头 */
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: white;
  border: none;
  padding: 0px 0px;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: 16px;
  cursor: pointer;
  line-height: inherit;
  outline: none;
}

/* 为了适应不同浏览器 */
select::-ms-expand {
  display: none;
}

/* 自定义下拉箭头 */
.select-wrapper {
  position: relative;
  display: inline-block;
  width: 200px; /* 调整宽度 */
}

.select-wrapper::after {
  content: "\25BC";
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  pointer-events: none;
}

/* 悬停和焦点状态 */
select:hover,
select:focus {
  background-color: #f8f8f8;
}

</style>
