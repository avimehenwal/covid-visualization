<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <v-list>
        <v-list-item two-line :class="miniVariant && 'px-0'" to="/">
          <v-list-item-avatar>
            <v-icon x-large color="primary">
              mdi-vector-circle
            </v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>COVID-19 Dashboard</v-list-item-title>
            <v-list-item-subtitle>@avi v0.1.8</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider />

        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon color="accent">
              {{ item.icon }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="clipped" fixed app flat color="white">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-{{ `chevron-${clipped ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <!-- <v-btn icon @click.stop="fixed = !fixed" >
        <v-icon>mdi-minus</v-icon>
      </v-btn>-->
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <!-- <v-btn icon @click.stop="rightDrawer = !rightDrawer" >
        <v-icon>mdi-menu</v-icon>
      </v-btn>-->
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <!-- <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>-->

    <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-google-analytics',
          title: 'Dashboard',
          to: '/'
        },
        {
          to: '/datatable',
          title: 'Data Table',
          icon: 'mdi-table'
        },
        {
          icon: 'mdi-chart-bar',
          title: 'Github Stats',
          to: '/github'
        },
        {
          to: '/test',
          title: 'Test Page',
          icon: 'mdi-test-tube'
        },
        {
          // to: '/country/:name',
          to: '/countryname',
          title: 'Country',
          icon: 'mdi-earth'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Questions',
          to: '/inspire'
        },
        {
          to: '/about',
          title: 'About',
          icon: 'mdi-file-document-outline'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'COVID-19 Dashboard'
    }
  }
}
</script>
