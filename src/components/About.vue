<script>
import Address from '../utils/Address.js'

export default {
  name: 'About',
  props: {
    name: String,
    profile: String,
    about: String,
    address: Address,
    phone: String,
    email: String,
    resume: String,
  },
  render() {
    return (
        <v-layout column justify-center class='grey darken-2' style='padding: 2rem 0 2rem 0'>
          <v-flex xs6>
            <v-avatar>
              <img src={ this.profile } alt='avatar' />
            </v-avatar>
          </v-flex>
          <v-flex xs4>
            <v-btn large color='primary' href={ this.resume }>
              <v-icon>mdi-download</v-icon>&nbsp; Download Resume
            </v-btn>
          </v-flex>
        </v-layout>
    );
  }
}
</script>
