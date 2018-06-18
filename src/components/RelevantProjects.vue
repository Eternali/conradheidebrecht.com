<template>
<v-container app fluid xs12 class='py-5 grey' id='projects'>
  <v-flex xs12 lg8 offset-lg2>
    <h2>PROJECTS</h2>
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
