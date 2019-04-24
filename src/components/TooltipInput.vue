<template lang='pug'>
    label(
    :class="{active: hasFocus}"
    ) {{label}}
        .input-wrapper
          input.input-tooltip(
            :value="inputValue"
            @input="onInput"
            @focus="hasFocus = true"
            @blur="hasFocus = false"
            ref="input"
            maxlength="20")
          .input-mask
            span {{inputValue}}
</template>

<script>
export default {
  name: 'TooltipInput',
  props: {
    label: {
      type: String,
      default: 'label'
    }
  },
  data () {
    return {
      inputValue: '',
      hasFocus: false
    }
  },
  methods: {
    onInput () {
      let value = this.$refs.input.value
      value = value.replace(
        /[^0-9]/g, ''
      ).replace(
        /(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '
      )
      this.$refs.input.value = value
      this.inputValue = value
    }
  }
}
</script>

<style lang='sass' scoped>
    @import url('https://fonts.googleapis.com/css?family=Lato')
    .input-mask
        border-bottom: 2px solid #2db9f0
        pointer-events: none
        opacity: 0
        position: absolute
        font-family: Lato
        font-size: 14px
        font-weight: normal
        font-style: normal
        font-stretch: normal
        line-height: 1.43
        letter-spacing: normal
        top: 0
        left: 0
    .input-wrapper
        width: fit-content
        height: fit-content
        position: relative
    .input-mask span
        opacity: 0
        position: relative
        font-size: inherit
        font-family: inherit
    .active
        color: #2db9f0
        .input-mask
            opacity: 1
    label:focus-within
        color: #2db9f0

    input
        border-top: none
        border-left: none
        border-right: none
        border-color: white
        outline: none
        font-family: inherit
        font-size: inherit
        color: #3c4a5a
        cursor: text
        &:focus
            caret-color: #2db9f0
            cursor: auto

    label
        text-transform: uppercase
        font-family: Lato
        font-size: 11px
        font-weight: bold
        font-style: normal
        font-stretch: normal
        line-height: normal
        letter-spacing: 0.9px
        color: #3c4a5a
        cursor: pointer

    .input-tooltip
        font-family: Lato
        font-size: 14px
        font-weight: normal
        font-style: normal
        font-stretch: normal
        line-height: 1.43
        letter-spacing: normal
</style>
