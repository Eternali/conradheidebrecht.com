<template>
<ul class='particles'>
  <li />
  <li />
  <li />
  <li />
  <li />
  <li />
  <li />
  <li />
  <li />
  <li />
</ul>
</template>

<script>
export default {
  name: 'Background',
  props: {
    
  }
}
</script>

<style lang='stylus' scoped>
@import '../styles/themes.styl'

.particles
  position absolute
  right 0
  top 0
  list-style none
  & > li
    position absolute
    border-radius 50%
  & > li:nth-child(1)
    width 1.6rem
    height 1.6rem
    top 10vh
    right -10vw
    background #ff0000
    opacity 0.8
    // transform translate(-50vw, 50vh)
    animation comet 4s linear infinite, comet-vis 6s linear infinite
    animation-delay 1s
  & > li:nth-child(2)
    width 1rem
    height 1rem
    top -100vh
    right -100vw
    background #00eecc
    opacity 0.9
    animation comet 2s linear infinite, comet-vis 5s linear infinite
    animation-delay 2s
  & > li:nth-child(3)
    width 1.2rem
    height 1.2rem
    top -40vh
    right 10vw
    background #0000ff
    opacity 0.7
    animation comet 3s linear infinite, comet-vis 2s linear infinite
    animation-delay 3s
  & > li:nth-child(4)
    width 1.2rem
    height 1.2rem
    top 0vh
    right 10vw
    background #f4ee42
    opacity 0.7
    animation comet 6s linear infinite, comet-vis 5s linear infinite
    animation-delay 6s
  & > li:nth-child(5)
    width 0.8rem
    height 0.8rem
    top 50vh
    right 5vw
    background #a42ab7
    opacity 0.7
    animation comet 5s linear infinite, comet-vis 6s linear infinite
    animation-delay 1.5s
  & > li:nth-child(6)
    width 1.2rem
    height 1.2rem
    top 70vh
    right 10vw
    background #fcba5d
    opacity 0.7
    animation comet 3s linear infinite, comet-vis 2s linear infinite
    animation-delay 5s
  & > li:nth-child(7)
    width 1.2rem
    height 1.2rem
    top 10vh
    right -50vw
    background #8ef29f
    opacity 0.7
    animation comet 2s linear infinite, comet-vis 3s linear infinite
    animation-delay 2.5s
  & > li:nth-child(8)
    width 1.2rem
    height 1.2rem
    top -10vh
    right 70vw
    background #47efec
    opacity 0.7
    animation comet 3s linear infinite, comet-vis 5s linear infinite
    animation-delay 3.5s
  & > li:nth-child(9)
    width 0.8rem
    height 0.8rem
    top 80vh
    right -160vw
    background #ff4f63
    opacity 0.7
    animation comet 6s linear infinite, comet-vis 5s linear infinite
    animation-delay 0.5s
  & > li:nth-child(10)
    width 1.0rem
    height 1.0rem
    top -70vh
    right -25vw
    background #cfffb2
    opacity 0.7
    animation comet 3s linear infinite, comet-vis 5s linear infinite
    animation-delay 4.5s
  

@keyframes comet
  0%
    transform translate(0, 0)
  100%
    transform translate(-180vw, 180vh)

@keyframes comet-vis
  0%
    opacity 0.0
  20%
    opacity 0.0
  22%
    opacity 1.0
  70%
    opacity 1.0
  72%
    opacity 0.0
  100%
    opacity 0.0

</style>