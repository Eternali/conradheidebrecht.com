<script>
export default {
  name: 'Footer',
  props: {
    links: Array,
    copyYear: Number,
    fullname: String,
  },
  render() {
    return (
      <v-layout row wrap justify-center class='grey darken-4' style='padding: 0.5rem'>
        { this.links.map((link) => 
          <v-btn fab flat large color='primary' href={ link.href }>{ link.child }</v-btn>
        ) }
        <v-flex xs12 py-3 text-xs-center color='grey lighten-1' class='footer-text'>
          &copy; {this.copyYear} - <strong>{ this.fullname }</strong>
        </v-flex>
      </v-layout>
    );
  }
}
</script>

<style lang="stylus" scoped>
.footer-text
  font-family TimeBurner
  letter-spacing 0.2em
  font-weight normal
</style>

