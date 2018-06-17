<template>
<v-container app fluid xs12 class='py-5 grey darken-4'>
  <v-flex xs12 lg8 offset-lg2 class='mb-2'>
    <h2>SKILLS</h2>
  </v-flex>
  <v-container fluid grid-list-lg>
    <v-layout row wrap xs12 lg8 offset-lg2>
      <v-flex v-for='skill in languages.concat(technologies)' :key='skill.name' xs3 md2 lg1>
        <transition name='skills-toggle'>
          <v-card v-if='focusTypes.indexOf(skill) >= 0' flat tile class='pt-3 px-2 any-card'>
            <v-card-media
              contain
              :src='skill.img'
              height='10rem'
            />
            <v-card-text class='px-0'>
              {{ skill.name }}
            </v-card-text>
          </v-card>
        </transition>
      </v-flex>
      <v-btn color='primary' @click="toggleType">toggle</v-btn>
    </v-layout>
  </v-container>
</v-container>
</template>

<script>
export default {
  name: 'RelevantSkills',
  props: {
    languages: Array,
    technologies: Array
  },
  data() {
    return {
      focusTypes: this.languages
    }
  },
  methods: {
    toggleType(evt) {
      this.focusTypes = this.focusTypes == this.languages ? this.technologies : this.languages
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '../styles/themes.styl'

.skill-card
  border-radius 50%

.skill-card:after
  content ''
  display block
  padding-bottom 78%

.skills-toggle-enter-active
  animation skill-card-in 0.2s

.skills-toggle-leave-active
  animation skill-card-in 0.2s reverse

@keyframes skill-card-in
  0%
    transform scale(0)
  50%
    transform scale(1.2)
  100%
    transform scale(1)

</style>
