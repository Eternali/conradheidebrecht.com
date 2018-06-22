<script>
export default {
  name: 'MainAttraction',
  props: {
    name: String,
    subtitle: Object,
    links: Array
  },
  data() {
    return {
      speed: 100,
      pause: 200
    }
  },
  computed: {
    firstname() {
      return this.name.split(' ')[0].toUpperCase();
    },
    lastname() {
      return this.name.split(' ')[1].toUpperCase();
    }
  },
  methods: {
    typeWriter(i, offset) {
      if (i < this.name.length) {
        if (i < this.firstname.length) {
          this.$refs.firstname.innerHTML += this.firstname.charAt(i);
        } else {
          if (i === this.firstname.length) offset = this.firstname.length + 1;
          if (i - offset < this.lastname.length)
            this.$refs.lastname.innerHTML += this.lastname.charAt(i - offset);
        }
        i++;
        setTimeout(() => this.typeWriter(i, offset), this.speed);
      }
    }
  },
  mounted() {
    this.typeWriter(0, 0);
  },
  render() {
    return (
      <v-container app fluid style='height: 100vh' id='home'>
        <v-layout fill-height align-center>
          <v-flex xs12>
            <h3 class='display-3'>
              <span class='letterdrop' ref='firstname'></span>
              <span class='letterdrop' ref='lastname'></span>
            </h3>
            < br/>
            <v-flex xs8 offset-xs2>
              <h4 class='subtitle center'>{ this.subtitle }</h4>
              <v-divider class='my-3'></v-divider>
            </v-flex>
            <ul class='socialList'>
              { this.links.map((link) =>
                <v-btn color='primary' fab flat large href={ link.href }>{ link.child }</v-btn>
              ) }
            </ul>
          </v-flex>
        </v-layout>
      </v-container>
    );
  }
}
</script>

<style lang="stylus" scoped>
@import '../styles/themes.styl'

.center
  display flex
  justify-content center
  align-items center

.subtitle
  font-size 1.4em
  font-weight normal

.socialList li
  display inline
  list-style-type none
  padding-right 20px

h3 > span
  font-family TimeBurner
  letter-spacing 0.3em !important
  word-wrap break-word
  word-spacing -0.5em
  &:nth-child(1)
    color $secondary
    font-weight 700
  &:nth-child(1):after
    content ''
    width 0.5em
    height 2em
    background grey
  &:nth-child(2)
    color $primary
    font-weight 100

@keyframes cursor
  0%
    opacity 0.0
  50%
    opacity 1.0
  100%
    opacity 0.0

</style>
