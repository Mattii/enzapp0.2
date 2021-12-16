<template>
  <v-sheet>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="9" md="8" lg="6">
        <v-card class="mt-6">
          <v-img
            :src="card.src"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="250px"
          >
            <v-card-title class="headline" v-text="card.title"></v-card-title>
            <v-card-subtitle class="pb-0"
              >twoje odmiany na wyciągniecie ręki</v-card-subtitle
            >
            <v-card-actions>
              <v-btn
                nuxt
                justify="center"
                class="ma-2 pa-3 white--text"
                outlined
                rounded
                small
                :to="{ name: 'katalog' }"
              >
                Zapoznaj się...
              </v-btn>
            </v-card-actions>
          </v-img>
        </v-card>

        <v-subheader class="mt-3">promocje...</v-subheader>
        <v-card
          v-for="promo in promos"
          :key="promo.title"
          :to="{ name: 'promocja-id', params: { id: promo.title } }"
          elevation="7"
          :color="promo.color"
          class="overflov-hiden mb-5"
          dark
        >
          <div class="test d-flex flex-no-wrap justify-space-between">
            <div class="test align-self-center align-stretch">
              <v-card-title
                class="headline pb-0 justify-center text-uppercase"
                v-text="promo.title"
              ></v-card-title>

              <v-card-title
                class="headline pt-0 justify-center"
                v-text="promo.terms"
              ></v-card-title>

              <v-card-title class="font-weight-light pa-1 justify-center">{{
                promotionCounter(promo.endTime)
              }}</v-card-title>
            </div>

            <v-avatar size="150" tile>
              <v-carousel
                delimiter-icon="mdi-minus"
                :show-arrows="false"
                cycle
                interval="6000"
                height="150"
                hide-delimiters
              >
                <v-carousel-item
                  width="150"
                  v-for="(item, i) in promo.src"
                  :key="i"
                  :src="item"
                  :gradient="`to bottom, rgba(0,0,0,.1), rgba(0,0,0,.3)`"
                >
                  <v-card-title
                    class="
                      headline
                      align-end
                      subtitle-1
                      font-weight-light
                      text-uppercase
                    "
                    v-text="promo.crops[i]"
                  ></v-card-title>
                </v-carousel-item>
              </v-carousel>
            </v-avatar>
          </div>
        </v-card>

        <v-subheader class="mt-3">nasze odmiany...</v-subheader>
        <v-card v-for="card in cards" :key="card.title" class="mx-auto mb-7">
          <v-img :src="card.src" height="200px"></v-img>

          <v-card-title class="text-uppercase"> {{ card.title }} </v-card-title>

          <v-card-subtitle> {{ toFullCrop(card.crop) }} </v-card-subtitle>

          <v-card-actions>
            <v-btn
              aria-label="expand text"
              icon
              @click="card.show = !card.show"
            >
              <v-icon>{{
                card.show ? 'mdi-chevron-up' : 'mdi-chevron-down'
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="card.show">
              <v-divider></v-divider>

              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than
                he could deliver. You won't have time for sleeping, soldier, not
                with all the bed making you'll be doing. Then we'll go with that
                data file! Hey, you add a one and two zeros to that or we walk!
                You're going to do his laundry? I've got to find a way to
                escape.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
import Logo from '~/components/Logo.vue'
import EzappLogo from '~/components/EzappLogo.vue'

export default {
  components: {
    Logo,
    EzappLogo,
  },
  data() {
    return {
      varieties: [],
      cards: [
        {
          src: '/kapustne/B_WC/cheeta.jpg',
          title: 'Kapusty',
          crop: ['B_WC', 'B_CC', 'B_SC'],
          show: false,
        },
        {
          src: '/kapustne/B_CF/elintos.jpg',
          title: 'Kalafiory',
          crop: ['B_CF'],
          show: false,
        },
        {
          src: '/kapustne/B_KR/timpano.jpg',
          title: 'Kalarepy',
          crop: ['B_KR'],
          show: false,
        },
      ],
      show: false,
      selection: 0,
      card: {
        src: '/hero.jpg',
        title: 'Sięgnij po cyfrowy katalog',
      },
      promos: [],
      presentTime: new Date().getTime(),
    }
  },
  computed: {},
  created() {
    this.$store.dispatch('fetchVarieties')
    this.promos = this.$store.getters.getPromotions
    //setInterval(() => {
    //  this.presentTime = new Date().getTime()
    //}, 1000)
  },
  mounted() {},
  methods: {
    promotionCounter(endTime) {
      //const current = Date.now()
      const promotionEnd = new Date(endTime).getTime()
      const timeToCountDown = promotionEnd - this.presentTime
      const sec = timeToCountDown / 1000
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
      return `${this.toDubleDiget(monthT)}m :${this.toDubleDiget(
        dayT
      )}d :${this.toDubleDiget(hourT)}h :${this.toDubleDiget(
        minT
      )}m :${this.toDubleDiget(secT)}s`
    },
    toDubleDiget(time) {
      return time < 10 ? '0' + time : time
    },
    toFullCrop(crop) {
      switch (crop) {
        case 'TO':
          return 'buenarosa, enroza, ...'
          break
        case 'CC':
          return 'bjorn, severin, melen, ...'
          break
        case 'CF':
          return 'bielic, xenia, ...'
          break
        default:
          break
      }
    },
  },
}
</script>
<style>
.test {
  width: 100%;
}
</style>
