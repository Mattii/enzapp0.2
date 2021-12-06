<template>
  <v-row justify="center" align="center">
    <v-col cols="12" md="8" sm="8">
      <v-btn class="mt-6" outlined @click="$router.back()">
        <v-icon class="pr-3">mdi-arrow-left</v-icon> wróć</v-btn
      >
      <v-card class="mx-auto mt-3">
        <v-img
          class="white--text align-end"
          min-height="200px"
          max-height="300px"
          :src="promotion[0].src[0]"
          :gradient="`to bottom, rgba(0,0,0,.1), rgba(0,0,0,.6)`"
        >
          <v-card-title class="text-h4"
            >PROMOCJA<br />
            {{ promotion[0].terms }}</v-card-title
          >
          <v-card-subtitle
            class="subtitle-1"
            v-text="promotion[0].type"
          ></v-card-subtitle>
        </v-img>
      </v-card>
      <v-subheader class="mt-3">do końca promocji zostało</v-subheader>
      <v-card 
        dark
        class="mx-auto text-center pa-6"
        :color="promotion[0].color"
      >
        <div class="text-h4">{{ promotionClock }}</div>
        <div class="text-subtitle-2 font-weight-light">
          promocja obowiązuje do {{ promotion[0].endTime }} <br />lub do wyczerpania zapasów
        </div>
      </v-card>
      <v-card class="mx-auto mt-6">
        <v-img :src="promotion[0].posterImg"></v-img>
      </v-card>
      <v-subheader class="mt-3">regulamin sprzedaży premiowej</v-subheader>
      <v-card class="mx-auto">
        <div class="pa-3">ENZA ZADEN Sp. z o.o.</div>
        <div class="pa-3" v-for="(e, i) in promotion[0].statute" :key="e.title">
          <h4 class="text-uppercase pb-2 text-center">
            §{{ i + 1 }}. {{ e.title }}
          </h4>
          <p v-for="(detail, index) in e.details" :key="index">
            {{ index + 1 }}. {{ detail }}
          </p>
        </div>
        <v-card-actions class="pb-6 justify-center">
          <v-btn
            :href="promotion[0].statuteDownloadLink"
            download
            elevation="2"
            outlined
            small
            >pobierz regulamin</v-btn
          >
        </v-card-actions>
      </v-card>
      <v-subheader class="mt-3">odmiany objęte promocją</v-subheader>
      <div v-if="promotionCrop.length == 0">
        <v-card class="mb-3" v-for="crop in promotion[0].crops" :key="crop">
          <v-card-title>{{ crop }}</v-card-title>
        </v-card>
      </div>
      <v-card
        :loading="loading"
        v-for="(v, key) in promotionCrop"
        :key="key"
        class="mx-auto mb-6 rounded-sm"
        elevation="6"
        nuxt
        :to="{ name: 'katalog-id', params: { id: v.id } }"
      >
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
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
          <div class="top-card-bar">
            <div v-if="v.new" class="chip">NEW</div>
            <img
              v-if="v.provider == 'takii'"
              class="takiiLogo"
              src="/takiiLogoCut.png"
            />
          </div>
          <v-card-subtitle class="pb-0">{{ v.segment }}</v-card-subtitle>
          <v-card-title class="text-h4 text-uppercase pt-0"
            >{{ v.name }} {{ v.hybrid ? 'F1' : '' }}</v-card-title
          >
          <v-card-subtitle class=""> {{ v.type || '?' }} </v-card-subtitle>
        </v-img>
      </v-card>
      <v-subheader class="mt-3">kontakt</v-subheader>
      <v-card class="mx-auto">
        <v-card-title height="large">call me &#128521;</v-card-title>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'promocja',
  data() {
    return {
      promotion: [],
      promotionEnds: '',
      loading: false,
    }
  },
  created() {
    //console.log(context.store.getters.getPromotions);
    this.promotion = this.$store.getters.getPromotions.filter(
      (p) => p.title === this.$route.params.id
    )
  },
  mounted() {
    this.timeToPromotionEnd(this.promotion[0].endTime)
    //setInterval(this.tic, 1000)
  },
  computed: {
    promotionClock() {
      const sec = this.promotionEnds
      const min = sec / 60
      const hour = min / 60
      const days = hour / 24
      const month = days / 30
      const secT = Math.floor(sec % 60)
      const minT = Math.floor(min % 60)
      const hourT = Math.floor(hour % 24)
      const dayT = Math.floor(days % 30)
      const monthT = Math.floor(month)
      if (month >= 1) {
        return `${this.toDubleDiget(monthT)}m :${this.toDubleDiget(
          dayT
        )}d :${this.toDubleDiget(hourT)}h`
      }
      return `${this.toDubleDiget(dayT)}d :${this.toDubleDiget(
        hourT
      )}h :${this.toDubleDiget(minT)}m :${this.toDubleDiget(secT)}s`
    },
    promotionCrop() {
      return this.$store.getters.getVarieties.filter((ele) =>
        this.promotion[0].crops.includes(ele.name.toLowerCase())
      )
    },
  },
  methods: {
    timeToPromotionEnd(time) {
      this.promotionEnds = (new Date(time).getTime() - Date.now()) / 1000
    },
    toDubleDiget(time) {
      return time < 10 ? '0' + time : time
    },
    tic() {
      this.promotionEnds--
    },
  },
}
</script>

<style></style>
