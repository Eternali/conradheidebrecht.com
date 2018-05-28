<script>
export default {
  name: 'MainAttraction',
  props: {
    name: String,
    subtitle: Object,
    links: Array
  },
  computed: {
    fistname() {
      return this.name.split(' ')[0].toUpperCase(); 
    },
    lastname() {
      return this.name.split(' ')[1].toUpperCase();
    }
  },
  render() {
    return (
      <v-container flex fill-height>
        <v-layout align-center>
          <v-flex>
            <span>
              <h3 class='display-3 center firstname' style={ `color: ${this.$vuetify.theme.secondary}` }>{ this.fistname }</h3>
              <h3 class='display-3 center lastname' style={ `color: ${this.$vuetify.theme.primary}` }>{ this.lastname }</h3>
            </span>
            <span class='subheading center'>{ this.subtitle }</span>
            <v-divider class='my-3'></v-divider>
            <ul class='socialList'>
              { this.links.map((link) =>
                <v-btn color='primary' href={ link.href } fab flat large>{ link.child }</v-btn>
              ) }
            </ul>
          </v-flex>
        </v-layout>
      </v-container>
    );
  }
}
</script>

<style lang="stylus" scoped>
.center
  display flex
  justify-content center
  align-items center

.firstname
  font-weight 700 !important
  letter-spacing 0.2em !important
.lastname

.socialList li
  display inline
  list-style-type none
  padding-right 20px
</style>
