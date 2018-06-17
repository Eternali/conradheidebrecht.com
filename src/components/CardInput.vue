<script>
export default {
  name: 'CardInput',
  props: {
    label: String,
    labelColor: String,
    dark: Boolean,
    lines: Number,
  },
  render() {
    return (
      <v-layout row justify-center class='my-3 mx-2'>
        <v-flex xs2 lg2>
          <v-card flat dark color={ this.labelColor || 'accent' } class='mr-3 any-card card-title'>
            <v-card-text>{ this.label }</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs8 lg8>
          { (this.lines || 1) == 1
            ? <input type='text' class='mr-3 py-3 px-3 input' />
            : <textarea rows={ this.lines } class='mr-3 py-3 px-3 input' />
          }
        </v-flex>
      </v-layout>
    );
  }
}
</script>

<style lang="stylus" scoped>
@import '../styles/themes.styl'

.card-title
  font-size 1.4rem
  font-weight 700

.input
  width 100%
  border-radius $cardrad
  outline none
  background-color $input-card
  color $input-on-dark
  font-size 1.4rem
  transition all 0.2s ease-in-out

  &:hover
    background-color $input-hover
  &:focus
    background-color $input-focus

</style>
