<template>
  <v-layout row wrap>
    <v-navigation-drawer
      v-model='drawer'
      :mini-variant='mini'
      temporary
      dark
      absolute
      class='hidden-md-and-up'
    >
      <v-list class="pa-1">
        <v-list-tile v-if="mini" @click.stop="toggleMini">
          <v-list-tile-action>
            <v-icon>chevron_right</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
      <v-list class='pa-0'>
        <v-list-tile v-for='(item, i) in items' :key='item.name'>
          <v-list-tile-avatar @click.stop='item.href'>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content @click.stop='item.href'>
            <v-list-tile-title>{{ item.name }}</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action v-if='i == 0'>
            <v-btn icon @click.stop='toggleMini'>
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
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
