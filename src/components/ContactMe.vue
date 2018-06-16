<script>
export default {
  name: 'ContactMe',
  props: {
    email: String
  },
  render() {
    return (
      <v-container app fluid xs12 class='py-5 px-2 grey darken-3'>
        <v-flex xs12 lg8 offset-lg2>
          <v-layout row justify-start>
            <v-flex xs2 lg1>
              <v-icon dark size='64px'>mdi-email-outline</v-icon>
            </v-flex>
            <v-flex xs9 lg6 class='mx-2 text-xs-left'>
              <h2>GET IN TOUCH</h2>
              <h4>Want to know more? Interested in what I can do? Please do not hesitate to contact me!</h4>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-container>
    );
  }
}
</script>

<style lang="stylus" scoped>
@import '../styles/themes.styl'

h2
  color $title-on-dark
  font-family TimeBurner
  letter-spacing 4px
  font-size 1.8rem

h4
  color $subtitle-on-dark
  font-size 1.1rem

.any-card
  border-radius $cardrad

</style>
