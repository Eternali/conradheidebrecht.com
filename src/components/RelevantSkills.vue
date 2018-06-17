<template>
<v-container app fluid xs12 class='py-5 grey darken-4' id='skills'>
  <v-flex xs12 lg8 offset-lg2 class='mb-2'>
    <h2>SKILLS</h2>
  </v-flex>
  <v-layout row justify-center xs12>
    <v-flex xs12>
      <v-btn
        dark
        depressed
        @click='toggleType(possTypes.langs)'
        :outline='!focused.contains(possTypes.langs)'
        color='primary'
        class='mr-0 left-btn'
      >
        <h3 class='px-5'>Languages</h3>
      </v-btn>
      <v-btn
        dark
        depressed
        @click='toggleType(possTypes.techs)'
        :outline='!focused.contains(possTypes.techs)'
        color='primary'
        class='ml-0 right-btn'
      >
        <h3 class='px-5'>Technologies</h3>
      </v-btn>
    </v-flex>
  </v-layout>
  <v-container fluid grid-list-lg>
    <v-layout row wrap xs12 lg8 offset-lg2>
      <v-flex v-for='skill in focusSkills' :key='skill.name' xs3 md2 lg1>
        <transition name='skills-toggle'>
          <v-card flat tile class='any-card'>
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
      possTypes: { langs: 'langs', techs: 'techs' },
      focused: [ 'langs' ],
      focusSkills: this.languages
    }
  },
  methods: {
    toggleType(type) {
      if (this.focused.contains(type)) {
        this.focused.remove(type);
        this.focusedSkills();
      } else {
        this.focused.push(type);
        this.focusedSkills();
      }
      this.focused = this.focused === this.possTypes.langs ? this.possTypes.techs : this.possTypes.langs;
      this.focusSkills = this.focusSkills == this.languages ? this.technologies : this.languages;
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '../styles/themes.styl'

.left-btn
  border-radius $cardrad 0 0 $cardrad

.right-btn
  border-radius 0 $cardrad $cardrad 0

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
