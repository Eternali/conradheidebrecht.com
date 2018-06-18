<template>
<v-container app fluid xs12 class='py-5 grey' id='projects'>
  <v-flex xs12 lg8 offset-lg2>
    <h2>PROJECTS</h2>
    <v-flex xs12 lg8 offset-lg2>
      <v-container fluid grid-list-lg>
        <v-layout row wrap>
          <v-flex v-for='(project, p) in projects' :key='p' xs4 md3 lg2>
            <transition>
              <v-card class='square any-card'>
                <div class='square-content'>
                  <div class='square-table'>
                    <div class='square-table-cell'>
                      <v-card-media
                        height='16em'
                        :src='project.imgs[0]'
                      />
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



</style>
