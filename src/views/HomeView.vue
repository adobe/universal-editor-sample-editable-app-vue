<template>
  <WkndAdventures :adventures="adventures" />
</template>

<script>
import useGraphQL from '../api/useGraphQL';
import WkndAdventures from '../components/WkndAdventures.vue';

export default {
  name: 'HomeView',
  components: {
    WkndAdventures
  },
  data() {
    return {
      adventures: []
    }
  },
  mounted() {
    this.fetchAdventures();
  },
  methods: {
    fetchAdventures() {
      const { result, executeQuery } = useGraphQL('wknd-shared/adventures-all');
      executeQuery()
        .then(() => {
          if (result && result.value && result.value.adventureList) {
            this.adventures = result.value.adventureList.items;
          }
        });
    }
  }
}
</script>
