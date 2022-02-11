<template>
  <v-card
    :loading="loading"
    class="mx-auto rounded-sm"
    elevation="6"
    nuxt
    :to="{ name: 'katalog-id', params: { id: varietie.id } }"
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
      max-width="360"
      class="white--text align-end"
      gradient="to bottom left, rgba(0,0,0,.01), rgba(0,0,0,.5)"
      :src="require(`~/assets/img/${varietie.imgs[0]}`)"
      dark
    >
      <div class="top-card-bar" dark>
        <div v-if="varietie.new" class="chip glassmorphism">
          <span>NEW</span>
        </div>
        <img
          v-if="varietie.vitalis"
          class="cardBadge glassmorphism"
          src="/Vit_logo.png"
        />
        <img
          v-if="varietie.action"
          class="cardBadge glassmorphism"
          :src="require(`~/assets/img/${varietie.action}`)"
        />
        <img
          v-if="varietie.provider == 'takii'"
          class="cardBadge glassmorphism"
          src="/takiiLogoCut.png"
        />
      </div>
      <v-card-subtitle class="pb-0 font-weight-light">{{
        varietie.segment
      }}</v-card-subtitle>
      <v-card-title class="text-h5 text-uppercase pt-0"
        >{{ varietie.name }} {{ varietie.hybrid ? "F1" : "" }}</v-card-title
      >
      <v-card-subtitle class="subtitle-1">
        {{ varietie.type || "?" }}
      </v-card-subtitle>
    </v-img>
  </v-card>
</template>

<script>
export default {
  props: {
    varietie: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      loading: false,
    };
  },
};
</script>

<style scoped>
.cardBadge {
  height: 3rem;
  padding: 0.2rem;
}
.top-card-bar {
  display: flex;
  width: 100%;
  top: 0;
  position: absolute;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
}
.glassmorphism {
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
  border-radius: 0.3rem;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
.chip {
  font-weight: 800;
  padding: 0.2rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.takiiLogo {
  padding: 0.1rem;
  border-radius: 0.6rem;
  right: 0;
  float: right;
}
</style>
