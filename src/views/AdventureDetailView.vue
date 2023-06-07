<template>
  <div v-if="adventure">
    <WkndAdventureDetail :adventure="adventure" />
  </div>
</template>

<script>
import useGraphQL from '../api/useGraphQL'
import WkndAdventureDetail from '../components/WkndAdventureDetail.vue';

export default {
  name: 'AdventureDetailView',
  components: {
    WkndAdventureDetail
  },
  data() {
    return {
      adventure: null
    }
  },
  mounted() {
    this.fetchAdventure();
  },
  methods: {
    fetchAdventure() {
      const slug = this.$route.params.slug;
      const { result, executeQuery } = useGraphQL('wknd-shared/adventure-by-slug', { slug: slug });
      executeQuery()
        .then(() => {
          if (result && result.value && result.value.adventureList) {
            this.adventure = result.value.adventureList.items[0];
          }
        });
    }
  }
}
</script>
