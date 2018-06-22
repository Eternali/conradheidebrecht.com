<script>
export default {
  name: 'RelevantEducation',
  props: {
    formal: Array,
    supplement: Array
  },
  render() {
    return (
      <v-container app fluid xs12 class='py-5 px-2 grey lighten-2' id='education'>
        <v-flex xs12 lg8 offset-lg2>
          <v-container fluid class='pt-0 pb-2 px-0'>
            { this.formal.map((edu, i) =>
              <v-layout row wrap justify-center class='mb-3'>
                { (i == 0)
                  ? <v-flex xs12 md3>
                      <v-card color='accent' dark class='mx-2 mb-3 edu-title'>
                        <v-card-text primary class='title'>
                          <strong>Formal Education</strong>
                        </v-card-text>
                      </v-card>
                    </v-flex>
                  : <v-flex xs12 md3 />
                }
                <v-flex xs12 md9>
                  <v-card dark class='mx-2 edu-el'>
                    <v-layout row wrap>
                      <v-flex xs8>
                        <v-card-text primary class='pt-3 pb-0 pl-3 ecard-title'>{ edu.institution }</v-card-text>
                      </v-flex>
                      <v-flex xs4>
                        <v-card-text primary class='pt-3 pb-0 pr-3 ecard-loc'>{ edu.location }</v-card-text>
                      </v-flex>
                      <v-flex xs8>
                        <v-card-text primary class='pt-0 pb-3 pl-3 ecard-sub'>{ edu.title }</v-card-text>
                      </v-flex>
                      <v-flex xs4>
                        <v-card-text primary class='pt-0 pb-3 pr-3 ecard-when'>
                          { `${edu.start}${edu.end ? ` - ${edu.end}` : ``}` }
                        </v-card-text>
                      </v-flex>
                    </v-layout>
                  </v-card>
                </v-flex>
              </v-layout>
            ) }
          </v-container>
          <v-container fluid class='py-0 px-0'>
            { this.supplement.map(((edu, i) =>
              <v-layout row wrap justify-center class='mt-3'>
                { (i == 0)
                  ? <v-flex xs12 md3>
                      <v-card color='secondary' dark class='mx-2 mb-3 edu-title'>
                        <v-card-text primary class='title'>
                          <strong>Supplementary Education</strong>
                        </v-card-text>
                      </v-card>
                    </v-flex>
                  : <v-flex xs12 md3 />
                }
                <v-flex xs12 md9>
                  <v-card dark class='mx-2 edu-el'>
                    <v-layout row wrap>
                      <v-flex xs12>
                        <v-card-text primary class='pt-3 pb-0 pl-3 ecard-title'>{ edu.title }</v-card-text>
                      </v-flex>
                      <v-flex xs8>
                        <v-card-text primary class='pt-0 pb-3 pl-3 ecard-sub'>
                          { `${edu.institution} via ${edu.location}` }
                        </v-card-text>
                      </v-flex>
                      <v-flex xs4>
                        <v-card-text primary class='pt-0 pb-3 pr-3 ecard-when'>
                          { `${edu.start}${edu.end ? ` - ${edu.end}` : ``}` }
                        </v-card-text>
                      </v-flex>
                    </v-layout>
                  </v-card>
                </v-flex>
              </v-layout>
            )) }
          </v-container>
        </v-flex>
      </v-container>
    );
  }
}
</script>

<style lang="stylus" scoped>
@import '../styles/themes.styl'

.edu-title
  font-family TimeBurner
  border-radius $cardrad

.edu-el
  border-radius $cardrad

.ecard-title
  text-align left
  font-size 1.6rem
  font-weight 700
  color $title-on-dark

.ecard-sub
  text-align left
  font-size 1.2rem
  font-style italic
  color $subtitle-on-dark

.ecard-loc
  text-align right
  font-size 1.4rem
  color $accent

.ecard-when
  text-align right
  font-size 1.1rem
  color $subtitle-on-dark

</style>
