<template>
  <div class="setting">
    <button @click="openSettingModal">Settings</button>
  </div>
</template>

<script setup>
import { useModalStore } from '~/stores/modalStore';

const modalStore = useModalStore();

const openSettingModal = () => {
  modalStore.openModal();
};
</script>

<style scoped>
.setting {
  margin-top: auto;
}
button {
  color: #fff;
  width: 100%;
  background-color: #007bff;
  border-color: #007bff;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

button:hover {
  color: #fff;
  background-color: #0056b3;
  border-color: #0056b3;
}

</style>
