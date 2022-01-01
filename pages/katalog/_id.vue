<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-btn class="mt-6" outlined @click="$router.back()">
        <v-icon class="pr-3">mdi-arrow-left</v-icon> wróć</v-btn
      >
      <v-card :loading="loading" class="mx-auto mt-6">
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
          :src="require(`~/assets/img/${varietie[0].imgs[0]}`)"
          dark
        >
          <div class="top-card-bar">
            <div v-if="varietie[0].new" class="chip">NEW</div>
            <img
              v-if="varietie[0].provider == 'takii'"
              class="takiiLogo"
              src="/takiiLogoCut.png"
            />
          </div>
          <v-card-title class="text-h4 text-uppercase"
            >{{ varietie[0].name }}
            {{ varietie[0].code ? `(${varietie[0].code})` : "" }}
            {{ varietie[0].hybrid ? "F1" : "" }}</v-card-title
          >
          <v-card-subtitle>{{ varietie[0].segment }}</v-card-subtitle>
        </v-img>
        <v-card-title class="">
          Osiagnij {{ varietie[0].purpose || "?" }}
        </v-card-title>
        <v-card-text class="">
          <div class="mb-4 text-subtitle-1">
            Przeznaczenie
            <ul>
              <li v-for="place in varietie[0].intended" :key="place">
                {{ place }}
              </li>
            </ul>
          </div>
          <div class="mb-4 text-subtitle-1">
            Cechy szczególne:<br />
            <ul>
              <li>
                {{ varietie[0].type || "?" }}
              </li>
            </ul>
          </div>
          <div v-if="varietie[0].headShape" class="mb-4 text-subtitle-1">
            Kształt główki: {{ varietie[0].headShape || "?" }}
          </div>
          <div v-if="varietie[0].vegetation" class="mb-4 text-subtitle-1">
            Wegetacja: {{ varietie[0].vegetation.value }}
            {{ varietie[0].vegetation.unit }}
          </div>
          <div v-if="varietie[0].harvest" class="mb-4 text-subtitle-1">
            Zbiory:
            <span v-for="(date, index) in varietie[0].harvest" :key="date">
              {{
                new Date(`${date}`).toLocaleDateString("pl-PL", {
                  month: "long",
                })
              }}
              <span v-if="index == '0' && varietie[0].harvest.length > 1"
                >-</span
              >
            </span>
          </div>
          <div v-if="varietie[0].size" class="mb-4 text-subtitle-1">
            Rozmiar: {{ varietie[0].size.value }} {{ varietie[0].size.unit }}
          </div>
          <div v-if="varietie[0].compaction" class="mb-4 text-subtitle-1">
            Zagęszczenie: {{ varietie[0].compaction.value }}
            {{ varietie[0].compaction.unit }}
          </div>
          <div class="mb-4 text-subtitle-1">
            Podłoże:
            <ul>
              <li v-for="type in varietie[0].cultivation" :key="type">
                {{ type }}
              </li>
            </ul>
          </div>
          <div v-if="varietie[0].resistance" class="mb-4 text-subtitle-1">
            Odporności:
            <ul>
              <li v-for="type in varietie[0].resistance" :key="type">
                {{ type }}
              </li>
            </ul>
          </div>
          <div>
            <p>Cennik</p>
            <ul>
              <li v-for="(price, index) in varietiePrices" :key="index">
                <p>
                  <v-icon>mdi-package-variant</v-icon> {{ price.quantity }}
                  {{ price.unit }}  <v-icon>mdi-cash-multiple</v-icon>
                  <strong>{{ Number(price.price).toFixed(2) }}</strong> ({{
                    priceWithTax(price.price).toFixed(2)
                  }}) zł <v-icon v-if="price.caliber">mdi-diameter-outline</v-icon> {{ price.caliber ? price.caliber : "" }} {{ price.vitalis ? "BIO" : "" }}
                </p>
              </li>
            </ul>
          </div>
          <div class="mb-4 text-subtitle-1">
            Opis:
            <p>{{ varietie[0].description }}</p>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
//import varietie from '../static/varietie.json'

export default {
  name: "katalog-id",
  data() {
    return {
      open: false,
      loading: false,
      varietie: [],
      varietiePrices: [],
    };
  },
  created() {
    this.varietie = this.$store.getters.getVarieties.filter(
      (e) => e.id == this.$route.params.id
    );
    this.varietiePrices = this.$store.getters.getCropsPrice.filter((ele) => {
      //console.log(ele.name.toLowerCase(), this.varietie[0].name.toLowerCase());
      //console.log(ele.name.toLowerCase().includes(this.varietie[0].name.toLowerCase()))
      return ele.name
        .toLowerCase()
        .includes(this.varietie[0].name.toLowerCase());
    });
  },
  methods: {
    priceWithTax(price) {
      return price * 0.08 + +price;
    },
  },
};
</script>
