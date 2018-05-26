<script>
import MainAttraction from './components/MainAttraction.vue'
import ProjectCard from './components/ProjectCard.vue'

export default {
  name: 'app',
  components: {
    MainAttraction,
    ProjectCard
  },
  data() {
    return {
      socialLinks: [
        {
          href: 'https://github.com/eternali',
          icon: <v-icon>mdi-github-box</v-icon>
        },
        {
          href: 'https://linkedin.com/in/conrad-heidebrecht-651395149',
          icon: <v-icon>mdi-linkedin-box</v-icon>
        },
        {
          href: 'https://play.google.com/store/apps/developer?id=ChipThink+Studios&hl=en',
          icon: <v-icon>mdi-google-play</v-icon>
        },
        {
          href: 'https://pypi.org/user/eternali/',
          icon: <v-icon>mdi-language-python</v-icon>
        }
      ],
    }
  },
  render() {
    return (
      <div id="app">
        <MainAttraction
          name="Conrad Heidebrecht"
          subtitle={ <p>
            I'm a <a href='https://uwaterloo.ca/systems-design-engineering'>Systems Design Engineering</a> student
            at the <a href='https://uwaterloo.ca'>University of Waterloo</a> with a passion for <span>web</span> &
            <span>Android</span> development and <span>machine learning</span>. Let's
            start scrolling and <a class='smoothscroll local' href='#about'>learn more</a>
          </p> }
          links={ this.socialLinks.map((link) => (<a href={ link.href }>{ link.icon }</a>)) }
        />
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
}

a {
  text-decoration-style: none;
}
</style>
