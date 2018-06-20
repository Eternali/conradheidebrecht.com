<template>
<v-container app fluid xs12 class='py-5 px-2 grey darken-3' id='contact'>
  <v-flex xs12 lg8 offset-lg2>
    <v-layout column>
      <v-layout row justify-center>
        <v-flex xs3 md2 class='mr-2'>
          <v-icon dark size='64px'>mdi-email-outline</v-icon>
        </v-flex>
        <v-flex xs9 md8 class='mx-2 mb-2 text-xs-left'>
          <h2>GET IN TOUCH</h2>
          <h4>Want to know more? Interested in what I can do? Please do not hesitate to contact me!</h4>
        </v-flex>
      </v-layout>
      <CardInput
        label='Name'
        labelColor='primary'
        dark
        @onChange='(v) => { this.name = v; this.status = this.statuses.unsent; }'
      />
      <CardInput
        label='Email'
        labelColor='primary'
        dark
        @onChange='(v) => { this.email = v; this.status = this.statuses.unsent; }'
      />
      <CardInput
        label='Subject'
        labelColor='primary'
        dark
        @onChange='(v) => { this.subject = v; this.status = this.statuses.unsent; }'
      />
      <CardInput
        label='Message'
        labelColor='primary'
        dark
        :lines='messageLines'
        @onChange='(v) => { this.message = v; this.status = this.statuses.unsent; }'
      />
      <v-layout row justify-center>
        <v-flex xs3 md2 />
        <v-flex xs9 md8>
          <v-btn large ripple color='primary' @click='sendEmail' class='any-card'>
            <v-progress-circular v-if='status === statuses.sending' indeterminate size='34' />
            <v-icon v-else-if='status === statuses.sent' size='34'>mdi-check</v-icon>
            <v-icon v-else-if='status === statuses.failed' size='34'>mdi-close</v-icon>
            <v-icon v-else size='34'>mdi-cube-send</v-icon>
            &nbsp; SEND
          </v-btn>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-flex>
</v-container>
</template>


<script>
import CardInput from './CardInput.vue'

export default {
  name: 'ContactMe',
  components: {
    CardInput
  },
  props: {
    selfName: String,
    selfEmail: String
  },
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      message: '',
      messageLines: 10,
      statuses: {
        unsent: 'unsent',
        sending: 'sending',
        sent: 'sent',
        failed: 'failed'
      },
      status: null,
    };
  },
  methods: {
    resetInput() {
      this.name = '';
      this.email = '';
      this.subject = '';
      this.message = '';
    },
    encodeUrl(flatjson) {
      return Object.entries(flatjson).map((entry) => `${entry[0]}=${entry[1]}`).join('&');
    },
    sendEmail() {
      if (this.status === this.statuses.unsent || this.status === null) {
        this.status = this.statuses.sending;
        let request = 'https://conradheidebrecht.com:5000/sendemail/' + this.encodeUrl({
          fname: this.name,
          femail: this.email,
          tname: this.selfName,
          temail: this.selfEmail,
          subject: this.subject,
          message: this.message
        });
        console.log(request);

        Promise.race([
          fetch(request),
          new Promise((_, rej) =>
            setTimeout(() => rej(new Error('timeout')), 10000)
          )
        ]).then((resp) => {
          console.log(resp);
          this.status = this.statuses.sent;
          this.resetInput();
        }).catch((err) => {
          console.log(err);
          this.status = this.statuses.failed;
          this.resetInput();
        });
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../styles/themes.styl'

</style>
