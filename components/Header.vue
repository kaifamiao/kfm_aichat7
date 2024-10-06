<template>
  <header class="header">
    <Logo />
    <Menu />
  </header>
</template>

<script setup>
import Logo from './Logo.vue';
import Menu from './Menu.vue';
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #ffffff;
  color: white;
}
</style>
