<script>
export default {
  name: 'MainNav',
  props: {

  },
  render() {
    return (
      <v-toolbar app flat dense scroll-off-screen class='transparent'>
      <v-toolbar-side-icon class='hidden-md-and-up'></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-toolbar-items class='hidden-sm-and-down has-black-background'>
        <v-btn flat>HOME</v-btn>
        <v-btn flat>ABOUT</v-btn>
        <v-btn flat>RESUME</v-btn>
        <v-btn flat>SKILLS</v-btn>
        <v-btn flat>WORKS</v-btn>
        <v-btn flat>CONTACT</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      </v-toolbar>
    );
  }
}
</script>

<style lang="stylus" scoped>

</style>
