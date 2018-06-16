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
          <v-layout column>
            <v-layout row justify-start>
              <v-flex xs2 lg1 class='mr-2'>
                <v-icon dark size='64px'>mdi-email-outline</v-icon>
              </v-flex>
              <v-flex xs10 lg11 class='mx-2 text-xs-left'>
                <h2>GET IN TOUCH</h2>
                <h4>Want to know more? Interested in what I can do? Please do not hesitate to contact me!</h4>
              </v-flex>
            </v-layout>
            <v-layout row justify-center class='my-3 mx-2'>
              <v-flex xs2 lg1>
                <v-card flat dark color='accent' class='mr-3 any-card card-title'>
                  <v-card-text>Name</v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs8 lg9>
                <input type='text' class='mr-3 py-3 px-3' />
              </v-flex>
            </v-layout>
            <v-layout row justify-center class='my-3 mx-2'>
              <v-flex xs2 lg1>
                <v-card flat dark color='accent' class='mr-3 any-card card-title'>
                  <v-card-text>Email</v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs8 lg9>
                <input type='text' class='mr-3 py-3 px-3' />
              </v-flex>
            </v-layout>
            <v-layout row justify-center class='my-3 mx-2'>
              <v-flex xs2 lg1>
                <v-card flat dark color='accent' class='mr-3 any-card card-title'>
                  <v-card-text>Subject</v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs8 lg9>
                <input type='text' class='mr-3 py-3 px-3' />
              </v-flex>
            </v-layout>
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

.card-title
  font-size 1.4rem
  font-weight 700

input[type=text]
  width 100%
  border-radius $cardrad
  outline none
  background-color $input-card
  color $input-on-dark
  font-size 1.4rem
  transition all 0.2s ease-in-out

  &:hover
    background-color $input-hover
  &:focus
    background-color $input-focus

</style>
