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
            <v-btn fab flat large color='primary' href={ link.href }>{ link.child }</v-btn>
          ) }
          <v-flex xs12 py-3 text-xs-center white--text color='grey lighten-1'>
            &copy; {this.copyYear} - <strong>{ this.fullname }</strong>
          </v-flex>
        </v-layout>
      </v-footer>
    );
  }
}
</script>
