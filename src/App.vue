<script>
import Address from './utils/Address.js'
import Education from './utils/Education.js'
import Project from './utils/Project.js'
import Skill from './utils/Skill.js'
import Work from './utils/Work.js'

import About from './components/About.vue'
import ContactMe from './components/ContactMe.vue'
import RelevantEducation from './components/RelevantEducation.vue'
import RelevantProjects from './components/RelevantProjects.vue'
import RelevantSkills from './components/RelevantSkills.vue'
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
    RelevantProjects,
    RelevantSkills,
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
                  'href': () => '#home',
                  'icon': 'mdi-home'
                },
                {
                  'name': 'ABOUT',
                  'href': () => '#about',
                  'icon': 'mdi-information'
                },
                {
                  'name': 'RESUME',
                  'href': () => '#education',
                  'icon': 'mdi-clipboard-text'
                },
                {
                  'name': 'SKILLS',
                  'href': () => '#skills',
                  'icon': 'mdi-file-find'
                },
                {
                  'name': 'PROJECTS',
                  'href': () => '#projects',
                  'icon': 'mdi-projector-screen'
                },
                {
                  'name': 'CONTACT',
                  'href': () => '#contact',
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
              profile={ require('./assets/images/profilepic.jpg') }
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
            <RelevantSkills
              skills={ [
                {
                  type: 'langs',
                  name: 'Languages',
                  values: [
                    new Skill('Python', 'lang', require('./assets/images/langs/python.png'), 'python.org'),
                    new Skill('Javascript', 'lang', require('./assets/images/langs/javascript.png'), 'javascript.org'),
                    new Skill('Kotlin', 'lang', require('./assets/images/langs/kotlin.png'), 'kotlinlang.org'),
                    new Skill('Dart', 'lang', require('./assets/images/langs/dart.png'), 'dart.org'),
                    new Skill('C++', 'lang', require('./assets/images/langs/cpp.png'), 'dart.org'),
                    new Skill('CSS 3', 'lang', require('./assets/images/langs/CSS3.png'), 'dart.org'),
                    new Skill('HTML 5', 'lang', require('./assets/images/langs/HTML5.png'), 'dart.org'),
                    new Skill('Java', 'lang', require('./assets/images/langs/java.png'), 'dart.org'),
                    new Skill('MySQL', 'lang', require('./assets/images/langs/mysql.png'), 'dart.org'),
                    new Skill('Octave', 'lang', require('./assets/images/langs/octave.png'), 'dart.org'),
                    new Skill('Stylus', 'lang', require('./assets/images/langs/stylus.png'), 'dart.org'),
                    new Skill('Pug', 'lang', require('./assets/images/langs/pug.svg'), 'dart.org'),
                    new Skill('Latex', 'lang', require('./assets/images/langs/latex.png'), 'dart.org'),
                  ]
                },
                {
                  type: 'techs',
                  name: 'Technologies',
                  values: [
                    new Skill('Flutter', 'sdk', require('./assets/images/techs/flutter.jpg'), 'flutter.io'),
                    new Skill('Vue', 'lib', require('./assets/images/techs/vue.png'), 'vuejs.org'),
                    new Skill('Android', 'lib', require('./assets/images/techs/android-studio.png'), 'vuejs.org'),
                    new Skill('Arduino', 'lib', require('./assets/images/techs/arduino.png'), 'vuejs.org'),
                    new Skill('AWS', 'lib', require('./assets/images/techs/aws.jpg'), 'vuejs.org'),
                    new Skill('Bootstrap', 'lib', require('./assets/images/techs/bootstrap.png'), 'vuejs.org'),
                    new Skill('Chai', 'lib', require('./assets/images/techs/chai.png'), 'vuejs.org'),
                    new Skill('Docker', 'lib', require('./assets/images/techs/docker.png'), 'vuejs.org'),
                    new Skill('Express', 'lib', require('./assets/images/techs/express.png'), 'vuejs.org'),
                    new Skill('Git', 'lib', require('./assets/images/techs/git.png'), 'vuejs.org'),
                    new Skill('Gitlab CI', 'lib', require('./assets/images/techs/gitlab.png'), 'vuejs.org'),
                    new Skill('Gradle', 'lib', require('./assets/images/techs/gradle.png'), 'vuejs.org'),
                    new Skill('Jenkins', 'lib', require('./assets/images/techs/jenkins.png'), 'vuejs.org'),
                    new Skill('JQuery', 'lib', require('./assets/images/techs/jquery.png'), 'vuejs.org'),
                    new Skill('Mocha', 'lib', require('./assets/images/techs/mocha.png'), 'vuejs.org'),
                    new Skill('NodeJS', 'lib', require('./assets/images/techs/nodejs.png'), 'vuejs.org'),
                    new Skill('Numpy', 'lib', require('./assets/images/techs/numpy.png'), 'vuejs.org'),
                    new Skill('PixiJS', 'lib', require('./assets/images/techs/pixi.png'), 'vuejs.org'),
                    new Skill('Qunit', 'lib', require('./assets/images/techs/qunit.png'), 'vuejs.org'),
                    new Skill('Terraform', 'lib', require('./assets/images/techs/terraform.png'), 'vuejs.org'),
                    new Skill('ThreeJS', 'lib', require('./assets/images/techs/three.png'), 'vuejs.org'),
                    new Skill('Linux', 'lib', require('./assets/images/techs/tux.png'), 'vuejs.org'),
                    new Skill('VirtualBox', 'lib', require('./assets/images/techs/virtualbox.png'), 'vuejs.org'),
                  ]
                }
              ] }
            />
            <RelevantProjects
              projects={ [
                new Project(
                  'Defense Matrix',
                  'desc',
                  ['Security', 'Linux'],
                  [
                    {
                      img: require('./assets/images/projects/defmatrix01.png')
                    }
                  ],
                  'https://devpost.com/software/defensematrix-5xujtk'
                ),
                new Project(
                  'Population: Flappy',
                  '',
                  ['Machine Learning', 'PixiJS'],
                  [
                    {
                      img: require('./assets/images/projects/flappy01.png')
                    }
                  ],
                  'https://conradheidebrecht.com/#flappy'
                ),
                new Project(
                  'Custom Quadcopter',
                  '',
                  ['Hardware', 'Robotics'],
                  [
                    {
                      img: require('./assets/images/projects/quadcopter01.jpg')
                    }
                  ],
                  'https://conradheidebrecht.com/#quadcopter'
                ),
                new Project(
                  'Custom PCs',
                  '',
                  ['Hardware', 'Computing'],
                  [
                    {
                      img: require('./assets/images/projects/pc01.jpg')
                    }
                  ],
                  'https://conradheidebrecht.com/#pc'
                ),
                new Project(
                  'Tanks',
                  '',
                  ['Python', 'Game Development'],
                  [
                    {
                      needsFull: true,
                      img: require('./assets/images/projects/tanks01.png')
                    }
                  ],
                  'https://github.com/eternali/tanks'
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

<style lang="stylus">
@import './styles/themes.styl'
@import url(https://fonts.googleapis.com/css?family=Quando)

@font-face
  font-family TimeBurner
  src url('./assets/fonts/timeburner/timeburnernormal.ttf')

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

h2
  color $title-on-dark
  font-family TimeBurner
  letter-spacing 4px
  font-size 1.8rem

h4
  color $subtitle-on-dark
  font-size 1.1rem

.any-card
  border-radius $cardrad

$square-width = 100%
.square
  float left
  position relative
  width $square-width
  padding-bottom $square-width
  overflow hidden

.square-content
  position absolute
  height 100%
  width 100%
  padding 0

.square-table
  display table
  height 100%
  width 100%

.square-table-cell
  display table-cell
  vertical-align middle
  height 100%
  width 100%

</style>
