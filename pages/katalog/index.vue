<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="9" md="8" lg="6">
      <v-card class="mt-3">
        <v-img
          :src="require(`~/assets/img/hero.jpg`)"
          class="white--text align-end my-3"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          max-height="200px"
        >
          <v-card-title class="text-h4">Twoje odmiany</v-card-title>
          <v-card-subtitle class="subtitle-1">zawsze pod ręką</v-card-subtitle>
        </v-img>
      </v-card>
      <v-card>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <h3>Filtry ({{ segmentsFilter.length }})</h3>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-chip-group v-model="segmentsFilter" column multiple>
                <v-chip
                  v-for="(segment, index) in segments"
                  :key="index"
                  filter
                  outlined
                  label
                  :value="segment"
                >
                  {{ segment }}
                </v-chip>
              </v-chip-group>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>
      <base-medium-card
        :loading="loading"
        v-for="(v, key) in filterdVarieties"
        :key="key"
        :varietie="v"
      >
      </base-medium-card>
    </v-col>
  </v-row>
</template>
<script>
//import varieties from '../static/varieties.json'

export default {
  layout: "katalog",
  name: "katalog",
  data() {
    return {
      loading: false,
      varieties: [],
      segmentsFilter: [],
    };
  },
  computed: {
    segments() {
      return this.$store.getters.getSegments.map(e => e).sort();
    },
    filterdVarieties() {
      if (this.segmentsFilter.length > 0) {
        return this.varieties.filter(
          (ele) =>
            this.segmentsFilter.includes(ele.segment) &&
            ele.name.includes(this.$store.getters.getSearchPhrase)
        );
      }
      return this.varieties.filter((ele) =>
        ele.name.toLowerCase().includes(this.$store.getters.getSearchPhrase)
      );
    },
  },
  created() {
    this.varieties = this.$store.getters.getVarieties;
  },
  methods: {},
};
</script>

<style>
</style>
