<template>
<v-container app fluid xs12 class='py-5 grey darken-4' id='skills'>
  <v-flex xs12 lg8 offset-lg2 class='mb-2'>
    <h2>SKILLS</h2>
  </v-flex>
  <v-layout row justify-center xs12>
    <v-btn
      dark
      depressed
      color='primary'
      v-for='(type, t) in possTypes'
      :key='type'
      @click='toggleType(t)'
      :outline='focused.indexOf(t) < 0'
      :class='{
        "left-btn": t == 0,
        "right-btn": t == possTypes.length - 1,
        "middle-btn": 0 < t && t < possTypes.length - 1
      }'
    >
      <h3 class='px-5'>{{ type }}</h3>
    </v-btn>
  </v-layout>
  <v-container fluid grid-list-lg>
    <v-layout row wrap xs12 lg8 offset-lg2>
      <v-flex v-for='skill in focusedSkills' :key='skill.name' xs3 md2 lg1>
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
    skills: Array
  },
  data() {
    return {
      possTypes: this.skills.map((skill) => skill.name),
      focused: [ 0 ]
    }
  },
  computed: {
    focusedSkills() {
      return [].concat(...this.skills
        .filter((type, t) => this.focused.indexOf(t) >= 0)
        .map((type) => type.values));
    }
  },
  methods: {
    toggleType(idx) {
      let aidx = this.focused.indexOf(idx);
      if (aidx >= 0) {
        this.focused.splice(aidx, 1);
      } else {
        this.focused.push(idx);
      }
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '../styles/themes.styl'

.left-btn
  margin-right 0
  border-radius $cardrad 0 0 $cardrad

.right-btn
  margin-left 0
  border-radius 0 $cardrad $cardrad 0

.middle-btn
  margin-left 0
  margin-right 0
  border-radius 0

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
