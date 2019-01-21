<script>
import Education from './utils/Education.js'
import Project from './utils/Project.js'
import Skill from './utils/Skill.js'
import Work from './utils/Work.js'

import About from './components/About.vue'
import Background from './components/Background.vue'
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
    Background,
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
      keybase: 'keybase.io/eternali',
      socialLinks: [
        {
          href: 'https://github.com/eternali',
          child: <v-icon>mdi-github-box</v-icon>
        },
        {
          href: 'https://linkedin.com/in/conrad-heidebrecht',
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
          <Background />
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
                I'm a <a href='https://uwaterloo.ca/systems-design-engineering' class='a-text'>
                Systems Design Engineering</a> student at the <a href='https://uwaterloo.ca' class='a-text'>
                University of Waterloo</a> with a passion for <span>fullstack </span>web development,&nbsp;
                <span>mobile</span> development and <span>machine learning</span>. Let's start scrolling
                and <a class='a-text smoothscroll local' href='#about'>learn more</a>!
              </p> }
              links={ this.socialLinks }
            />
            <About
              name='Conrad Heidebrecht'
              profile={ require('./assets/images/profilepic.jpg') }
              about='I am a Systems Design Engineering student at the University of Waterloo in my first year. My main interests are for web and Android development, computer hardware, cyber security, and machine learning. I have experience through the study of several online courses as well as creating several websites from scratch as well as coding browser based applications and games with HTML5 and libraries such as P5.js and Matter.js. I also have several personal Android applications in development and my knowledge is growing rapidly. I have been most recently fascinated with machine learning and artificial intelligence. I have taken several online courses on the subject and have researched and designed my own projects that demonstrate the power of machine learning.'
              phone={ this.phone }
              email={ this.email }
              keybase={ this.keybase }
              resume='/resume.pdf'
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
                  'Equibit Group',
                  'Javascript developer',
                  (<span>
                    <strong>Blockchain development</strong>&nbsp;
                    <strong>UI Testing</strong>&nbsp;
                    <strong>IBM Cloud</strong>&nbsp;
                    <strong>Feathers & Express</strong>&nbsp;
                    <strong>Frontend UI design</strong>&nbsp;
                  </span>),
                  'Sept. 2018',
                  'Dec. 2018'
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
                ),
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
                )
              ] }
            />
            <RelevantSkills
              skills={ [
                {
                  type: 'langs',
                  name: 'Languages',
                  values: [
                    new Skill('Python', 'lang', require('./assets/images/langs/python.png'), 'https://python.org'),
                    new Skill('Javascript', 'lang', require('./assets/images/langs/javascript.png'), 'https://javascript.com'),
                    new Skill('Kotlin', 'lang', require('./assets/images/langs/kotlin.png'), 'https://kotlinlang.org'),
                    new Skill('Dart', 'lang', require('./assets/images/langs/dart.png'), 'https://dartlang.org'),
                    new Skill('C++', 'lang', require('./assets/images/langs/cpp.png'), 'https://isocpp.org'),
                    new Skill('CSS 3', 'lang', require('./assets/images/langs/CSS3.png'), 'https://www.w3.org/Style/CSS/'),
                    new Skill('HTML 5', 'lang', require('./assets/images/langs/HTML5.png'), 'https://www.w3.org/html/'),
                    new Skill('Java', 'lang', require('./assets/images/langs/java.png'), 'https://docs.oracle.com/javase/10/'),
                    new Skill('MySQL', 'lang', require('./assets/images/langs/mysql.png'), 'https://mysql.com'),
                    new Skill('Octave', 'lang', require('./assets/images/langs/octave.png'), 'https://www.gnu.org/software/octave/'),
                    new Skill('Stylus', 'preprocessor', require('./assets/images/langs/stylus.png'), 'https://stylus-lang.com'),
                    new Skill('Pug', 'lang', require('./assets/images/langs/pug.svg'), 'https://pugjs.org'),
                    new Skill('Latex', 'lang', require('./assets/images/langs/latex.png'), 'https://www.latex-project.org'),
                  ]
                },
                {
                  type: 'techs',
                  name: 'Technologies',
                  values: [
                    new Skill('Flutter', 'sdk', require('./assets/images/techs/flutter.jpg'), 'https://flutter.io'),
                    new Skill('Vue', 'lib', require('./assets/images/techs/vue.png'), 'https://vuejs.org'),
                    new Skill('Android', 'lib', require('./assets/images/techs/android-studio.png'), 'https://android.com'),
                    new Skill('Arduino', 'lib', require('./assets/images/techs/arduino.png'), 'https://arduino.cc'),
                    new Skill('AWS', 'lib', require('./assets/images/techs/aws.jpg'), 'https://aws.amazon.com'),
                    new Skill('Bootstrap', 'lib', require('./assets/images/techs/bootstrap.png'), 'https://getbootstrap.com'),
                    new Skill('Chai', 'lib', require('./assets/images/techs/chai.png'), 'https://chaijs.com'),
                    new Skill('Docker', 'lib', require('./assets/images/techs/docker.png'), 'https://docker.com'),
                    new Skill('Express', 'lib', require('./assets/images/techs/express.png'), 'https://expressjs.com'),
                    new Skill('Git', 'lib', require('./assets/images/techs/git.png'), 'https://git-scm.com'),
                    new Skill('Gitlab CI', 'lib', require('./assets/images/techs/gitlab.png'), 'https://about.gitlab.com/gitlab-ci'),
                    new Skill('Gradle', 'lib', require('./assets/images/techs/gradle.png'), 'https://gradle.org'),
                    new Skill('Jenkins', 'lib', require('./assets/images/techs/jenkins.png'), 'https://jenkins.io'),
                    new Skill('JQuery', 'lib', require('./assets/images/techs/jquery.png'), 'https://jquery.com'),
                    new Skill('Mocha', 'lib', require('./assets/images/techs/mocha.png'), 'https://mochajs.org'),
                    new Skill('NodeJS', 'lib', require('./assets/images/techs/nodejs.png'), 'https://nodejs.org'),
                    new Skill('Numpy', 'lib', require('./assets/images/techs/numpy.png'), 'https://numpy.org'),
                    new Skill('PixiJS', 'lib', require('./assets/images/techs/pixi.png'), 'https://pixijs.com'),
                    new Skill('Qunit', 'lib', require('./assets/images/techs/qunit.png'), 'https://qunitjs.com'),
                    new Skill('Terraform', 'lib', require('./assets/images/techs/terraform.png'), 'https://terraform.io'),
                    new Skill('ThreeJS', 'lib', require('./assets/images/techs/three.png'), 'https://threejs.org'),
                    new Skill('Linux', 'lib', require('./assets/images/techs/tux.png'), 'https://linux.org'),
                    new Skill('VirtualBox', 'lib', require('./assets/images/techs/virtualbox.png'), 'https://virtualbox.org'),
                  ]
                }
              ] }
            />
            <RelevantProjects
              projects={ [
                new Project(
                  'WAToPlan',
                  '',
                  ['Mobile', 'Cross-platform', 'Flutter'],
                  [
                    {
                      needsFull: true,
                      img: require('./assets/images/projects/watoplan01.png')
                    }
                  ],
                  'https://github.com/eternali/watoplan_flut'
                ),
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
                ),
                new Project(
                  'Admonere',
                  '',
                  ['Android', 'Kotlin'],
                  [
                    {
                      needsFull: true,
                      img: require('./assets/images/projects/admonere01.png')
                    }
                  ],
                  'https://github.com/eternali/AndroidProjects'
                ),
                new Project(
                  'Limen',
                  '',
                  ['Scripting', 'Serverside'],
                  [
                    {
                      img: require('./assets/images/projects/limen01.png')
                    }
                  ],
                  'https://github.com/eternali/limen'
                ),
                new Project(
                  'Synk',
                  '',
                  ['Collaboration Software', 'Python'],
                  [
                    {
                      img: require('./assets/images/projects/synk01.jpg')
                    }
                  ],
                  'https://devpost.com/software/synk-ronized-programming'
                ),
              ] }
            />
            <ContactMe
              selfName={ this.fullname }
              selfEmail={ this.email }
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
  background #1a1a1a
  font-family 'Avenir', 'Helvetica', 'Arial', 'sans-serif'
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center

.a-text
  text-decoration none
  white-space nowrap
  color $primary
  z-index 1
  &:before
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
  &:hover:before, &:focus:before
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

.vb > .vb-dragger
  z-index 5
  width 12px
  right 0

.vb > .vb-dragger > .vb-dragger-styler
  -webkit-backface-visibility hidden
  backface-visibility hidden
  -webkit-transform rotate3d(0,0,0,0)
  transform rotate3d(0,0,0,0)
  -webkit-transition:
    background-color 100ms ease-out,
    margin 100ms ease-out,
    height 100ms ease-out
  transition:
    background-color 100ms ease-out,
    margin 100ms ease-out,
    height 100ms ease-out
  background-color rgba(48, 121, 244, 0.1)
  margin 5px 5px 5px 0
  border-radius 20px
  height calc(100% - 10px)
  display block

.vb.vb-scrolling-phantom > .vb-dragger > .vb-dragger-styler
  background-color rgba(48, 121, 244, 0.3)

.vb > .vb-dragger:hover > .vb-dragger-styler
  background-color rgba(48, 121, 244,.5)
  margin 0px
  height 100%

.vb.vb-dragging > .vb-dragger > .vb-dragger-styler
  background-color rgba(48, 121, 244, 0.5)
  margin 0px
  height 100%

.vb.vb-dragging-phantom > .vb-dragger > .vb-dragger-styler
  background-color rgba(48, 121, 244, 0.5)

</style>
