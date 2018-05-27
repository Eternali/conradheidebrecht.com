<script>
import Footer from './components/Footer.vue'
import MainAttraction from './components/MainAttraction.vue'
import MainNav from './components/MainNav.vue'
import ProjectCard from './components/ProjectCard.vue'

export default {
  name: 'app',
  components: {
    Footer,
    MainAttraction,
    MainNav,
    ProjectCard
  },
  data() {
    return {
      firstname: 'Conrad',
      lastname: 'Heidebrecht',
      socialLinks: [
        {
          href: 'https://github.com/eternali',
          child: <v-icon>mdi-github-box</v-icon>
        },
        {
          href: 'https://linkedin.com/in/conrad-heidebrecht-651395149',
          child: <v-icon>mdi-linkedin-box</v-icon>
        },
        {
          href: 'https://play.google.com/store/apps/developer?id=ChipThink+Studios&hl=en',
          child: <v-icon>mdi-google-play</v-icon>
        },
        {
          href: 'https://pypi.org/user/eternali/',
          child: <v-icon>mdi-language-python</v-icon>
        }
      ],
    }
  },
  computed: {
    fullname() {
      return `${this.firstname} ${this.lastname}`;
    },
    curYear() {
      return (new Date()).getFullYear()
    }
  },
  render() {
    return (
      <div id="app">
        <v-app dark>
          <v-content>
            <MainNav />
            <MainAttraction
              name="Conrad Heidebrecht"
              subtitle={ <p>
                I'm a <a href='https://uwaterloo.ca/systems-design-engineering'>Systems Design Engineering</a> student
                at the <a href='https://uwaterloo.ca'>University of Waterloo</a> with a passion for <span>web</span> &
                <span>Android</span> development and <span>machine learning</span>. Let's
                start scrolling and <a class='smoothscroll local' href='#about'>learn more</a>
              </p> }
              links={ this.socialLinks }
            />
            <Footer links={ this.socialLinks } copyYear={ this.curYear } fullname={ this.fullname } />
          </v-content>
        </v-app>
      </div>
    );
  }
}
</script>

<style lang="stylus" scoped>
#app
  font-family 'Avenir', 'Helvetica', 'Arial', 'sans-serif'
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center

a
  text-decoration-style none
</style>
