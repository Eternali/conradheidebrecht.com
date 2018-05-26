<script>
import logo from './assets/logo.png'
import ProjectCard from './components/ProjectCard.vue'

export default {
  name: 'app',
  components: {
    ProjectCard
  },
  render() {
    return (
      <div id="app">
        <section class='hero is-fullheight has-background-black'>
          <div class='hero-body'>
            <div class='container'>
              <p class title is-4>CONRAD HEIDEBRECHT</p>
            </div>
          </div>
        </section>
        <ProjectCard
          title='WAToPlan'
          msg='A simple, yet flexible time management app.'
          img={ logo }
          link='https://play.google.com/apps/testing/com.chipthinkstudios.watoplan.free' />
      </div>
    );
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', 'Helvetica', 'Arial', 'sans-serif';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
