<template>
  <div v-bind:itemid="`urn:aemconnection:${adventure._path}/jcr:content/data/master`" itemtype="reference" itemfilter="cf" itemscope class="adventure-detail">
    <div>
      <div class="adventure-detail-header">
        <button class="adventure-detail-back-nav dark" @click="navigate(-1)">
          <!-- <img class="Backbutton-icon" :src="backIcon" alt="Return"/>  -->Adventures
        </button>
        <h1 class="adventure-detail-title" itemprop="title" itemtype="text">{{adventure.title}}</h1>
        <div class="pill default"><span itemprop="activity" itemtype="text">{{adventure.activity}}</span></div>
      </div>
    </div>
    <div>
      <img class="adventure-detail-primaryimage" :src="adventure.primaryImage._publishUrl" :alt="adventure.title" itemprop="primaryImage" itemtype="image"/>
      <div class="adventure-detail-content">
        <div itemprop="description" itemtype="richtext" v-html="adventure.description.html"></div>
        <div class="adventure-detail-info">
          <div class="adventure-detail-info-label">
            <h6>Adventure Type</h6>
            <span itemprop="adventureType" itemtype="text">{{adventure.adventureType}}</span>
          </div>
          <div class="adventure-detail-info-label">
            <h6>Trip Length</h6>
            <span itemprop="tripLength" itemtype="text">{{adventure.tripLength}}</span>
          </div>
          <div class="adventure-detail-info-label">
            <h6>Difficulty</h6>
            <span itemprop="difficulty" itemtype="text">{{adventure.difficulty}}</span>
          </div>
          <div class="adventure-detail-info-label">
            <h6>Group Size</h6>
            <span itemprop="groupSize" itemtype="text">{{adventure.groupSize}}</span>
          </div>
        </div>
        <h6>Itinerary</h6>
        <div itemprop="itinerary" itemtype="richtext" class="adventure-detail-itinerary" v-html="adventure.itinerary.html"></div>
      </div>
    </div>
  </div>
</template>

<script>
import "./WkndAdventureDetail.scss";

export default {
  name: 'WkndAdventureDetail',
  props: {
    adventure: Object
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
