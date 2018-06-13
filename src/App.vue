<script>
import Address from './utils/Address.js'

import About from './components/About.vue'
import Footer from './components/Footer.vue'
import MainAttraction from './components/MainAttraction.vue'
import MainNav from './components/MainNav.vue'
import ProjectCard from './components/ProjectCard.vue'

export default {
  name: 'app',
  components: {
    About,
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
            <MainNav items={ [
              {
                'name': 'HOME',
                'href': () => { '#home' },
                'icon': 'mdi-home'
              },
              {
                'name': 'ABOUT',
                'href': () => { '#about' },
                'icon': 'mdi-information'
              },
              {
                'name': 'RESUME',
                'href': () => { '#resume' },
                'icon': 'mdi-clipboard-text'
              },
              {
                'name': 'SKILLS',
                'href': () => { '#skills' },
                'icon': 'mdi-file-find'
              },
              {
                'name': 'WORKS',
                'href': () => { '#works' },
                'icon': 'mdi-projector-screen'
              },
              {
                'name': 'CONTACT',
                'href': () => { '#contact' },
                'icon': 'mdi-contact-mail'
              }
            ] } />
            <MainAttraction
              name='Conrad Heidebrecht'
              subtitle={ <p>
                I'm a <a href='https://uwaterloo.ca/systems-design-engineering'>Systems Design Engineering</a> student
                at the <a href='https://uwaterloo.ca'>University of Waterloo</a> with a passion for <span>fullstack </span>
                web development, <span>mobile</span> development and <span>machine learning</span>. Let's
                start scrolling and <a class='smoothscroll local' href='#about'>learn more</a>!
              </p> }
              links={ this.socialLinks }
            />
            <About
              name='Conrad Heidebrecht'
              profile={ require('./assets/profilepic.jpg') }
              about='I am a Systems Design Engineering student at the University of Waterloo in my first year.My main interests are for web and Android development, computer hardware, cyber security, and machine learning. I have experience through the study of several online courses as well as creating several websites from scratch as well as coding browser based applications and games with HTML5 and libraries such as P5.js and Matter.js. I also have several personal Android applications in development and my knowledge is growing rapidly. I have been most recently fascinated with machine learning and artificial intelligence. I have taken several online courses on the subject and have researched and designed my own projects that demonstrate the power of machine learning.'
              address={ new Address('67 Agnes Street', 'Kitchener', 'ON', 'N2G 2E9', 'Canada') }
              phone='(519) 501-4327'
              email='crbheide@edu.uwaterloo.ca'
              resume='./assets/resume.pdf'
            />
            <Footer
              links={ this.socialLinks }
              copyYear={ this.curYear }
              fullname={ this.fullname }
            />
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

@font-face {
  font-family: TimeBurner;
  src: url('./assets/fonts/timeburner/timeburnernormal.ttf');
}
</style>
