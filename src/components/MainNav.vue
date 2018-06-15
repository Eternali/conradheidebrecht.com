<template>
  <v-layout app>
    <v-navigation-drawer
      v-model="drawer"
      enable-resize-watcher
      app
      dark
      class="primary hidden-md-and-up"
    >
      <v-list>
        <v-list-tile
          v-for='(item) in items'
          :key='item.name'
          :to='item.href'
          class=''
          active-class=''
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.name }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app flat dense scroll-off-screen class='transparent'>
      <v-toolbar-side-icon class='hidden-md-and-up' @click.stop='toggleDrawer'></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-toolbar-items class='hidden-sm-and-down has-black-background'>
        <v-btn v-for='item in items' :key='item.name' @click='item.href' flat>{{ item.name }}</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
    </v-toolbar>
  </v-layout>
</template>


<script>
export default {
  name: 'MainNav',
  props: {
    items: Array,
    mini: Boolean,
    right: Boolean,
  },
  data() {
    return {
      drawer: false
    }
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
    toggleMini() {
      this.mini = !this.mini;
    }
  },
}
</script>

<style lang="stylus" scoped>

</style>
