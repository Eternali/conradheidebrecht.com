<script>
export default {
    name: 'RelevantEducation',
    props: {
        formal: Array,
        supplement: Array
    },
    render() {
      return (
        <v-container fluid xs12 class='grey lighten-2' style='padding: 2rem 0'>
          <v-flex xs12 lg-8 offset-lg2>
            { this.formal.map(((edu, i) =>
              <v-layout row wrap justify-center style='margin: 2rem 0rem'>
                { (i == 0)
                  ? <v-flex xs12 md3>
                      <v-card color='accent' dark class='edu-title'>
                        <v-card-text primary class='title'>Formal Education</v-card-text>
                      </v-card>
                    </v-flex>
                  : <v-flex xs12 md3 />
                }
                <v-flex xs12 md9>
                  <v-card dark class='edu-el'>
                    <v-card-text primary class='title'>{ edu.institution }</v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            )) }
            { this.supplement.map(((edu, i) =>
              <v-layout row wrap justify-center style='margin: 2rem 0rem'>
                { (i == 0)
                  ? <v-flex xs12 md3>
                      <v-card color='secondary' dark class='edu-title'>
                        <v-card-text primary class='title'>Supplementary Education</v-card-text>
                      </v-card>
                    </v-flex>
                  : <v-flex xs12 md3 />
                }
                <v-flex xs12 md9>
                  <v-card dark class='edu-el'>
                    <v-card-text primary class='title'>{ edu.title }</v-card-text>
                    <v-card-text primary>{ `${edu.institution} via ${edu.location}` }</v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            )) }
          </v-flex>
        </v-container>
      );
    }
}
</script>

<style lang="stylus" scoped>
@import '../styles/themes.styl'

.edu-title
  margin 0rem 1rem 0rem 2rem
  border-radius $cardrad
.edu-el
  margin 0rem 2rem 0rem 1rem
  border-radius $cardrad
</style>
