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
  computed: {
    avatarSize() {
      return `250px`;
    }
  },
  methods: {
    openResume() {
      window.open(this.resume, '_blank');
    }
  },
  render() {
    return (
      <v-container flex xs12 class='grey darken-2' style='padding: 2rem 0 2rem 0'>
        <v-layout align-center>
          <v-flex xs12>
            <v-flex xs6 md4 lg2 offset-xs3 offset-md4 offset-lg5>
              <img src={ this.profile } alt='avatar' style='border-radius: 50%; max-width: 100%' />
            </v-flex>
            <v-layout row wrap>
              <v-flex xs12 md8 lg8>
                <h2>About</h2>
                <p>{ this.about }</p>
              </v-flex>
              <v-flex xs12 md4 lg4>
                <h2>Contact</h2>
                <p></p>
              </v-flex>
            </v-layout>
            <v-flex>
              <v-btn large color='primary' onClick={ this.openResume }>
                <v-icon>mdi-download</v-icon>&nbsp; Download Resume
              </v-btn>
            </v-flex>
          </v-flex>
        </v-layout>
      </v-container>
    );
  }
}
</script>
