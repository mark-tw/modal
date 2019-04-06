<template lang='pug'>
.modal
    .Manage-rules
        | Manage rules
    .Rectangle
    .tooltip
        tooltip-input(
        v-for="label in labels"
        :label="label"
        )
</template>

<script>
import TooltipInput from './TooltipInput'
export default {
  name: 'Tooltip',
  components: {TooltipInput},
  data () {
    return {
      labels: ['duration', 'min. votes to pass', 'votes per user'],
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

<style lang='sass' scoped>
    @import url('https://fonts.googleapis.com/css?family=Lato')
    .modal
        position: relative
        margin-top: 13px
        transition: opacity 1s ease, transform 1s ease
        border: solid 1px #c8d2dd
        width: 216px
        height: 234px
        border-radius: 5px
        box-shadow: 2px 3px 7px 2px rgba(0, 0, 0, 0.05), 0 2px 12px 0 rgba(132, 149, 163, 0.32)
        background-color: #ffffff
        &:before
            content: ''
            display: block
            position: absolute
            left: 97px
            bottom: 100%
            width: 0
            height: 0
            border: 11px solid transparent
            border-bottom-color: #c8d2dd
        &:after
            content: ''
            display: block
            position: absolute
            left: 99px
            bottom: 100%
            width: 0
            height: 0
            border: 9px solid transparent
            border-bottom-color: white

    .modal-transition-enter-active
        opacity: 1

    .modal-transition-enter, .modal-transition-leave-active
        opacity: 0

    .modal-transition-leave
        opacity: 1

    .Manage-rules
        margin-top: 9px
        margin-left: 16px
        margin-bottom: 9px
        width: 85px
        height: 20px
        font-family: Lato
        font-size: 14px
        font-weight: bold
        font-style: normal
        font-stretch: normal
        line-height: 1.43
        letter-spacing: normal
        color: #3c4a5a

    .Rectangle
        border-bottom: 1px solid #e8ecf2
        width: 216px
        height: 1px
    .tooltip
        margin-top: 17px
        margin-left: 16px
</style>
