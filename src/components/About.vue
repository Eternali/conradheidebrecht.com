<script>
export default {
  name: 'About',
  props: {
    name: String,
    profile: String,
    about: String,
    phone: String,
    email: String,
    keybase: String,
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
      <v-container app fluid xs12 class='py-5 grey darken-2' id='about'>
        <v-layout align-center>
          <v-flex xs12>
            <v-flex xs6 md4 lg2 xl2 offset-xs3 offset-md4 offset-lg5 offset-xl-5>
              <img src={ this.profile } alt='avatar' style='border-radius: 50%; max-width: 100%' />
            </v-flex>
            <v-layout row wrap class='mt-1 mb-4 mx-2'>
              <v-flex xs12 md8 lg5 offset-lg2>
                <v-card color='grey darken-1' dark class='mt-3 mb-0 mx-2 any-card'>
                  <v-card-text primary class='title' style='text-align: left'>About</v-card-text>
                  <v-card-text style='text-align: left'>{ this.about }</v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4 lg3 align-end>
                <v-card color='purple' dark class='mt-3 mb-0 mx-2 any-card'>
                  <v-card-text primary class='title' style='text-align: right'>Contact</v-card-text>
                  <v-card-text style='text-align: right'>
                    { this.name }<br />
                    { this.phone }<br />
                    <a href={ `mailto:${this.email}` } class='a-text sublink'>{ this.email }</a><br />
                    <a href={ `https://${this.keybase}` } target='blank' class='a-text sublink'>{ this.keybase }</a>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
            <v-flex>
              <v-btn large color='primary' onClick={ this.openResume } class='any-card'>
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

<style lang="stylus" scoped>
@import '../styles/themes.styl'

.sublink
  text-decoration none !important
  color #fff
  &:before
    background #fff
  &:after
    background #fff

</style>
