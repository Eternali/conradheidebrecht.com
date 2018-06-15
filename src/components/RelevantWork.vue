<script>
export default {
  name: 'RelevantWork',
  props: {
    works: Array
  },
  render() {
    return (
      <v-container app fluid xs12 class='py-5 px-2 grey lighten-2'>
        <v-flex xs12 lg8 offset-lg2>
          { this.works.map((work, i) =>
            <v-layout row wrap justify-center class={ i >= this.works.length - 1 ? 'mb-0' : 'mb-3' }>
              { (i == 0)
                ? <v-flex xs12 md3>
                    <v-card color='primary' dark class='mx-2 mb-3 work-title'>
                      <v-card-text primary class='title'>
                        <strong>Work</strong>
                      </v-card-text>
                    </v-card>
                  </v-flex>
                : <v-flex xs12 md3 />
              }
              <v-flex xs12 md9>
                <v-card dark class='mx-2 work-el'>
                  <v-layout row wrap>
                    <v-flex xs12>
                      <v-card-text primary class='pt-3 pb-0 px-3 wcard-title'>{ work.institution }</v-card-text>
                    </v-flex>
                    <v-flex xs8>
                      <v-card-text primary class='pt-0 pb-0 pl-3 pr-1 wcard-sub'>{ work.title }</v-card-text>
                    </v-flex>
                    <v-flex xs4>
                      <v-card-text primary class='pt-0 pb-0 pl-1 pr-3 wcard-when'>
                        { `${work.start}${work.end ? ` - ${work.end}` : ``}` }
                      </v-card-text>
                    </v-flex>
                    <v-flex xs12>
                      <v-card-text primary class='pt-2 pb-3 pl-4 pr-3 wcard-desc'>{ work.desc }</v-card-text>
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-flex>
            </v-layout>
          ) }
        </v-flex>
      </v-container>
    );
  }
}
</script>

<style lang="stylus" scoped>
@import '../styles/themes.styl'

.work-title
  font-family TimeBurner
  border-radius $cardrad

.work-el
  border-radius $cardrad

.wcard-title
  text-align left
  font-size 1.6rem
  font-weight 700
  color $title-on-dark

.wcard-sub
  text-align left
  font-size 1.2rem
  font-style italic
  color $subtitle-on-dark

.wcard-when
  text-align right
  font-size 1.1rem
  color $subtitle-on-dark

.wcard-desc
  text-align left

</style>
