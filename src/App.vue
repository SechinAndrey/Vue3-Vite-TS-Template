<template>
  <div class="mt-10 flex flex-col items-center justify-center">
    <div class="flex flex-col sm:flex-row">
      <a href="https://vitejs.dev" target="_blank">
        <img src="./assets/images/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/images/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
      <a href="https://capacitorjs.com/" target="_blank">
        <img
          src="./assets/images/capacitor.svg"
          class="logo capacitor"
          alt="Capacitor logo"
        />
      </a>
    </div>
    <RouterLink link :to="{ name: 'home' }"> Home </RouterLink>
    <RouterLink to="/unocss-preview">UnoSCC Preview</RouterLink>
    <RouterView />
  </div>
</template>

<style scoped>
.logo {
  height: 12em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.logo.capacitor:hover {
  filter: drop-shadow(0 0 2em #20bdfcaa);
}
</style>
