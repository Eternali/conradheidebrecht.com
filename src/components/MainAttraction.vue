<script>
export default {
  name: 'MainAttraction',
  props: {
    name: String,
    subtitle: Object,
    links: Array
  },
  computed: {
    firstname() {
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
          <v-flex xs12>
            <h3 class='display-3 titlename'>
              <span style={ `font-weight: 100; color: ${this.$vuetify.theme.secondary}` }>
                { this.firstname }
              </span> &nbsp;
              <span style={ `font-weight: 700; color: ${this.$vuetify.theme.primary}` }>
                { this.lastname }
              </span>
            </h3>
            < br/>
            <v-flex xs8 offset-xs2>
              <h4 class='subtitle center'>{ this.subtitle }</h4>
              <v-divider class='my-3'></v-divider>
            </v-flex>
            <ul class='socialList'>
              { this.links.map((link) =>
                <v-btn color='primary' fab flat large href={ link.href }>{ link.child }</v-btn>
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

.titlename
  font-family TimeBurner
  font-weight 500
  letter-spacing 0.3em !important
  word-wrap break-word
  word-spacing -0.5em

.subtitle
  font-size 1.4em
  font-weight normal

.socialList li
  display inline
  list-style-type none
  padding-right 20px
</style>
