<template>
<v-layout row justify-center class='my-3 mx-2'>
  <v-flex xs3 md2>
    <v-card flat dark :color='labelColor' class='mr-3 any-card card-title'>
      <v-card-text>{{ label }}</v-card-text>
    </v-card>
  </v-flex>
  <v-flex xs9 md8>
    <input v-if='lines === 1' v-model='value' type='text' class='mr-3 py-3 px-3 input' />
    <!-- <div class='mr-3 py-3 px-3 input' v-bar></div> -->
    <textarea
      v-else
      v-model='value'
      :rows='lines'
      class='mr-3 py-3 px-3 input'
    />
  </v-flex>
</v-layout>
</template>

<script>
export default {
  name: 'CardInput',
  props: {
    label: String,
    labelColor: {
      default: 'accent',
      type: String
    },
    dark: Boolean,
    lines: {
      default: 1,
      type: Number
    }
  },
  data() {
    return {
      value: ''
    }
  },
  watch: {
    value: function(v) {
      this.$emit('onChange', v);
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../styles/themes.styl'

.card-title
  font-size 1.4rem
  font-weight 700

.input
  width 100%
  border-radius $cardrad
  outline none
  resize none
  background-color $input-card
  color $input-on-dark
  font-size 1.4rem
  transition all 0.2s ease-in-out

  &:hover
    background-color $input-hover
  &:focus
    background-color $input-focus

</style>
