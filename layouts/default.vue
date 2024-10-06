<template>
  <div class="container">
    <Header />
      <div class="main-container">
      <Sidebar/>
      <Main/>
    </div>
    <Footer />
    <SettingModal />

  </div>
</template>

<script setup>
import {computed, onMounted, onUnmounted, ref} from 'vue';
import Header from '~/components/Header.vue';
import Sidebar from '~/components/Sidebar.vue';
import Main from '~/components/Main.vue';
import Footer from '~/components/Footer.vue';
import {useSidebarStore} from "~/stores/sidebarStore.js";

const sidebarStore = useSidebarStore();
const isSidebarVisible = computed(() => sidebarStore.isSidebarVisible);

const handleResize = () => {
  if (window.innerWidth <= 768) {
    sidebarStore.setSidebarVisibility(false);

  } else {
    sidebarStore.setSidebarVisibility(true);
  }
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
  handleResize(); // 初始化时调用一次
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

</script>


