<script setup lang="ts">
// import { ref, onMounted, onUnmounted } from 'vue';

const dropdownOpen = ref(false);

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

const handleDocumentClick = (event: MouseEvent) => {
  const dropdownElement = document.querySelector('.dropdown');
  if (dropdownElement && !dropdownElement.contains(event.target as Node)) {
    dropdownOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleDocumentClick);
});

onUnmounted(() => {
  document.removeEventListener('click', handleDocumentClick);
});
</script>

<template>
  <div class="dropdown" :class="{ show: dropdownOpen }">
    <button
        class="dropdown-toggle"
        type="button"
        @click.stop="toggleDropdown"
    >
      <img src="~/assets/icons/hamburger-menu.svg" alt="Menu" />
    </button>
    <div class="dropdown-menu" :class="{ show: dropdownOpen }">
      <a class="dropdown-item" href="#">kaifamiao</a>
      <a class="dropdown-item" href="#">颜色控制</a>
      <a class="dropdown-item" href="#">退出</a>
    </div>
  </div>
</template>

<style scoped>
/* 确保下拉菜单在组件内生效 */
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-toggle {
  background-color: #cccccc;
  color: white;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
}

.dropdown-toggle:hover {
  background-color: #5a6268;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 1000;
  display: none;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
}

.dropdown-menu.show {
  display: block;
}

.dropdown-item {
  display: block;
  width: 100%;
  padding: 0.25rem 1.5rem;
  clear: both;
  font-weight: 400;
  color: #212529;
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
  text-decoration: none;
}

.dropdown-item:hover,
.dropdown-item:focus {
  color: #16181b;
  text-decoration: none;
  background-color: #f8f9fa;
}

.dropdown-item.active,
.dropdown-item:active {
  color: #fff;
  text-decoration: none;
  background-color: #007bff;
}

.dropdown-item.disabled,
.dropdown-item:disabled {
  color: #6c757d;
  pointer-events: none;
  background-color: transparent;
}
</style>
