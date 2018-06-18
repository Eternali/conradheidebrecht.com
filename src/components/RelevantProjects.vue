<template>
<v-container app fluid xs12 class='py-5 grey' id='projects'>
  <v-flex xs12 lg8 offset-lg2>
    <h2>PROJECTS</h2>
    <v-container fluid grid-list-lg>
      <v-layout row wrap xs12 lg8 offset-lg2>
        <v-flex v-for='(project, p) in projects' :key='p' xs4 md3 lg2>
          <transition>
            <v-card class='any-card'>
              <v-card-media
                height='16rem'
                :src='project.imgs[0]'
              />
            </v-card>
          </transition>
        </v-flex>
      </v-layout>
    </v-container>
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
