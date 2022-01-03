<template>
   <v-card
        :loading="loading"
        class="mx-auto mt-9 rounded-sm"
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
          class="white--text align-end"
          gradient="to bottom left, rgba(0,0,0,.01), rgba(0,0,0,.5)"
          :src="require(`~/assets/img/${varietie.imgs[0]}`)"
          dark
        >
          <div class="top-card-bar" dark>
            <div v-if="varietie.new" class="chip">NEW</div>
            <img
              v-if="varietie.vitalis"
              class="vitalisLogo"
              src="/vitalisLogoColor.png"
              height="32"
            />
            <img
              v-if="varietie.provider == 'takii'"
              class="takiiLogo"
              src="/takiiLogoCut.png"
            />
          </div>
          <v-card-subtitle class="pb-0">{{ varietie.segment }}</v-card-subtitle>
          <v-card-title class="text-h4 text-uppercase pt-0"
            >{{ varietie.name }} {{ varietie.hybrid ? "F1" : "" }}</v-card-title
          >
          <v-card-subtitle class=""> {{ varietie.type || "?" }} </v-card-subtitle>
        </v-img>
      </v-card>
</template>

<script>
export default {
  props:{
    varietie: {
      type: Object,
      required: true
    }
  },
  data(){
      return {
          loading: false,
      }
  }
}
</script>

<style>

</style>