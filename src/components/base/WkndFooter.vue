<template>
  <footer className="footer">
    <img :src="logo" className="logo" alt="WKND Logo" />
    <WkndNavMenu />
    <small>Copyright &copy; 2023 Adobe. All rights reserved</small>
  </footer>
</template>

<script>
import WkndNavMenu from './WkndNavMenu.vue';

export default {
  name: 'WkndFooter',
  components: {
    WkndNavMenu
  },
  data() {
    return {
      logo: require('@/assets/wknd-logo-dk.svg')
    }
  }
}
</script>
