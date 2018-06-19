<template>
<v-container app fluid xs12 class='py-5 grey' id='projects'>
  <v-flex xs12 lg8 offset-lg2>
    <h2>PROJECTS</h2>
    <v-flex xs12>
      <v-container fluid grid-list-lg>
        <v-layout row wrap>
          <v-flex v-for='project in projects' :key='project.name' xs4 md3>
            <transition name='projects-toggle'>
              <v-card tile flat hover :href='project.href' class='square any-card'>
                <div class='square-content' style='margin: 0'>
                  <div class='square-table'>
                    <div class='square-table-cell'>
                      <v-card-media
                        :contain='project.imgs[0].needsFull || false'
                        height='16em'
                        :src='project.imgs[0].img'
                        class='project-img'
                      />
                      <div class='overlay'>
                        <div>
                          <h3>{{ project.name }}</h3>
                          <p> {{ project.tags.join(' - ') }}</p>
                          <v-btn fab flat icon><v-icon>mdi-link</v-icon></v-btn><!-- or mdi-plus -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </v-card>
            </transition>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-flex>
</v-container>
</template>


<script>
export default {
  name: 'RelevantProjects',
  props: {
    projects: Array
  }
}
</script>

<style lang='stylus' scoped>
@import '../styles/themes.styl'

.project-img
  filter blur(0.3px)
  transition all 0.2s ease-in-out

.square-content
  // transform translateZ(0)
  // backface-visibility hidden
  // perspective 1000
  &:hover
    .project-img
      filter blur(4px)
    .overlay
      background-color rgba(0, 0, 0, 0.3)
      opacity 1

.overlay
  position absolute
  top 0
  left 0
  width 100%
  height 100%
  line-height 16em
  opacity 0
  transition all 0.2s ease-in-out
  & div
    display inline-block
    vertical-align middle
    line-height normal
    & h3
      margin-bottom 1em
    & p
      margin-bottom 0

</style>
