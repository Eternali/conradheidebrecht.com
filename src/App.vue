<script>
import Address from './utils/Address.js'
import Education from './utils/Education.js'
import Work from './utils/Work.js'

import About from './components/About.vue'
import ContactMe from './components/ContactMe.vue'
import RelevantEducation from "./components/RelevantEducation.vue"
import RelevantWork from "./components/RelevantWork.vue"
import Footer from './components/Footer.vue'
import MainAttraction from './components/MainAttraction.vue'
import MainNav from './components/MainNav.vue'
import ProjectCard from './components/ProjectCard.vue'

export default {
  name: 'app',
  components: {
    About,
    ContactMe,
    RelevantEducation,
    RelevantWork,
    Footer,
    MainAttraction,
    MainNav,
    ProjectCard
  },
  data() {
    return {
      firstname: 'Conrad',
      lastname: 'Heidebrecht',
      email: 'crbheide@edu.uwaterloo.ca',
      phone: '(519) 501-4327',
      address: new Address('67 Agnes Street', 'Kitchener', 'ON', 'N2G 2E9', 'Canada'),
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
            <MainNav
              items={ [
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
              ] }
            />
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
              address={ this.address }
              phone={ this.phone }
              email={ this.email }
              resume='./assets/resume.pdf'
            />
            <RelevantEducation
              formal={ [
                new Education('University of Waterloo', 'Candidate for Bachelor of Applied Science', 'Waterloo, ON', 'Sept. 2017', 'present'),
                new Education('Rockway Mennnonite Collegiate', 'Ontario Secondary School Diploma', 'Kitchener, ON', 'Jun. 2017')
              ] }
              supplement={ [
                new Education('University of Toronto', 'Neural Networks for Machine Learning', 'Coursera.org', 'Jun. 2016', 'Sept. 2016')
              ] }
            />
            <v-divider dark color='primary' />
            <RelevantWork
              works={ [
                new Work(
                  'University of Waterloo Computer Museum',
                  'Museum Technician',
                  (<span>
                    <strong>Collective Access:</strong>&nbsp;
                    Collective Access is an open source software for managing and publishing museum and
                    archival collections.<br />
                    <strong>Server Administration:</strong>&nbsp;
                    I set up multiple Ubuntu web servers for both testing and production purposes as well
                    as developed several custom scripts to streamline project installation and backup, data
                    import and export, and project configuration.
                  </span>),
                  'Oct. 2016',
                  'Sept. 2017'
                ),
                new Work(
                  'Espial Group Inc.',
                  'Server-side Cloud Developer',
                  (<span>
                    <strong>Amazon Web Services:</strong>&nbsp;
                     I helped build several APIs utilizing services including Lambda, API Gateway, S3, ECS,
                     ELB, and RDS. In the process, I became familiar with AWS management tools, and a
                     frequent user of the python and node.js SDKs.<br />
                     <strong>Infastructure as Code:</strong>&nbsp;
                     I helped design, implement, test and release a standalone REST API from the ground up
                     with Cloudformation and Boto3. I also helped migrate on-premise infrastructure to
                     AWS with Terraform and Docker.<br />
                     <strong>Automated Testing:</strong>&nbsp;
                     I added features to the company’s (Qunit based) test runner, as well as pioneered
                     the utilization of Mocha/Chai within the company.<br />
                     <strong>Continuous Integration:</strong>&nbsp;
                     I helped add new builds to Jenkins, wrote new tasks in Gradle, and helped migrate
                     the company’s code hosting and VCS from Bitbucket to Gitlab, retrofitting Jenkins
                     builds to be run with Gitlab CI.
                  </span>),
                  'Jan. 2018',
                  'Apr. 2018'
                )
              ] }
            />
            <ContactMe
              email={ this.email }
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
@import './styles/themes.styl'
@import url(https://fonts.googleapis.com/css?family=Quando)
*, *:after, *:before
  box-sizing border-box
*
  margin 0
  padding 0
  border 0 none
  position relative
  outline none

#app
  font-family 'Avenir', 'Helvetica', 'Arial', 'sans-serif'
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center

a
  text-decoration none
  white-space nowrap
  color $primary
  z-index 1
a:before
  content ""
  position absolute
  width 100%
  height 2px
  bottom 0
  left 0
  background $primary
  visibility hidden
  border-radius 5px
  transform scaleX(0)
  transition 0.20s ease-in-out
a:hover:before, a:focus:before
  visibility visible
  transform scaleX(1)

@font-face {
  font-family: TimeBurner;
  src: url('./assets/fonts/timeburner/timeburnernormal.ttf');
}
</style>
