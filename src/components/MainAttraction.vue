<script>
export default {
  name: 'MainAttraction',
  props: {
    name: String,
    subtitle: Object,
    links: Array
  },
  computed: {
    firstname() {
      return this.name.split(' ')[0].toUpperCase();
    },
    lastname() {
      return this.name.split(' ')[1].toUpperCase();
    }
  },
  render() {
    return (
      <v-container app fluid style='height: 100vh' id='home'>
        <v-layout fill-height align-center>
          <v-flex xs12>
            <h3 class='display-3 titlename'>{ this.name.toUpperCase() }</h3>
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

.titlename
  font-family TimeBurner
  letter-spacing 0.3em !important
  word-wrap break-word
  word-spacing -0.5em
  font-weight 700
  color $primary
  &:nth-child(-n+6)
    font-weight 100
    color $secondary

.subtitle
  font-size 1.4em
  font-weight normal

.socialList li
  display inline
  list-style-type none
  padding-right 20px

.letterDrop
  position relative
  top -4.75em
  display inline-block
  text-transform uppercase
  opacity .8
  transform rotateX(-90deg)
  animation letterDrop 1.2s ease 1 normal forwards

@keyframes letterDrop
  10%
    opacity .5
  20%
    opacity .8
    top -1.75em
    transform rotateX(-360deg)
  100%
    opacity 1
    top -.75em
    transform rotateX(360deg)

</style>
