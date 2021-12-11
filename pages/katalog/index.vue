<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="pt-3">
        <v-img
          src="hero.jpg"
          class="white--text align-end my-3"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="250px"
        >
          <v-card-title class="text-h4">Twoje odmiany</v-card-title>
          <v-card-subtitle class="subtitle-1">zawsze pod ręką</v-card-subtitle>
        </v-img>
      </v-card>
      <v-card
        :loading="loading"
        v-for="(v, key) in varieties"
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
          :src="v.imgs[0]"
          dark
        >
        <div class="top-card-bar" dark>
          <div v-if="v.new" class="chip">NEW</div>
          <img v-if="v.provider == 'takii'" class="takiiLogo" src="/takiiLogoCut.png" />
        </div>
          <v-card-subtitle class="pb-0">{{ v.segment }}</v-card-subtitle>
          <v-card-title class="text-h4 text-uppercase pt-0"
            >{{ v.name }} {{ v.hybrid ? 'F1' : '' }}</v-card-title
          >
          <v-card-subtitle class=""> {{ v.type || '?' }} </v-card-subtitle>
        </v-img>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
//import varieties from '../static/varieties.json'

export default {
  name: 'katalog',
  data() {
    return {
      open: false,
      loading: false,
      varieties: {},
    }
  },
  created() {
    this.varieties = this.$store.getters.getVarieties
  },
  methods: {},
}
</script>

<style>
.top-card-bar{
  display: flex;
  width: 100%;
  top: 0;
  position: absolute;
  padding: 0.9rem;
  justify-content: space-between;
  align-items:center;
}
.chip {
  border: 2px solid white !important;
  border-radius: 0.6rem;
  font-weight: 900;
  padding:.4rem;
}
.takiiLogo {
  border-radius: 0.6rem;
  right: 0;
  width: 3rem;
  float: right;
}
</style>
