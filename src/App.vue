<template>

  <div id="app">
    <div class="container">
      <img id="img" @click="openModal"
         src="@/assets/img/fill-172.png"/>
               <label>DURATION
            <p>
                <input>
            </p>
        </label>
        <Modal :modalOpened="modalOpened" @close="closeModal"/>
  </div>
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
      inputMessage: ''
    }
  },
  methods: {
    openModal () {
      this.modalOpened = true
    },
    closeModal () {
      this.modalOpened = false
    }

  }
}

</script>

<style scoped>
#app {
font-family: Lato;
font-size: 14px;
font-weight: bold;
font-style: normal;
font-stretch: normal;
line-height: 1.43;
letter-spacing: normal;
color: #3c4a5a;
margin-left: 600px;
}
.container{
width: 372px;
height: 349px;
border: 1px solid gray;
display: flex;
flex-direction: column;
}

#img {
  width: 16.4px;
  height: 16.4px;
  margin-top: 67px;
  margin-left: 165px;
  opacity: 0.9;
  background-color: white;
}
#img:hover{
    border-radius: 2px;
    background-color: #b2bdc6;
    opacity: 0.7;
    box-shadow: inset 0 -2px 0 0 #b2bdc6;
}

label{
margin-top: 25px;
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
    margin-left: 127px;
}
label:focus-within{
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
</style>
