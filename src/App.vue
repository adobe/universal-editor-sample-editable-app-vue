// App.vue
<template>
  <div>
    <WkndHeader />
    <hr />
    <router-view />
    <hr />
    <WkndFooter />
  </div>
</template>

<script>
import WkndHeader from './components/base/WkndHeader.vue';
import WkndFooter from './components/base/WkndFooter.vue';
import { getAuthorHost } from "./utils/fetchData";
import './App.scss';

export default {
  name: 'App',
  components: {
    WkndHeader,
    WkndFooter
  },
  mounted() {
    // Add connection for Universal Editor
    const metaTag = document.createElement('meta');
    metaTag.setAttribute('name', 'urn:adobe:aem:editor:aemconnection');
    metaTag.setAttribute('content', 'aem:' + getAuthorHost());
    document.head.appendChild(metaTag);
  }
}
</script>
