<template>
    <transition name="modal-transition">

        <div class="modal" v-if="modalOpened">
            <div class="mod_desc">Manage Rules</div><hr>
            <div class="modal-content">
                <div @click="emitClose" class="modal-background"></div>
                <label class="modal-label">DURATION
                    <input  type="text" oninput="this.value = this.value.replace(/[^0-9]/g, '')">
                </label>
            </div>
            <div class="modal-content">
                <label class="modal-label">MIN. VOTES TO PASS
                    <input type="text" oninput="this.value = this.value.replace(/[^0-9]/g, '')">
                </label>
            </div>
            <div class="modal-content">
                <label class="modal-label">VOTES PER USER
                    <input type="text" oninput="this.value = this.value.replace(/[^0-9]/g, '')">
                </label>
            </div>

            </div>

    </transition>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    modalOpened: {
      type: Boolean
    }
  },
  methods: {
    emitClose () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.modal {
    margin-top: -30px;
    margin-left: 66px;
    width: 216px;
    height: 241px;
    border-radius: 3px;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.05), 0 2px 12px 0 rgba(132, 149, 163, 0.32);
    border: solid 1px #c8d2dd;
    background-color: #ffffff;
    transition: opacity 1s ease, transform 1s ease;
    position: relative;

}
.modal:after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 8px solid transparent;
    border-bottom-color: #c8d2dd;
    border-top: 0;
    margin-left: -10px;
    margin-top: -8px;
}

.modal-background{
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
}
.modal-content{
    width: 216px;
    height: 56px;
    margin-left: 16px;
    margin-top: 9px;
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
.modal-label{
    font-family: Lato;
    font-size: 11px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 0.9px;
    color: #3c4a5a;
}
.modal-label:focus-within{
    color: #2db9f0;
}
input{
    border: none;
    outline:none;
}
input:focus{
    caret-color: #2db9f0;
    text-decoration: underline #2db9f0;
}
.mod_desc{
    margin-top: 7px;
    margin-left: 16px;
}
hr{
    border: 1px  solid #e8ecf2;
}
</style>
