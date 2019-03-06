<template>
    <transition name="modal-transition">
        <div class="modal">
            <div class="Manage-rules">Manage rules
            </div>
            <div class="Rectangle"></div>
            <div class="duration">
                  <label>DURATION
                    <input type="text"
                           v-model="durationInput"
                           @input="regexInput">
                  </label>
            </div>
            <div class="Min-votes-to-pass">
                <label>MIN. VOTES TO PASS
                    <input type="text"
                           >
                </label>
            </div>
            <div class="VOTES-per-user">
                <label>VOTES PER USER
                    <input type="text"
                          >
                </label>
            </div>
            </div>
    </transition>
</template>

<script>
export default {
  name: 'Modal',
  data () {
    return {
      durationInput: ''
    }
  },
  props: {
    modalOpened: {
      type: Boolean
    }
  },
  methods: {
    regexInput () {
      this.durationInput = this.durationInput.replace(/[^0-9]/g, '')
    }
  }
}
</script>

<style scoped>
    .modal {
        position: relative;
        margin-top: 13px;
        transition: opacity 1s ease, transform 1s ease;
        border: solid 1px #c8d2dd;
        width: 216px;
        height: 234px;
        border-radius: 5px;
        box-shadow: 2px 3px 7px 2px rgba(0, 0, 0, 0.05), 0 2px 12px 0 rgba(132, 149, 163, 0.32);
        background-color: #ffffff;

    }

    .modal:before {
        content: '';
        display: block;
        position: absolute;
        left: 97px;
        bottom: 100%;
        width: 0;
        height: 0;
        border: 11px solid transparent;
        border-bottom-color: #c8d2dd;
    }

    .modal:after {
        content: '';
        display: block;
        position: absolute;
        left: 99px;
        bottom: 100%;
        width: 0;
        height: 0;
        border: 9px solid transparent;
        border-bottom-color: white;
    }

.modal-transition-enter-active {
    opacity: 1;

}

.modal-transition-enter{
    opacity: 0;

}
.modal-transition-leave-active {
    opacity: 0;

}
.modal-transition-leave{
    opacity: 1;
}
label:focus-within{
    color: #2db9f0;
}
input{
    border: none;
    outline:none;
    font-family: Lato;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.43;
    letter-spacing: normal;
    margin-top: 5px;
    color: #3c4a5a;
}
input:focus{
    caret-color: #2db9f0;
    text-decoration: underline #2db9f0;
    font-family: Lato;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.43;
    letter-spacing: normal;
}

.Manage-rules{
margin-top: 9px;
margin-left: 17px;
margin-bottom: 10px;
width: 85px;
height: 20px;
font-family: Lato;
font-size: 14px;
font-weight: bold;
font-style: normal;
font-stretch: normal;
line-height: 1.43;
letter-spacing: normal;
color: #3c4a5a;

}
.Rectangle{
    border-bottom: 1px solid #e8ecf2;
    width: 216px;
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
