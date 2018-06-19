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
        @onChange='(v) => { this.name = v; }'
      />
      <CardInput
        label='Email'
        labelColor='primary'
        dark
        @onChange='(v) => { this.email = v; }'
      />
      <CardInput
        label='Subject'
        labelColor='primary'
        dark
        @onChange='(v) => { this.subject = v; }'
      />
      <CardInput
        label='Message'
        labelColor='primary'
        dark
        :lines='messageLines'
        @onChange='(v) => { this.message = v; }'
      />
      <v-layout row justify-center>
        <v-flex xs3 md2 />
        <v-flex xs9 md8>
          <v-btn large ripple color='primary' @click='sendEmail' class='any-card'>
            <v-progress-circular v-if='status === statuses.sending' indeterminate size='34' />
            <v-icon v-else-if='status === statuses.sent' size='34'>mdi-check</v-icon>
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
        sent: 'sent'
      },
      status: null,
    };
  },
  methods: {
    sendEmail() {
      if (this.status === this.statuses.unsent || this.status === null) {
        this.status = this.statuses.sending;
        let request = 'https://conradheidebrecht.com/sendemail?' + JSON.stringify({
          selfEmail: this.selfEmail,
          name: this.name,
          email: this.email,
          subject: this.subject,
          message: this.message
        });
        console.log(request);
        fetch(request)
          .then(function(resp) {
            console.log(resp);
            this.status = this.statuses.sent;
          });
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../styles/themes.styl'

</style>
