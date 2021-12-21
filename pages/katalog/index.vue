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
              <h3>Filtry ({{segmentsFilter.length}})</h3>
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

      <v-card
        :loading="loading"
        v-for="(v, key) in filterdVarieties"
        :key="key"
        class="mx-auto mt-9 rounded-sm"
        elevation="6"
        nuxt
        :to="{ name: 'katalog-id', params: { id: v.id } }"
      >
        <template slot="progress">
          <v-progress-linear
            color="green"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img
          height="250"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.01), rgba(0,0,0,.5)"
          :src="require(`~/assets/img/${v.imgs[0]}`)"
          dark
        >
          <div class="top-card-bar" dark>
            <div v-if="v.new" class="chip">NEW</div>
            <img
              v-if="v.provider == 'takii'"
              class="takiiLogo"
              src="/takiiLogoCut.png"
            />
          </div>
          <v-card-subtitle class="pb-0">{{ v.segment }}</v-card-subtitle>
          <v-card-title class="text-h4 text-uppercase pt-0"
            >{{ v.name }} {{ v.hybrid ? "F1" : "" }}</v-card-title
          >
          <v-card-subtitle class=""> {{ v.type || "?" }} </v-card-subtitle>
        </v-img>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
//import varieties from '../static/varieties.json'

export default {
  layout: 'katalog',
  name: "katalog",
  data() {
    return {
      open: false,
      loading: false,
      varieties: [],
      segmentsFilter: []
    };
  },
  computed: {
    segments() {
      return this.$store.getters.getSegments;
    },
    filterdVarieties(){
      if(this.segmentsFilter.length > 0){
        return this.varieties.filter(ele => this.segmentsFilter.includes(ele.segment) && ele.name.includes(this.$store.getters.getSearchPhrase))
      }
      return this.varieties.filter(ele => ele.name.toLowerCase().includes(this.$store.getters.getSearchPhrase))
    }
  },
  created() {
    this.varieties = this.$store.getters.getVarieties;
  },
  methods: {},
};
</script>

<style>
.top-card-bar {
  display: flex;
  width: 100%;
  top: 0;
  position: absolute;
  padding: 0.9rem;
  justify-content: space-between;
  align-items: center;
}
.chip {
  border: 2px solid white !important;
  border-radius: 0.6rem;
  font-weight: 900;
  padding: 0.4rem;
}
.takiiLogo {
  border-radius: 0.6rem;
  right: 0;
  width: 3rem;
  float: right;
}
</style>
