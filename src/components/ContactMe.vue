<script>
import CardInput from './CardInput.vue'

export default {
  name: 'ContactMe',
  components: {
    CardInput
  },
  props: {
    email: String
  },
  data() {
    return {
      sending: false,
    };
  },
  methods: {
    sendEmail() {
      this.sending = !this.sending;
    }
  },
  render() {
    return (
      <v-container app fluid xs12 class='py-5 px-2 grey darken-3'>
        <v-flex xs12 lg8 offset-lg2>
          <v-layout column>
            <v-layout row justify-center>
              <v-flex xs2 lg2 class='mr-2'>
                <v-icon dark size='64px'>mdi-email-outline</v-icon>
              </v-flex>
              <v-flex xs8 lg8 class='mx-2 mb-2 text-xs-left'>
                <h2>GET IN TOUCH</h2>
                <h4>Want to know more? Interested in what I can do? Please do not hesitate to contact me!</h4>
              </v-flex>
            </v-layout>
            <CardInput label='Name' labelColor='primary' dark />
            <CardInput label='Email' labelColor='primary' dark />
            <CardInput label='Subject' labelColor='primary' dark />
            <CardInput label='Message' labelColor='primary' dark lines='10' />
            <v-layout row justify-center>
              <v-flex xs2 lg2 />
              <v-flex xs8 lg8>
                <v-btn large color='primary' onClick={ this.sendEmail } class='any-card'>
                  { this.sending
                    ? <v-progress-circular indeterminate size='34' />
                    : <v-icon size='34'>mdi-cube-send</v-icon>
                  } &nbsp; SEND
                </v-btn>
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

</style>
