<template>
  <section id="adventures" className="adventures">
    <ul className="adventure-items">
      <li className="adventure-item" v-for="adventure in adventures" :key="adventure._path" :itemScope="true"
        :itemid="itemid(adventure)" :itemtype="itemtype" :itemfilter="itemfilter">
        <div className="adventure-image-card">
          <RouterLink :to="{ name: 'adventure-detail', params: { slug: adventure.slug } }">
            <img className="adventure-item-image" :src="adventure.primaryImage._publishUrl" :alt="adventure.title"
              itemProp="primaryImage" itemType="image" />
          </RouterLink>
        </div>
        <h3 className="adventure-item-title" itemProp="title" itemType="text">{{ adventure.title.toLowerCase() }}</h3>
        <div className="adventure-item-details">
          <div className="adventure-item-length pill default"><span itemProp="tripLength" itemType="text">{{
            adventure.tripLength?.toLowerCase() }}</span></div>
          <div className="adventure-item-price pill">$<span itemProp="price" itemType="text">{{ adventure.price }}></span>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import "./WkndAdventures.scss";
import { RouterLink } from 'vue-router';

export default {
  name: 'WkndAdventures',
  components: {
    RouterLink
  },
  props: {
    adventures: Array
  },
  computed: {
    itemid: function () {
      return function (adventure) {
        const variation = adventure.variation ? adventure.variation : 'master'
        return 'urn:aemconnection:' + adventure._path + '/jcr:content/data/' + variation;
      }
    },
    itemtype: function () {
      return 'reference';
    },
    itemfilter: function () {
      return 'cf';
    }
  }
}
</script>
