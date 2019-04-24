<template lang='pug'>
  #app
    button(
    :class='{active: isActive}'
    @click='isActive=!isActive'
    )
      .container(
      @click='openModal'
      )
        img#img(
        src='@/assets/img/fill-172.png'
        )
    transition(name='modal-transition')
        .modal
    tooltip(
    v-if='modalOpened = isActive'
    )
</template>
<script>
import Tooltip from '@/components/Tooltip'
import TooltipInput from '@/components/TooltipInput'
export default {
  name: 'App',
  components: {
    Tooltip,
    TooltipInput
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

<style lang="sass" scoped>
    @import url('https://fonts.googleapis.com/css?family=Lato')
    #app
        margin-top: 201px
        display: flex
        flex-direction: column
        align-items: center

    button
        padding: 0
        border: none
        font: inherit
        color: inherit
        outline: none
        background-color: transparent
        opacity: 0.7
        cursor: pointer

    .active
        opacity: 1
        border-radius: 2px
        background-color: #eaedf3

    .container
        width: 32px
        height: 32px
        object-fit: contain
        display: flex
        justify-content: center
        align-items: center
        opacity: 0.9
        &:hover
            border-radius: 2px
            background-color: #f3f4f6
</style>
