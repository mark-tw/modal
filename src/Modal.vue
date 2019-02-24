<template>
    <transition name="modal-transition">
        <div class="modal" v-if="modalOpened">
            <div @click="emitClose" class="modal-background"></div>
            <div class="modal-content">
             <input
                     type="text"
                     placeholder="Username"
                     onkeydown="this.style.width = ((this.value.length + 1) * 8) + 'px'">
                <input
                     type="text"
                     placeholder="Other info"
                     onkeydown="this.style.width = ((this.value.length + 1) * 8) + 'px'"
                />
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
.modal, .modal-background{
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
}
.modal-background{
    background-color: rgba(10, 10, 10, 0.8);
    z-index: 40;
}
.modal{
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 1s ease, transform 1s ease;

}
.modal-content{
    background-color: white;
    z-index: 50;
    padding: 2em;
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
input{
    min-width: 135px;
}
</style>
