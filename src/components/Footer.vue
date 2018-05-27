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
      <v-footer app fixed height='auto' class='grey darken-4' style='padding: 0.5rem'>
        <v-layout row wrap justify-center>
          { this.links.map((link) => 
            <v-btn color='primary' href={ link.href } fab flat large>{ link.child }</v-btn>
          ) }
          <v-flex color='grey lighten-1' xs12 py-3 text-xs-center white--text>
            &copy; {this.copyYear} - <strong>{ this.fullname }</strong>
          </v-flex>
        </v-layout>
      </v-footer>
    );
  }
}
</script>
