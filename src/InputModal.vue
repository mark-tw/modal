<template>
    <div>
    <div class="duration">
        <label>DURATION
            <input type="text"
                   maxlength="21"
                   v-model="durationInput"
                   @input="regexInput"
                   v-bind:style="inputWidthDuration"
                   @click="inputOne"
            >
        </label>
    </div>
    <div class="Min-votes-to-pass">
        <label>MIN. VOTES TO PASS
            <input type="text"
                   maxlength="21"
                   v-model="minVotes"
                   @input="regexInputTwo"
                   v-bind:style="inputWidthVotes"
                   @click="inputTwo"
            >
        </label>
    </div>
    <div class="VOTES-per-user">
        <label>VOTES PER USER
            <input type="text"
                   maxlength="21"
                   v-model="votesPerUser"
                   v-bind:style="inputWidthPerUser"
                   @input="regexInputThree"
                   @click="inputThree"
            >
        </label>
    </div>
    </div>
</template>

<script>
export default {
  name: 'Input',
  data () {
    return {
      durationInput: '',
      minVotes: '',
      votesPerUser: '',
      inputWidthDuration: {
        width: ' px',
        borderColor: 'white'
      },
      inputWidthVotes: {
        width: ' px',
        borderColor: 'white'
      },
      inputWidthPerUser: {
        width: ' px',
        borderColor: 'white'
      }
    }
  },
  methods: {
    regexInput () {
      this.durationInput = this.durationInput.replace(/[^0-9]/g, '').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
      if (this.durationInput.length) {
        this.inputWidthDuration.width = ((this.durationInput.length + 1) * 6.5) + 'px'
        this.inputWidthDuration.borderColor = '#2db9f0'
        this.inputWidthVotes.borderColor = 'white'
        this.inputWidthPerUser.borderColor = 'white'
      } else {
        this.inputWidthDuration.width = ''
        this.inputWidthDuration.borderColor = 'white'
      }
    },
    regexInputTwo () {
      this.minVotes = this.minVotes.replace(/[^0-9]/g, '').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
      if (this.minVotes.length) {
        this.inputWidthVotes.width = ((this.minVotes.length + 1) * 6.5) + 'px'
        this.inputWidthVotes.borderColor = '#2db9f0'
        this.inputWidthDuration.borderColor = 'white'
        this.inputWidthPerUser.borderColor = 'white'
      } else {
        this.inputWidthVotes.width = ''
        this.inputWidthVotes.borderColor = 'white'
      }
    },
    regexInputThree () {
      this.votesPerUser = this.votesPerUser.replace(/[^0-9]/g, '').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
      if (this.votesPerUser.length) {
        this.inputWidthPerUser.width = ((this.votesPerUser.length + 1) * 6.5) + 'px'
        this.inputWidthPerUser.borderColor = '#2db9f0'
        this.inputWidthDuration.borderColor = 'white'
        this.inputWidthVotes.borderColor = 'white'
      } else {
        this.inputWidthPerUser.width = ''
        this.inputWidthPerUser.borderColor = 'white'
      }
    },
    inputOne () {
      this.inputWidthDuration.width = ((this.durationInput.length + 1) * 6.5) + 'px'
      this.inputWidthDuration.borderColor = '#2db9f0'
      this.inputWidthVotes.borderColor = 'white'
      this.inputWidthPerUser.borderColor = 'white'
    },
    inputTwo () {
      this.inputWidthVotes.width = ((this.minVotes.length + 1) * 6.5) + 'px'
      this.inputWidthVotes.borderColor = '#2db9f0'
      this.inputWidthDuration.borderColor = 'white'
      this.inputWidthPerUser.borderColor = 'white'
    },
    inputThree () {
      this.inputWidthPerUser.width = ((this.votesPerUser.length + 1) * 6.5) + 'px'
      this.inputWidthPerUser.borderColor = '#2db9f0'
      this.inputWidthDuration.borderColor = 'white'
      this.inputWidthVotes.borderColor = 'white'
    }
  }
}
</script>

<style>
    label:focus-within{
        color: #2db9f0;
    }
    input{
        border-top: none;
        border-left: none;
        border-right: none;
        border-color: white;
        outline:none;
        font-family: Lato;
        font-size: 14px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.43;
        letter-spacing: normal;
        margin-top: 6px;
        color: #3c4a5a;

    }
    input:focus{
        caret-color: #2db9f0;
        font-family: Lato;
        font-size: 14px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.43;
        letter-spacing: normal;
    }
    .duration{
        width: 65px;
        height: 13px;
        font-family: Lato;
        font-size: 11px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: 0.9px;
        color: #3c4a5a;
        margin: 16px 17px;
    }
    .Min-votes-to-pass {
        width: 124px;
        height: 13px;
        font-family: Lato;
        font-size: 11px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: 0.9px;
        color: #3c4a5a;
        margin: 47px 17px;
    }
    .VOTES-per-user{
        width: 101px;
        height: 13px;
        font-family: Lato;
        font-size: 11px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: 0.9px;
        color: #3c4a5a;
        margin: 17px 17px;

    }
</style>
