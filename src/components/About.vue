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
      <v-container fluid xs12 class='grey darken-2' style='padding: 2rem 0 2rem 0'>
        <v-layout align-center>
          <v-flex xs12>
            <v-flex xs6 md4 lg2 xl2 offset-xs3 offset-md4 offset-lg5 offset-xl-5>
              <img src={ this.profile } alt='avatar' style='border-radius: 50%; max-width: 100%' />
            </v-flex>
            <v-layout row wrap>
              <v-flex xs12 md8 lg5 offset-lg2>
                <v-card color='grey darken-1' dark style='margin: 2rem 1rem'>
                  <v-card-title primary class='title'>About</v-card-title>
                  <v-card-text>{ this.about }</v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4 lg3 align-end>
                <v-card color='purple' dark style='margin: 2rem 1rem'>
                  <v-card-title primary class='title'>Contact</v-card-title>
                  <v-card-text>
                    { this.name }<br />
                    { this.address.street }<br />
                    { this.address.city },&nbsp;
                    { this.address.province }&nbsp;
                    { this.address.postal },&nbsp;
                    { this.address.country }<br />
                    { this.phone }<br />
                    { this.email }
                  </v-card-text>
                </v-card>
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
