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
          <div class="top-card-bar" dark>
            <div v-if="varietie[0].new" class="chip glassmorphism">
              <span>NEW</span>
            </div>
            <img
              v-if="varietie[0].vitalis"
              class="cardBadge glassmorphism"
              src="/Vit_logo.png"
            />
            <img
              v-if="varietie[0].provider == 'takii'"
              class="cardBadge glassmorphism"
              src="/takiiLogoCut.png"
            />
          </div>

          <v-card-subtitle class="pb-0">{{
            varietie[0].segment
          }}</v-card-subtitle>
          <v-card-title class="pt-0 text-h4 text-uppercase"
            >{{ varietie[0].name }}
            {{ varietie[0].code ? `(${varietie[0].code})` : "" }}
            {{ varietie[0].hybrid ? "F1" : "" }}</v-card-title
          >
        </v-img>
        <v-card-title class="">
          Wybierz {{ varietie[0].purpose || "?" }}
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
          <div v-if="varietie[0].early" class="mb-4 text-subtitle-1">
            Wczesność:
            <v-rating length="4" size="24" v-model="varietie[0].early">
              <template v-slot:item="props">
                <v-icon color="primary">
                  {{
                    props.isFilled
                      ? "mdi-checkbox-blank-circle"
                      : "mdi-circle-outline"
                  }}
                </v-icon>
              </template>
            </v-rating>
          </div>
          <div v-if="varietie[0].headShape" class="mb-4 text-subtitle-1">
            Kształt główki: {{ varietie[0].headShape || "?" }}
          </div>
        </v-card-text>
      </v-card>
      <div v-if="varietie[0].vegetation">
        <v-subheader class="mt-3">okres wegetacji...</v-subheader>
        <v-card>
          <v-card-text>
            <div v-if="varietie[0].vegetation" class="text-subtitle-1">
              {{ varietie[0].vegetation.value }}
              {{ varietie[0].vegetation.unit }}
            </div>
          </v-card-text>
        </v-card>
      </div>
      <div v-if="varietie[0].harvest">
        <v-subheader class="mt-3">zbiory...</v-subheader>
        <v-card>
          <v-card-text>
            <div class="text-subtitle-1">
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
          </v-card-text>
        </v-card>
      </div>
      <div v-if="varietie[0].size">
        <v-subheader class="mt-3">rozmiar...</v-subheader>
        <v-card>
          <v-card-text>
            <div v-if="varietie[0].size" class="text-subtitle-1">
              {{ varietie[0].size.value }} {{ varietie[0].size.unit }}
            </div>
          </v-card-text>
        </v-card>
      </div>
      <div v-if="varietie[0].headSize">
        <v-subheader class="mt-3">rozmiar główki...</v-subheader>
        <v-card>
          <v-card-text>
            <div class="text-subtitle-1">
              {{ varietie[0].headSize }}
            </div>
          </v-card-text>
        </v-card>
      </div>
      <div v-if="varietie[0].diameter">
        <v-subheader class="mt-3">średnica...</v-subheader>
        <v-card>
          <v-card-text>
            <div class="text-subtitle-1">
              {{ varietie[0].diameter.value }} {{ varietie[0].diameter.unit }}
            </div>
          </v-card-text>
        </v-card>
      </div>
      <div v-if="varietie[0].compaction">
        <v-subheader class="mt-3">zagęszczenie...</v-subheader>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header
              class="text-subtitle-1"
              disable-icon-rotate
            >
              {{ varietie[0].compaction.value }}
              {{ varietie[0].compaction.unit }}
              <template v-slot:actions>
                <v-icon large color="primary"> mdi-calculator-variant </v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              Oblicz ile opakowań potrzebujesz
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
      <div v-if="varietie[0].spacing">
        <v-subheader class="mt-3">odstępy...</v-subheader>
        <v-card>
          <v-card-text>
            {{ varietie[0].spacing }}
          </v-card-text>
        </v-card>
      </div>
      <div v-if="varietie[0].cultivation">
        <v-subheader class="mt-3">typ uprawy...</v-subheader>
        <v-card>
          <v-card-text>
            <div class="text-subtitle-1">
              <ul>
                <li v-for="type in varietie[0].cultivation" :key="type">
                  {{ type }}
                </li>
              </ul>
            </div>
          </v-card-text>
        </v-card>
      </div>
      <div v-if="varietie[0].planting">
        <v-subheader class="mt-3">termin sadzenia...</v-subheader>
        <v-card>
          <v-card-text>
            <div class="text-subtitle-1">
              <ul>
                <li v-for="date in varietie[0].planting" :key="date">
                  {{ date }} tydzień
                </li>
              </ul>
            </div>
          </v-card-text>
        </v-card>
      </div>
      <div v-if="varietie[0].root">
        <v-subheader class="mt-3">parametry korzenia...</v-subheader>
        <v-card>
          <v-card-text>
            <div class="text-subtitle-1">
              <ul>
                <li v-if="varietie[0].root.rlength">
                  długość: {{ varietie[0].root.rlength }}
                </li>
                <li>średnica: {{ varietie[0].root.rfi }}</li>
                <li>kolor: {{ varietie[0].root.rcolor }}</li>
              </ul>
            </div>
          </v-card-text>
        </v-card>
      </div>
      <div v-if="varietie[0].tolerance">
        <v-subheader class="mt-3">tolerancja...</v-subheader>
        <v-card>
          <v-card-text>
            <div class="text-subtitle-1">
              <ul>
                <li>
                  <v-icon>mdi-thermometer-high</v-icon>
                  {{ varietie[0].tolerance.heat }}
                </li>
                <li>
                  <v-icon>mdi-snowflake </v-icon>
                  {{ varietie[0].tolerance.cold }}
                </li>
              </ul>
            </div>
          </v-card-text>
        </v-card>
      </div>
      <div v-if="varietie[0].resistance">
        <v-subheader class="mt-3">odporności na choroby...</v-subheader>
        <v-card>
          <v-card-text>
            <div class="text-subtitle-1">
              <ul>
                <li v-for="(type, index) in varietie[0].resistance" :key="type">
                  {{ type }} <v-icon v-if="!index % 2">mdi-bacteria</v-icon>
                  <v-icon v-if="!!index % 2">mdi-virus</v-icon>
                </li>
              </ul>
            </div>
          </v-card-text>
        </v-card>
      </div>
      <div>
        <v-subheader class="mt-3">cennik...</v-subheader>
        <v-card>
          <v-card-text>
            <div>
              <ul>
                <li v-for="(price, index) in varietiePrices" :key="index">
                  <p>
                    <v-icon>mdi-package-variant</v-icon> {{ price.quantity }}
                    {{ price.unit }}
                    <v-icon v-if="price.caliber">mdi-diameter-outline</v-icon>
                    {{ price.caliber ? price.caliber : "" }}
                    {{ price.vitalis ? "BIO" : "" }}
                    <v-icon>mdi-cash-multiple</v-icon
                    ><strong>{{ Number(price.price).toFixed(2) }}</strong> ({{
                      priceWithTax(price.price).toFixed(2)
                    }}) zł
                  </p>
                </li>
              </ul>
            </div>
          </v-card-text>
        </v-card>
      </div>
      <div>
        <v-subheader class="mt-3">opis...</v-subheader>
        <v-card>
          <v-card-text>
            <div class="mb-4 text-subtitle-1">
              <p>{{ varietie[0].description }}</p>
            </div>
          </v-card-text>
        </v-card>
      </div>
      <div>
        <v-subheader class="mt-4">polecamy również...</v-subheader>
        <base-medium-card
          :loading="loading"
          v-for="segmentVarietie in varietiesSegment"
          :key="segmentVarietie.id"
          :varietie="segmentVarietie"
          class="mb-9"
        >
        </base-medium-card>
      </div>
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
      varietiesSegment: [],
    };
  },
  created() {
    this.varietie = this.$store.getters.getVarieties.filter(
      (e) => e.id == this.$route.params.id
    );
    this.varietiesSegment = this.$store.getters.getVarieties.filter(
      (e) =>
        e.segment == this.varietie[0].segment && e.id !== this.$route.params.id
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

<style scoped>
.cardBadge {
  width: 3rem;
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
  width: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
</style>
