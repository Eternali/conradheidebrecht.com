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
  <v-flex xs12 lg8 offset-lg2>
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex v-for='skill in focusedSkills' :key='skill.name' xs3 md2>
          <transition name='skills-toggle'>
            <v-card flat tile class='square any-card'>
              <div class='square-content'>
                <div class='square-table'>
                  <div class='square-table-cell'>
                    <v-card-media
                      contain
                      height='8rem'
                      :src='skill.img'
                    />
                    <!-- <v-card-text class='px-0'>
                      {{ skill.name }}
                    </v-card-text> -->
                  </div>
                </div>
              </div>
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

// .skill-card:after
//   content ''
//   display block
//   padding-bottom 100%

// .skills-toggle-enter-active
//   animation skill-card-in 0.2s

// .skills-toggle-leave-active
//   animation skill-card-in 0.2s reverse

@keyframes skill-card-in
  0%
    transform scale(0)
  50%
    transform scale(1.2)
  100%
    transform scale(1)

</style>
