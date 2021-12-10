<template>
  <v-app dark>
    <v-app-bar fixed app elevate-on-scroll>
      <v-img
        contain
        class="align-self-start"
        max-width="68"
        max-height="68"
        src="/logo.jpg"
      ></v-img>
      <div class="pl-3 text-h5" id="serchPlaceholder">
      </div>
      <template>
        <v-tabs v-model="tab" align-with-title class="d-none d-sm-flex">
          <v-tabs-slider color="#A3D51C"></v-tabs-slider>

          <v-tab v-for="link in links" :key="link.title" :to="link.to">
            {{ link.title }}
          </v-tab>
        </v-tabs>
      </template>
      <v-spacer />
      <v-btn
        aria-label="open drawer"
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon x-large>mdi-account-circle</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.title"
          :to="link.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="link.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-btn
      v-show="fab"
      fixed
      fab
      transition-swing
      elevation="13"
      class="mb-13"
      bottom
      outlineds
      right
      color="#41A62Aaa"
      v-scroll="onScroll"
      @click="
        $vuetify.goTo(0, {
          duration: 300,
          offset: 0,
          easing: 'easeInOutCubic',
        })
      "
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
    <v-bottom-navigation
      dark
      class="d-sm-none"
      grow
      app
      v-model="value"
      background-color="#41a62a"
      shift
    >
      <v-btn
        dark
        text
        color="white"
        v-for="link in links"
        :key="link.title"
        nuxt
        :to="link.to"
        exact-path
        background-color="#41a62a"
      >
        <span>{{ link.title }}</span>

        <v-icon>{{ link.icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation>

    <v-footer :absolute="!fixed" app>
      <span
        >&copy; {{ $config.AUTHOR_NAME }} {{ new Date().getFullYear() }}</span
      >
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      fab: false,
      clipped: false,
      drawer: false,
      fixed: false,
      tab: "null",
      links: [
        {
          icon: "mdi-apps",
          title: "Główna",
          to: "/",
        },
        {
          icon: "mdi-book-open-variant",
          title: "Katalog",
          to: "/katalog",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "EZapp",
      value: 1,
    };
  },
  fetch() {
    this.$store.dispatch("fetchVarieties");
  },
  computed: {
    color() {
      switch (this.value) {
        case 0:
          return "blue-grey";
        case 1:
          return "teal";
        case 2:
          return "brown";
        case 3:
          return "indigo";
        default:
          return "blue-grey";
      }
    },
  },
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 40;
    },
  },
};
</script>
<style scoped>
.v-item-group.v-bottom-navigation .v-btn.v-size--default {
  height: inherit;
}
.v-btn.v-btn--has-bg {
  background-color: inherit;
}
</style>
