<template>
  <header class="header">
    <RouterLink :to="{ name: 'home' }">
      <img :src="logo" class="logo" alt="WKND Logo" />
    </RouterLink>
    <WkndNavMenu />
    <button class="dark">Sign in</button>
  </header>
</template>

<script>
import { RouterLink } from 'vue-router';
import WkndNavMenu from './WkndNavMenu.vue';

export default {
  name: 'WkndHeader',
  components: {
    RouterLink,
    WkndNavMenu
  },
  data() {
    return {
      logo: require('@/assets/wknd-logo-dk.svg')
    }
  }
}
</script>
