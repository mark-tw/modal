<template>

  <div id="app">
    <button  :class="{active: isActive}"
             @click="isActive=!isActive">
        <div class="container"
             @click="openModal"
        >
            <img id="img"
                 src="@/assets/img/fill-172.png"

            />
        </div>
    </button>
           <Modal v-if="modalOpened = isActive"
           >
           </Modal>
  </div>
</template>
<script>
import Modal from '@/Modal'
export default {
  name: 'App',
  components: {
    Modal
  },
  data () {
    return {
      modalOpened: false,
      isActive: false
    }
  },
  methods: {
    openModal () {
      this.modalOpened = true
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Lato');
#app {
margin-top: 201px;
display: flex;
flex-direction: column;
align-items: center;
}
button{
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    outline: none;
    background-color: transparent;
    opacity: 0.7;
}
.active{
    opacity: 1;
    border-radius: 2px;
    background-color: #eaedf3;
}

.container{
width: 32px;
height: 32px;
object-fit: contain;
display: flex;
justify-content: center;
align-items: center;
opacity: 0.9;
}
.container:hover {
    border-radius: 2px;
    background-color: #f3f4f6
}

</style>
