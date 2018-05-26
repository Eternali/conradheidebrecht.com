<script>
import GithubBoxIcon from 'vue-material-design-icons/github-box.vue'
import LinkedinBoxIcon from 'vue-material-design-icons/linkedin-box.vue'
import GooglePlayIcon from 'vue-material-design-icons/google-play.vue'
import LanguagePythonIcon from 'vue-material-design-icons/language-python.vue'

import MainAttraction from './components/MainAttraction.vue'
import ProjectCard from './components/ProjectCard.vue'

export default {
  name: 'app',
  components: {
    GithubBoxIcon,
    LinkedinBoxIcon,
    GooglePlayIcon,
    LanguagePythonIcon,

    MainAttraction,
    ProjectCard
  },
  data() {
    return {
      socialLinks: [
        {
          href: 'https://github.com/eternali',
          icon: <GithubBoxIcon />
        },
        {
          href: 'https://linkedin.com/in/conrad-heidebrecht-651395149',
          icon: <LinkedinBoxIcon />
        },
        {
          href: 'https://play.google.com/store/apps/developer?id=ChipThink+Studios&hl=en',
          icon: <GooglePlayIcon />
        },
        {
          href: 'https://pypi.org/user/eternali/',
          icon: <LanguagePythonIcon />
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
</style>
